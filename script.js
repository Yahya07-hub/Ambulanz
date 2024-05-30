function loco() {
    gsap.registerPlugin(ScrollTrigger);

    // Using Locomotive Scroll from Locomotive https://github.com/locomotivemtl/locomotive-scroll

    const locoScroll = new LocomotiveScroll({
        el: document.querySelector("#main"),
        smooth: true
    });
    // each time Locomotive Scroll updates, tell ScrollTrigger to update too (sync positioning)
    locoScroll.on("scroll", ScrollTrigger.update);

    // tell ScrollTrigger to use these proxy methods for the "#main" element since Locomotive Scroll is hijacking things
    ScrollTrigger.scrollerProxy("#main", {
        scrollTop(value) {
            return arguments.length ? locoScroll.scrollTo(value, 0, 0) : locoScroll.scroll.instance.scroll.y;
        }, // we don't have to define a scrollLeft because we're only scrolling vertically.
        getBoundingClientRect() {
            return { top: 0, left: 0, width: window.innerWidth, height: window.innerHeight };
        },
        // LocomotiveScroll handles things completely differently on mobile devices - it doesn't even transform the container at all! So to get the correct behavior and avoid jitters, we should pin things with position: fixed on mobile. We sense it by checking to see if there's a transform applied to the container (the LocomotiveScroll-controlled element).
        pinType: document.querySelector("#main").style.transform ? "transform" : "fixed"
    });

    // each time the window updates, we should refresh ScrollTrigger and then update LocomotiveScroll. 
    ScrollTrigger.addEventListener("refresh", () => locoScroll.update());

    // after everything is set up, refresh() ScrollTrigger and update LocomotiveScroll because padding may have been added for pinning, etc.
    ScrollTrigger.refresh();
}
// loco()

// Open/ Close Inquiry Panel
function enquiryPanel() {
    const openEnquiryBtn = document.querySelector('#enquiryBtn');
    const closeEnquiryBtn = document.querySelector('.closeEnquiryBtn');
    const backdrop = document.querySelector('.backdrop')
    
    openEnquiryBtn.addEventListener('click', openEnquiryPanel)
    closeEnquiryBtn.addEventListener('click', closeEnquiryPanel)
    function openEnquiryPanel() {
        document.querySelector('.inquiry').style.transform = "translateX(0%)";
        backdrop.classList.add('show')
    }
    function closeEnquiryPanel() {
        document.querySelector('.inquiry').style.transform = "translateX(150%)";
        backdrop.classList.remove('show')
    }
    
}
enquiryPanel()

// Scroll Effect On Images
gsap.to('.ambulances .left-inner', {
    scrollTrigger: {
        trigger: ".ambulances .inner-container",
        pin: true,
        start: "top top",
        end: "bottom bottom",
        endTrigger: ".last",
        scrub: 1,
        // markers: true
    },
    y: "-200%",
    ease: Power1,
})

let sections = document.querySelectorAll(".ambulances .left-inner .button")
Shery.imageEffect(".images", {
    style: 5,
    config: {onMouse: {value: 1}},
    slideStyle: (setScroll) => {
        sections.forEach(function (section, index) {
            ScrollTrigger.create({
                trigger: section,
                top: "top top",
                scrub: 1,
                onUpdate: function (prog) {
                    setScroll(prog.progress+index)
                }
            })
        })
    },
  });


  
