var count = new Date ("Sep 25, 2022 00:00:00").getTime();
var x = setInterval(function(){
    var now = new Date().getTime();
    var distance = count-now;
    var days = Math.floor(distance/(1000*60*60*24));
    var hours = Math.floor((distance%(1000*60*60*24)) / (1000*60*60));
    var minutes = Math.floor((distance%(1000*60*60))/(1000*60));
    var seconds = Math.floor((distance%(1000*60)) / 1000);
    function formatTime(days){
        return days<10 ?(`0${days}`):days;
    }  

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