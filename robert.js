// read out the client width and height and print to screen
var w = window.innerWidth
    document.documentElement.clientWidth
    document.body.clientWidth;
var h = window.innerHeight
    document.documentElement.clientHeight
    document.body.clientHeight;
var x = document.getElementById("k");
x.innerHTML = w + "x" + h;
// read out client operating system and print to screen
document.getElementById("os").innerHTML = navigator.platform;