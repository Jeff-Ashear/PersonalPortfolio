let doc = document.getElementsByTagName("html")[0];
let circle = document.querySelector(".cursor");

function move(e) {
  let y = e.pageY - 50 + "px";
  let x = e.pageX - 50 + "px";
  // console.log(y,x);
  circle.style.top = y;
  circle.style.left = x;
}

doc.addEventListener("mousemove", move, false);
window.addEventListener(
  "devicemotion",
  function() {
    let x = event.accelerationIncludingGravity.x;
    let y = event.accelerationIncludingGravity.y;

    circle.style.top = y * 50 + "px";
    circle.style.left = x * -50 + "px";
  },
  false
);