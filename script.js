function init(){
    gsap.registerPlugin(ScrollTrigger);

const locoScroll = new LocomotiveScroll({
  el: document.querySelector(".main"),
  smooth: true
});
locoScroll.on("scroll", ScrollTrigger.update);

ScrollTrigger.scrollerProxy(".main", {
  scrollTop(value) {
    return arguments.length ? locoScroll.scrollTo(value, 0, 0) : locoScroll.scroll.instance.scroll.y;
  },
  getBoundingClientRect() {
    return {top: 0, left: 0, width: window.innerWidth, height: window.innerHeight};
  },
    pinType: document.querySelector(".main").style.transform ? "transform" : "fixed"
});

ScrollTrigger.addEventListener("refresh", () => locoScroll.update());

ScrollTrigger.refresh();

}
init()

let crsr = document.querySelector(".cursor");
document.addEventListener("mousemove",function(dets){
    crsr.style.left = dets.x+"px"
    crsr.style.top = dets.y +"px"
})

let tl = gsap.timeline({
    scrollTrigger:{
        trigger:".page1 h1",
        scroller:".main",
        start:"top 27%",
        end:"top 0",
        scrub:3
    }
})
tl.to(".page1 h1",{
    x:-100,
    
},"anim")
tl.to(".page1 h2",{
    x:100
},"anim")
tl.to(".page1 video",{
    width:"80%"
},"anim")


let tl2 = gsap.timeline({
    scrollTrigger:{
        trigger:".page1 h1",
        scroller:".main",
        start:"top -115%",
        end:"top -120%",
        scrub:3
    }
})
tl2.to(".main",{
    backgroundColor:"#fff",
})

let tl3 = gsap.timeline({
    scrollTrigger:{
        trigger:".page1 h1",
        scroller:".main",
        start:"top -290%",
        end:"top -300%",
        scrub:3
    }
})
tl3.to(".main",{
    backgroundColor:"#0F0D0D"
})



let h4 = document.querySelectorAll("#nav .h4");
let purple = document.querySelector("#purple")
let nav = document.querySelector("#nav")
h4.forEach(function(elem){
    elem.addEventListener("mouseenter",function(){
        purple.style.opacity = 1
        purple.style.display = "block"
    })
    nav.addEventListener("mouseleave",function(){
        purple.style.opacity = 0
        purple.style.display = "none"
    })
})