// PAGE 10 
//   GSAP ANIMATION
  var gsap = gsap.timeline()
    gsap.to(".howWeWork .left .inner-1, .inner-2, .inner-3, .inner-4, .inner5",{
        // y: 100,
        color: 'var(--primary-color)',
        // duration: 2,  
        stagger:4,
        scrollTrigger: {
            trigger: '.howWeWork .left .inner-1, .inner-2, .inner-3, .inner-4, .inner5',
            scroller: "#main",
            start: "top 45%",
            end: "400% 75%",
            markers: true,
            scrub: 2,
    
    
        },
        // color: "blue"
  })
  gsap.to(".howWeWork .left .inner-1, .inner-2, .inner-3, .inner-4, .inner5",{
      color: "var(--secondary-color)",
    //   y: 0,
      // duration: 8,  
      stagger: 0.4,
      scrollTrigger: {
          trigger: '.howWeWork .left .inner-1, .inner-2, .inner-3, .inner-4, .inner5',
          scroller: "#main",
          start: "bottom 35%",
          end: "500% 75%",
          markers: true,
          scrub: 3,
  
  
      },
  })
  // CANVAS ANIMATION
  function canvas3() {
    const canvas = document.querySelector(".howWeWork>.inner-page>canvas");
    const context = canvas.getContext("2d");

    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;


    window.addEventListener("resize", function () {
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;
        render();
    });

    function files(index) {
        var data = `
        /road-ambulance-gif/road-ambulance-gif-0.jpg
        /road-ambulance-gif/road-ambulance-gif-1.jpg
        /road-ambulance-gif/road-ambulance-gif-2.jpg
        /road-ambulance-gif/road-ambulance-gif-3.jpg
        /road-ambulance-gif/road-ambulance-gif-4.jpg
        /road-ambulance-gif/road-ambulance-gif-5.jpg
        /road-ambulance-gif/road-ambulance-gif-6.jpg
        /road-ambulance-gif/road-ambulance-gif-7.jpg
        /road-ambulance-gif/road-ambulance-gif-8.jpg
        /road-ambulance-gif/road-ambulance-gif-9.jpg
        /road-ambulance-gif/road-ambulance-gif-10.jpg
        /road-ambulance-gif/road-ambulance-gif-11.jpg
        /road-ambulance-gif/road-ambulance-gif-12.jpg
        /road-ambulance-gif/road-ambulance-gif-13.jpg
        /road-ambulance-gif/road-ambulance-gif-14.jpg
        /road-ambulance-gif/road-ambulance-gif-15.jpg
        /road-ambulance-gif/road-ambulance-gif-16.jpg
        /road-ambulance-gif/road-ambulance-gif-17.jpg
        /road-ambulance-gif/road-ambulance-gif-18.jpg
        /road-ambulance-gif/road-ambulance-gif-19.jpg
        /road-ambulance-gif/road-ambulance-gif-20.jpg
        /road-ambulance-gif/road-ambulance-gif-21.jpg
        /road-ambulance-gif/road-ambulance-gif-22.jpg
        /road-ambulance-gif/road-ambulance-gif-23.jpg
        /road-ambulance-gif/road-ambulance-gif-24.jpg
        /road-ambulance-gif/road-ambulance-gif-25.jpg
        /road-ambulance-gif/road-ambulance-gif-26.jpg
        /road-ambulance-gif/road-ambulance-gif-27.jpg
        /road-ambulance-gif/road-ambulance-gif-28.jpg
        /road-ambulance-gif/road-ambulance-gif-29.jpg
        /road-ambulance-gif/road-ambulance-gif-30.jpg
        /road-ambulance-gif/road-ambulance-gif-31.jpg
        /road-ambulance-gif/road-ambulance-gif-32.jpg
        /road-ambulance-gif/road-ambulance-gif-33.jpg
        /road-ambulance-gif/road-ambulance-gif-34.jpg
        /road-ambulance-gif/road-ambulance-gif-35.jpg
        /road-ambulance-gif/road-ambulance-gif-36.jpg
        /road-ambulance-gif/road-ambulance-gif-37.jpg
        /road-ambulance-gif/road-ambulance-gif-38.jpg
        /road-ambulance-gif/road-ambulance-gif-39.jpg
        /road-ambulance-gif/road-ambulance-gif-40.jpg
        /road-ambulance-gif/road-ambulance-gif-41.jpg
        /road-ambulance-gif/road-ambulance-gif-42.jpg
        /road-ambulance-gif/road-ambulance-gif-43.jpg
        /road-ambulance-gif/road-ambulance-gif-44.jpg
        /road-ambulance-gif/road-ambulance-gif-45.jpg
        /road-ambulance-gif/road-ambulance-gif-46.jpg
        /road-ambulance-gif/road-ambulance-gif-47.jpg
        /road-ambulance-gif/road-ambulance-gif-48.jpg
        /road-ambulance-gif/road-ambulance-gif-49.jpg
        /road-ambulance-gif/road-ambulance-gif-50.jpg
        /road-ambulance-gif/road-ambulance-gif-51.jpg
        /road-ambulance-gif/road-ambulance-gif-52.jpg
        /road-ambulance-gif/road-ambulance-gif-53.jpg
        /road-ambulance-gif/road-ambulance-gif-54.jpg
        /road-ambulance-gif/road-ambulance-gif-55.jpg
        /road-ambulance-gif/road-ambulance-gif-56.jpg
        /road-ambulance-gif/road-ambulance-gif-57.jpg
        /road-ambulance-gif/road-ambulance-gif-58.jpg
        /road-ambulance-gif/road-ambulance-gif-59.jpg
        /road-ambulance-gif/road-ambulance-gif-60.jpg
        /road-ambulance-gif/road-ambulance-gif-61.jpg
        /road-ambulance-gif/road-ambulance-gif-62.jpg
        /road-ambulance-gif/road-ambulance-gif-63.jpg
        /road-ambulance-gif/road-ambulance-gif-64.jpg
        /road-ambulance-gif/road-ambulance-gif-65.jpg
        /road-ambulance-gif/road-ambulance-gif-66.jpg
        /road-ambulance-gif/road-ambulance-gif-67.jpg
        /road-ambulance-gif/road-ambulance-gif-68.jpg
        /road-ambulance-gif/road-ambulance-gif-69.jpg
        /road-ambulance-gif/road-ambulance-gif-70.jpg
        /road-ambulance-gif/road-ambulance-gif-71.jpg
        /road-ambulance-gif/road-ambulance-gif-72.jpg
        /road-ambulance-gif/road-ambulance-gif-73.jpg
        /road-ambulance-gif/road-ambulance-gif-74.jpg
        /road-ambulance-gif/road-ambulance-gif-75.jpg
        /road-ambulance-gif/road-ambulance-gif-76.jpg
        /road-ambulance-gif/road-ambulance-gif-77.jpg
        /road-ambulance-gif/road-ambulance-gif-78.jpg
        /road-ambulance-gif/road-ambulance-gif-79.jpg
        /road-ambulance-gif/road-ambulance-gif-80.jpg
        /road-ambulance-gif/road-ambulance-gif-81.jpg
        /road-ambulance-gif/road-ambulance-gif-83.jpg
        /road-ambulance-gif/road-ambulance-gif-84.jpg
        /road-ambulance-gif/road-ambulance-gif-85.jpg
        /road-ambulance-gif/road-ambulance-gif-86.jpg
        /road-ambulance-gif/road-ambulance-gif-87.jpg
        /road-ambulance-gif/road-ambulance-gif-88.jpg
        /road-ambulance-gif/road-ambulance-gif-89.jpg
        /road-ambulance-gif/road-ambulance-gif-90.jpg
        /road-ambulance-gif/road-ambulance-gif-91.jpg
        /road-ambulance-gif/road-ambulance-gif-92.jpg
        /road-ambulance-gif/road-ambulance-gif-93.jpg
        /road-ambulance-gif/road-ambulance-gif-94.jpg
        /road-ambulance-gif/road-ambulance-gif-95.jpg
        /road-ambulance-gif/road-ambulance-gif-96.jpg
        /road-ambulance-gif/road-ambulance-gif-97.jpg
        /road-ambulance-gif/road-ambulance-gif-98.jpg
        /road-ambulance-gif/road-ambulance-gif-99.jpg
        /road-ambulance-gif/road-ambulance-gif-100.jpg
        /road-ambulance-gif/road-ambulance-gif-101.jpg
        /road-ambulance-gif/road-ambulance-gif-102.jpg
        /road-ambulance-gif/road-ambulance-gif-103.jpg
        /road-ambulance-gif/road-ambulance-gif-104.jpg
        /road-ambulance-gif/road-ambulance-gif-105.jpg
        /road-ambulance-gif/road-ambulance-gif-106.jpg
        /road-ambulance-gif/road-ambulance-gif-107.jpg
        /road-ambulance-gif/road-ambulance-gif-108.jpg
        /road-ambulance-gif/road-ambulance-gif-109.jpg
        /road-ambulance-gif/road-ambulance-gif-110.jpg
        /road-ambulance-gif/road-ambulance-gif-111.jpg
        /road-ambulance-gif/road-ambulance-gif-112.jpg
        /road-ambulance-gif/road-ambulance-gif-113.jpg
        /road-ambulance-gif/road-ambulance-gif-114.jpg
        /road-ambulance-gif/road-ambulance-gif-115.jpg
        /road-ambulance-gif/road-ambulance-gif-116.jpg
        /road-ambulance-gif/road-ambulance-gif-117.jpg
        /road-ambulance-gif/road-ambulance-gif-118.jpg
        /road-ambulance-gif/road-ambulance-gif-119.jpg
        /road-ambulance-gif/road-ambulance-gif-120.jpg
        /road-ambulance-gif/road-ambulance-gif-121.jpg
        /road-ambulance-gif/road-ambulance-gif-122.jpg
        /road-ambulance-gif/road-ambulance-gif-123.jpg
        /road-ambulance-gif/road-ambulance-gif-124.jpg
        /road-ambulance-gif/road-ambulance-gif-125.jpg
        /road-ambulance-gif/road-ambulance-gif-126.jpg
        /road-ambulance-gif/road-ambulance-gif-127.jpg
        /road-ambulance-gif/road-ambulance-gif-128.jpg
        /road-ambulance-gif/road-ambulance-gif-129.jpg
        /road-ambulance-gif/road-ambulance-gif-130.jpg
        /road-ambulance-gif/road-ambulance-gif-131.jpg
        /road-ambulance-gif/road-ambulance-gif-132.jpg
        /road-ambulance-gif/road-ambulance-gif-133.jpg
        /road-ambulance-gif/road-ambulance-gif-134.jpg
        /road-ambulance-gif/road-ambulance-gif-135.jpg
        /road-ambulance-gif/road-ambulance-gif-136.jpg
        /road-ambulance-gif/road-ambulance-gif-137.jpg
        /road-ambulance-gif/road-ambulance-gif-138.jpg
        /road-ambulance-gif/road-ambulance-gif-139.jpg
        /road-ambulance-gif/road-ambulance-gif-140.jpg
        /road-ambulance-gif/road-ambulance-gif-141.jpg
        /road-ambulance-gif/road-ambulance-gif-142.jpg
        /road-ambulance-gif/road-ambulance-gif-143.jpg
        /road-ambulance-gif/road-ambulance-gif-144.jpg
        /road-ambulance-gif/road-ambulance-gif-145.jpg
        /road-ambulance-gif/road-ambulance-gif-146.jpg
        /road-ambulance-gif/road-ambulance-gif-147.jpg
        /road-ambulance-gif/road-ambulance-gif-148.jpg
        /road-ambulance-gif/road-ambulance-gif-149.jpg
        /road-ambulance-gif/road-ambulance-gif-150.jpg
        /road-ambulance-gif/road-ambulance-gif-151.jpg
        /road-ambulance-gif/road-ambulance-gif-152.jpg
        /road-ambulance-gif/road-ambulance-gif-153.jpg
        /road-ambulance-gif/road-ambulance-gif-154.jpg
        /road-ambulance-gif/road-ambulance-gif-155.jpg
        /road-ambulance-gif/road-ambulance-gif-156.jpg
        /road-ambulance-gif/road-ambulance-gif-157.jpg
        /road-ambulance-gif/road-ambulance-gif-158.jpg
        /road-ambulance-gif/road-ambulance-gif-159.jpg
        /road-ambulance-gif/road-ambulance-gif-160.jpg
        /road-ambulance-gif/road-ambulance-gif-161.jpg
        /road-ambulance-gif/road-ambulance-gif-162.jpg
        /road-ambulance-gif/road-ambulance-gif-163.jpg
        /road-ambulance-gif/road-ambulance-gif-164.jpg
        /road-ambulance-gif/road-ambulance-gif-165.jpg
        /road-ambulance-gif/road-ambulance-gif-166.jpg
        /road-ambulance-gif/road-ambulance-gif-167.jpg
        /road-ambulance-gif/road-ambulance-gif-168.jpg
        /road-ambulance-gif/road-ambulance-gif-169.jpg
        /road-ambulance-gif/road-ambulance-gif-170.jpg
        /road-ambulance-gif/road-ambulance-gif-171.jpg
        /road-ambulance-gif/road-ambulance-gif-172.jpg
        /road-ambulance-gif/road-ambulance-gif-173.jpg
        /road-ambulance-gif/road-ambulance-gif-174.jpg
        /road-ambulance-gif/road-ambulance-gif-175.jpg

`;
        return data.split("\n")[index];
    }

    const frameCount = 176;

    const images = [];
    const imageSeq = {
        frame: 0,
    };

    for (let i = 0; i < frameCount; i++) {
        const img = new Image();
        img.src = files(i);
        images.push(img);
    }

    gsap.to(imageSeq, {
        frame: frameCount - 1,
        snap: "frame",
        ease: `none`,
        scrollTrigger: {
            scrub: .5,
            trigger: `.inner-page canvas`,
            start: `top 20%`,
            end: `430% 20%`,
            scroller: `#main`,
            // markers: true            
        },
        onUpdate: render,
    });

    images[1].onload = render;

    function render() {
        scaleImage(images[imageSeq.frame], context);
    }

    function scaleImage(img, ctx) {
        var canvas = ctx.canvas;
        var hRatio = canvas.width / img.width;
        var vRatio = canvas.height / img.height;
        var ratio = Math.max(hRatio, vRatio);
        var centerShift_x = (canvas.width - img.width * ratio) / 2;
        var centerShift_y = (canvas.height - img.height * ratio) / 2;
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        ctx.drawImage(
            img,
            0,
            0,
            img.width,
            img.height,
            centerShift_x,
            centerShift_y,
            img.width * ratio,
            img.height * ratio
        );
    }
    ScrollTrigger.create({

        trigger: ".inner-page canvas",
        pin: true,
        scroller: `#main`,
        start: `top 20%`,
        end: `430% 20%`,
        // markers: true
    });
}
// canvas3()

