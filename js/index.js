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

ham.addEventListener("click", toggleMenu);
