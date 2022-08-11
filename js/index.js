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

//services section carousel
$(function() {
    $('.carousel-item').eq(0).addClass('active');
    var total = $('.carousel-item').length;
    var current = 0;
    $('#moveRight').on('click', function() {
        var next = current;
        current = current + 1;
        setSlide(next, current);
    });
    $('#moveLeft').on('click', function() {
        var prev = current;
        current = current - 1;
        setSlide(prev, current);
    });

    function setSlide(prev, next) {
        var slide = current;
        if (next > total - 1) {
            slide = 0;
            current = 0;
        }
        if (next < 0) {
            slide = total - 1;
            current = total - 1;
        }
        $('.carousel-item').eq(prev).removeClass('active');
        $('.carousel-item').eq(slide).addClass('active');
        setTimeout(function() {

        }, 800);



        console.log('current ' + current);
        console.log('prev ' + prev);
    }
});


//slide-swiper
var swiper = new Swiper(".slide-content", {
    slidesPerView: 3,
    spaceBetween: 25,
    loop: true,
    centerSlide: 'true',
    fade: 'true',
    grabCursor: 'true',
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
        dynamicBullets: true,
    },
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },

    breakpoints: {
        0: {
            slidesPerView: 1,
        },
        520: {
            slidesPerView: 2,
        },
        950: {
            slidesPerView: 3,
        },
    },
});