// Mouse Follower
// Shery.mouseFollower()

// Make Magnet
// Shery.makeMagnet(".magnet")


// PAGE 2 CANVAS ANIMATION
// function canvas() {
//     const canvas = document.querySelector(".page2 canvas");
//     const context = canvas.getContext("2d");

//     canvas.width = window.innerWidth;
//     canvas.height = window.innerHeight;

//     window.addEventListener("resize", function () {
//         canvas.width = window.innerWidth;
//         canvas.height = window.innerHeight;
//         render();
//     });

//     function files(index) {
//         var data = `
//         ./airoplane_000/airoplane_000.jpg
//         ./airoplane_000/airoplane_001.jpg
//         ./airoplane_000/airoplane_002.jpg
//         ./airoplane_000/airoplane_003.jpg
//         ./airoplane_000/airoplane_004.jpg
//         ./airoplane_000/airoplane_005.jpg
//         ./airoplane_000/airoplane_006.jpg
//         ./airoplane_000/airoplane_007.jpg
//         ./airoplane_000/airoplane_008.jpg
//         ./airoplane_000/airoplane_009.jpg
//         ./airoplane_000/airoplane_010.jpg
//         ./airoplane_000/airoplane_011.jpg
//         ./airoplane_000/airoplane_012.jpg
//         ./airoplane_000/airoplane_013.jpg
//         ./airoplane_000/airoplane_014.jpg
//         ./airoplane_000/airoplane_015.jpg
//         ./airoplane_000/airoplane_016.jpg
//         ./airoplane_000/airoplane_017.jpg
//         ./airoplane_000/airoplane_018.jpg
//         ./airoplane_000/airoplane_019.jpg
//         ./airoplane_000/airoplane_020.jpg
//         ./airoplane_000/airoplane_021.jpg
//         ./airoplane_000/airoplane_022.jpg
//         ./airoplane_000/airoplane_023.jpg
//         ./airoplane_000/airoplane_024.jpg
//         ./airoplane_000/airoplane_025.jpg
//         ./airoplane_000/airoplane_026.jpg
//         ./airoplane_000/airoplane_027.jpg
//         ./airoplane_000/airoplane_028.jpg
//         ./airoplane_000/airoplane_029.jpg
//         ./airoplane_000/airoplane_030.jpg
//         ./airoplane_000/airoplane_031.jpg
//         ./airoplane_000/airoplane_032.jpg
//         ./airoplane_000/airoplane_033.jpg
//         ./airoplane_000/airoplane_034.jpg
//         ./airoplane_000/airoplane_035.jpg
//         ./airoplane_000/airoplane_036.jpg
//         ./airoplane_000/airoplane_037.jpg
//         ./airoplane_000/airoplane_038.jpg
//         ./airoplane_000/airoplane_039.jpg
//         ./airoplane_000/airoplane_040.jpg
//         ./airoplane_000/airoplane_041.jpg
//         ./airoplane_000/airoplane_042.jpg
//         ./airoplane_000/airoplane_043.jpg
//         ./airoplane_000/airoplane_044.jpg
//         ./airoplane_000/airoplane_045.jpg
//         ./airoplane_000/airoplane_046.jpg
//         ./airoplane_000/airoplane_047.jpg
//         ./airoplane_000/airoplane_048.jpg
//         ./airoplane_000/airoplane_049.jpg
//         ./airoplane_000/airoplane_050.jpg
//         ./airoplane_000/airoplane_051.jpg
//         ./airoplane_000/airoplane_052.jpg
//         ./airoplane_000/airoplane_053.jpg
//         ./airoplane_000/airoplane_054.jpg
//         ./airoplane_000/airoplane_055.jpg
//         ./airoplane_000/airoplane_056.jpg
//         ./airoplane_000/airoplane_057.jpg
//         ./airoplane_000/airoplane_058.jpg
//         ./airoplane_000/airoplane_059.jpg
//         ./airoplane_000/airoplane_060.jpg
//         ./airoplane_000/airoplane_061.jpg
//         ./airoplane_000/airoplane_062.jpg
//         ./airoplane_000/airoplane_063.jpg
//         ./airoplane_000/airoplane_064.jpg
//         ./airoplane_000/airoplane_065.jpg
//         ./airoplane_000/airoplane_066.jpg
//         ./airoplane_000/airoplane_067.jpg
//         ./airoplane_000/airoplane_068.jpg
//         ./airoplane_000/airoplane_069.jpg
//         ./airoplane_000/airoplane_070.jpg
//         ./airoplane_000/airoplane_071.jpg
//         ./airoplane_000/airoplane_072.jpg
//         ./airoplane_000/airoplane_073.jpg
//         ./airoplane_000/airoplane_074.jpg
//         ./airoplane_000/airoplane_075.jpg
//         ./airoplane_000/airoplane_076.jpg
//         ./airoplane_000/airoplane_077.jpg
//         ./airoplane_000/airoplane_078.jpg
//         ./airoplane_000/airoplane_079.jpg
//         ./airoplane_000/airoplane_080.jpg
//         ./airoplane_000/airoplane_081.jpg
//         ./airoplane_000/airoplane_082.jpg
//         ./airoplane_000/airoplane_083.jpg
//         ./airoplane_000/airoplane_084.jpg
//         ./airoplane_000/airoplane_085.jpg
//         ./airoplane_000/airoplane_086.jpg
//         ./airoplane_000/airoplane_087.jpg
//         ./airoplane_000/airoplane_088.jpg
//         ./airoplane_000/airoplane_089.jpg
//         ./airoplane_000/airoplane_090.jpg
//         ./airoplane_000/airoplane_091.jpg
//         ./airoplane_000/airoplane_092.jpg
//         ./airoplane_000/airoplane_093.jpg
//         ./airoplane_000/airoplane_094.jpg
//         ./airoplane_000/airoplane_095.jpg
//         ./airoplane_000/airoplane_096.jpg
//         ./airoplane_000/airoplane_097.jpg
//         ./airoplane_000/airoplane_098.jpg
//         ./airoplane_000/airoplane_099.jpg
//         ./airoplane_000/airoplane_100.jpg
//         ./airoplane_000/airoplane_101.jpg
//         ./airoplane_000/airoplane_102.jpg
//         ./airoplane_000/airoplane_103.jpg
//         ./airoplane_000/airoplane_104.jpg
//         ./airoplane_000/airoplane_105.jpg
//         ./airoplane_000/airoplane_106.jpg
//         ./airoplane_000/airoplane_107.jpg
        
