let hour = document.querySelector(".hour");
let minute = document.querySelector(".minute");
let second = document.querySelector(".second");

const clock = () => {
  const date = new Date();
  const hours = date.getHours();
  const minutes = date.getMinutes();
  const seconds = date.getSeconds();
  second.style.transform =
    "rotate(" + seconds * 6 + "deg) translateX(-50%) translateY(-260px)";
  second.style.transformOrigin = "0% 0%";
  minute.style.transform =
    "rotate(" + minutes * 6 + "deg) translateX(-50%) translateY(-200px)";
  minute.style.transformOrigin = "0% 0%";
  hour.style.transform =
    "rotate(" + hours * 30 + "deg) translateX(-50%) translateY(-160px)";
  hour.style.transformOrigin = "0% 0%";
};

setInterval(clock, 100);
