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
// read out client language and print to screen
document.getElementById("lang").innerHTML = navigator.language;
// read out user agent and print to screen
document.getElementById("ua").innerHTML = navigator.userAgent;
// read out platform and print to screen
document.getElementById("ap").innerHTML = navigator.appName;