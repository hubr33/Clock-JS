let hour = document.querySelector(".hour");
let minute = document.querySelector(".minute");
let second = document.querySelector(".second");

let rotateSek = 0;
let rotateMin = 0;
let rotateH = 0;

function sekundy() {
  rotateSek += 6;
  second.style.transform =
    "rotate(" + rotateSek + "deg) translateX(-50%) translateY(-260px)";
  second.style.transformOrigin = "0% 0%";
}

function minuty() {
  rotateMin += 6;
  minute.style.transform =
    "rotate(" + rotateMin + "deg) translateX(-50%) translateY(-200px)";
  minute.style.transformOrigin = "0% 0%";
}

function godziny() {
  rotate += 6;
  hour.style.transform =
    "rotate(" + rotateH + "deg) translateX(-50%) translateY(-160px)";
  hour.style.transformOrigin = "0% 0%";
}

setInterval(sekundy, 1000);
setInterval(minuty, 60000);
setInterval(godziny, 3600000);
