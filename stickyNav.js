// the following lines of code helps to make the navbar fixed when the user scrolls in the desktop view

function navScroll(){
  let navbar = document.querySelector(".nav-bar");
  let logoContainer = document.querySelector(".logo-container");
  let logo = document.querySelector(".logo-img");
  let navLink = [...document.querySelectorAll(".nav-link a")];
  let windowOffset = window.pageYOffset;
  let navOffSet = navbar.offsetTop;

  
  window.addEventListener("scroll",()=>{
    if(window.pageYOffset > navOffSet ){
      addClass(navbar,"sticky");
      addClass(logoContainer,"logo-container-sticky")
      addClass(logo,"logo-sticky")
      navLink.forEach(link =>{
        addClass(link,"nav-link-sticky")
      })
    }else{
      removeClass(navbar,"sticky");
      removeClass(logoContainer,"logo-container-sticky");
      removeClass(logo,"logo-sticky");

      navLink.forEach(link => {
        removeClass(link, "nav-link-sticky");
      })
    }

  })
  function addClass(element, style) {
    element.classList.add(style);
  }
  function removeClass(element,style){
    element.classList.remove(style);
  }
}
navScroll();