//  `;
//         return data.split("\n")[index];
//     }

//     const frameCount = 107;

//     const images = [];
//     const imageSeq = {
//         frame: 1,
//     };

//     for (let i = 0; i < frameCount; i++) {
//         const img = new Image();
//         img.src = files(i);
//         images.push(img);
//     }

//     gsap.to(imageSeq, {
//         frame: frameCount - 1,
//         snap: "frame",
//         ease: `none`,
//         scrollTrigger: {
//             scrub: .5,
//             trigger: `.page2`,
//             start: `top top`,
//             end: `250% top`,
//             scroller: `#main`,
//         },
//         onUpdate: render,
//     });

//     images[1].onload = render;

//     function render() {
//         scaleImage(images[imageSeq.frame], context);
//     }

//     function scaleImage(img, ctx) {
//         var canvas = ctx.canvas;
//         var hRatio = canvas.width / img.width;
//         var vRatio = canvas.height / img.height;
//         var ratio = Math.max(hRatio, vRatio);
//         var centerShift_x = (canvas.width - img.width * ratio) / 2;
//         var centerShift_y = (canvas.height - img.height * ratio) / 2;
//         ctx.clearRect(0, 0, canvas.width, canvas.height);
//         ctx.drawImage(
//             img,
//             0,
//             0,
//             img.width,
//             img.height,
//             centerShift_x,
//             centerShift_y,
//             img.width * ratio,
//             img.height * ratio
//         );
//     }
//     ScrollTrigger.create({

//         trigger: ".page2",
//         pin: true,
//         scroller: `#main`,
//         start: `top top`,
//         end: `250% top`,
//     });
// }
// canvas()

