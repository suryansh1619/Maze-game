let pickleId = document.querySelector('#r10c1');
let newId = document.querySelector('#r10c1');
let winId = document.querySelector('#r1c10');
let row = 10;
let col = 1;
const pickle = document.querySelector('#pickle-img');
let st = document.querySelector("#start");

function move(row, col) {
  pickleId.removeChild(pickle);
  newId = document.querySelector(`#r${row}c${col}`);
  if (newId === winId) {
    alert("Congratulations!! You won the game!!");
    main.removeChild(div);
  }
  else {
    pickleId = newId;
    newId.appendChild(pickle);
  }
}

function Permission(x) {
  for (let cls of newId.classList) {
    if (cls === x) {
      return false;
    }
  }
  return true;
}

window.addEventListener('keydown', function(e) {
  switch (e.code) {
    case 'ArrowUp':
      if (Permission("top")) {
        move(--row, col);
      }
      break;
    case 'ArrowDown':
      if (Permission("bottom")) {
        move(++row, col);
      }
      break;
    case 'ArrowLeft':
      if (Permission("left")) {
        move(row, --col);
      }
      break;
    case 'ArrowRight':
      if (Permission("right")) {
        move(row, ++col);
      }
      break;
  }
})

st.addEventListener("click", function() {
  pickleId = document.querySelector("#r10c1");
  newId = pickleId;
  pickleId.appendChild(pickle);
  row = 10;
  col = 1;
})
