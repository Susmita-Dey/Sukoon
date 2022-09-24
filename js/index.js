const ham = document.getElementById("ham");
const menu = document.getElementById("menu");

const toggleMenu = () => {
  if (menu.classList.contains("open")) {
    menu.classList.remove("open");
    ham.innerHTML = '<svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 1024 1024" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M904 160H120c-4.4 0-8 3.6-8 8v64c0 4.4 3.6 8 8 8h784c4.4 0 8-3.6 8-8v-64c0-4.4-3.6-8-8-8zm0 624H120c-4.4 0-8 3.6-8 8v64c0 4.4 3.6 8 8 8h784c4.4 0 8-3.6 8-8v-64c0-4.4-3.6-8-8-8zm0-312H120c-4.4 0-8 3.6-8 8v64c0 4.4 3.6 8 8 8h784c4.4 0 8-3.6 8-8v-64c0-4.4-3.6-8-8-8z"></path></svg>'
    console.log("open");
  } else {
    menu.classList.add("open");
    ham.innerHTML = '<svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 1024 1024" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M563.8 512l262.5-312.9c4.4-5.2.7-13.1-6.1-13.1h-79.8c-4.7 0-9.2 2.1-12.3 5.7L511.6 449.8 295.1 191.7c-3-3.6-7.5-5.7-12.3-5.7H203c-6.8 0-10.5 7.9-6.1 13.1L459.4 512 196.9 824.9A7.95 7.95 0 0 0 203 838h79.8c4.7 0 9.2-2.1 12.3-5.7l216.5-258.1 216.5 258.1c3 3.6 7.5 5.7 12.3 5.7h79.8c6.8 0 10.5-7.9 6.1-13.1L563.8 512z"></path></svg>'
    console.log("close");
  }
};

$(function () {
  $(".accordion")
    .find(".accordion__title")
    .click(function () {
      $(this).toggleClass("active");
      $(this).next().slideToggle("fast");
      $(".accordion__content").not($(this).next()).slideUp("fast");
      $(".accordion__title").not($(this)).removeClass("active");
    });
});

const backTopElement = document.getElementById("back-top-div");
const minScolledAmountToBackTop = 800;

window.addEventListener("scroll", () => {
  if (window.scrollY < minScolledAmountToBackTop) {
    backTopElement.classList.add("hidden");
  } else {
    backTopElement.classList.remove("hidden");
  }
});

const backTop = () => {
  window.scrollTo(0, 0);
};

backTopElement.addEventListener("click", backTop);
ham.addEventListener("click", toggleMenu);
