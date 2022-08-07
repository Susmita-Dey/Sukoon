const ham = document.getElementById("ham");
const menu = document.getElementById("menu");

const toggleMenu = () => {
   if (menu.classList.contains("open")) {
      menu.classList.remove("open");
      //   menu.style.display = "block";
      console.log("open");
   } else {
      menu.classList.add("open");
      //   menu.style.display = "none";
      console.log("close");
   }
};

const backTopElement = document.getElementById("back-top-div");
const minScolledAmountToBackTop = 800;

window.addEventListener("scroll", () => {
  if(window.scrollY < minScolledAmountToBackTop) {
    backTopElement.classList.add("hidden")
  } else {
    backTopElement.classList.remove("hidden")
  }
});

const backTop = () => {
  window.scrollTo(0,0)
};

backTopElement.addEventListener("click", backTop)
ham.addEventListener("click", toggleMenu);
