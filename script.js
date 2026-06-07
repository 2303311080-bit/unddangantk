function openInvitation(){

document.getElementById("music").play();

confetti({
particleCount:250,
spread:100,
origin:{y:0.6}
});

window.scrollTo({
top:window.innerHeight,
behavior:"smooth"
});

}

var countDownDate = new Date(
2026, 5, 13, 8, 0, 0
).getTime();

setInterval(function(){

var now = new Date().getTime();

var distance = countDownDate - now;

var days =
Math.floor(distance/(1000*60*60*24));

var hours =
Math.floor((distance%(1000*60*60*24))/(1000*60*60));

var minutes =
Math.floor((distance%(1000*60*60))/(1000*60));

var seconds =
Math.floor((distance%(1000*60))/1000);

document.getElementById("countdown").innerHTML =
days + " Hari " +
hours + " Jam " +
minutes + " Menit " +
seconds + " Detik";

},1000);