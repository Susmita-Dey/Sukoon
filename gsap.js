const timeline=gsap.timeline()

timeline.from(".navbar-brand img",{
    y:40,
    opacity:0,
    duration:1
})
timeline.from("#navmenu li",{
    y:40,
    opacity:0,
    duration:1,
    stagger: 0.5,

})
timeline.from(".content",{
    y:60,
    opacity:0,
    duration:1
})
timeline.from(".content a",{
    y:40,
    opacity:0,
    delay:0.3,
    duration:0.6
})
