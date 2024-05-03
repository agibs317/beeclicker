let bee = document.querySelector(".bee");
let wings = document.querySelector(".wings");
let fly = document.querySelector(".container");
let i = 0;
let b = 1;

function handleClick(event) {
  divClone = bee.cloneNode();
  divClone.style.top = event.y + "px";
  divClone.style.left = event.x + "px";
  divClone.style.zIndex = i + 2;
  document.body.appendChild(divClone);
  divCloneXtra = wings.cloneNode();
  divCloneXtra.style.top = event.y - 30 + "px";
  divCloneXtra.style.left = event.x - 80.8 + "px";
  divCloneXtra.style.zIndex = i;
  document.body.appendChild(divCloneXtra);
  console.log(event.x, event.y);
  b = b + 1;
  document.getElementById("total").innerHTML = b;
}

document.addEventListener("keyup", function (e) {
  if (e.keyCode == 67) window.location.reload();
});

window.onclick = handleClick;
