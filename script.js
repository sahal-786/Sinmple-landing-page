const scroll = new LocomotiveScroll({
    el: document.querySelector('#main'),
    smooth: true
  });
  
  const tl = gsap.timeline();
  
  tl.to("#page1", {
    y: "100vh",
    scale: 0.6,
    duration: 0
  })
  .to("#page1", {
    y: "30vh",
    duration: 1,
    delay: 1
  })
  .to("#page1", {
    y: "0vh",
    rotate: 360,
    scale: 1,
    duration: 0.7
  });