$(function () {
  gsap.registerPlugin(ScrollTrigger, ScrollToPlugin);
  let menu = $("#menu");
  let mobileNav = $("#mobile-nav");
  let mobileLinks = $("#mobile-nav-ul > li");
  console.log(mobileLinks);
  mobileNav.addClass("hide");
  let isShow = false;
  menu.on("click",() => {
    showNav();
  });
  function showNav() {
    if (isShow == false) {
      mobileNav.addClass("show").removeClass("hide");
      isShow = true;
      gsap.from(mobileNav, {autoAlpha: 0, duration: 0.5})
      gsap.from(mobileLinks, {y: 300, autoAlpha: 0, stagger: 0.25}, "+=0.5");
    } else if (isShow == true) {
      // gsap.to(mobileNav, {autoAlpha: 1, duration: 0.5})
      // gsap.to(mobileLinks, {y: 0, autoAlpha: 0, stagger: 0.25}, "+=0.5");
      mobileNav.addClass("hide").removeClass("show");
// setInterval(myTimer, 5000);
// function myTimer() {
//   mobileNav.addClass("hide").removeClass("show");
// }
      isShow = false;
    }
  }
  //rework hamburger menu logic/////////////////////////////////
});
