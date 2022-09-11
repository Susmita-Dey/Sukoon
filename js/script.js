(document).ready(function() {
    $(".owl-carousel").owlCarousel({
        loop: true,
        margin: 10,
        nav: true,
        center: true,
        navText: [
            "<i class='fa fa-angle-left'></i>",
            "<i class='fa fa-angle-right'></i>"
        ],
        responsive: {
            0: {
                items: 1
            },
            600: {
                items: 1
            },
            1000: {
                items: 3
            }
        }
    });
});


const countdown = () => {
  const countDate = new Date("May 21, 2022 00:00:00").getTime();
  const now = new Date().getTime();
  const gap = countDate - now;
    function formatTime(hours){
        return hours<10 ?(`0${hours}`):hours;
    }    
    
    function formatTime(minutes){
        return minutes<10 ?(`0${minutes}`):minutes;
    }    
    
    function formatTime(seconds){
        return seconds<10 ?(`0${seconds}`):seconds;
    }
    document.getElementById("launch").innerHTML = formatTime(days)+ " Days &nbsp;&nbsp;"+formatTime(hours)+" Hours &nbsp;&nbsp;"+formatTime(minutes)+" Minutes &nbsp;&nbsp;"+formatTime(seconds)+ " Seconds To Go...";
    if (distance < 0){
        clearInterval(x);
        document.getElementById("launch").innerHTML = "Expired" 
    }
},1000);
