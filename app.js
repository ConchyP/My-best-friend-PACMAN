const fantasmito = document.getElementById("fantasmito");
const pacman = document.getElementById("pacman");
let count = 0;

const movePacman = (e) => {
  pacman.style.position = "absolute";
  pacman.style.left = `${e.pageX}px`;
  pacman.style.top = `${e.pageY}px`;
  e.target.style.visibility = "hidden";
};

const eatFantasmito = (e) => {
  movePacman(e);
  count++;
  if (count % 3 === 0) {
    const cherry = document.createElement("img");
    cherry.src = "./public/images/cherry.png";
    cherry.className = "cherry";
    cherry.addEventListener("click", (e) => {
      movePacman(e);
      addPoints(500);
    });
    document.getElementById("pacman-container").append(cherry);
  }
  addPoints(100);
};

fantasmito.addEventListener("click", eatFantasmito);

const interval = setInterval(() => {
  const newFantasmito = document.createElement("img");
  newFantasmito.src = "./public/images/fantasmito.png";
  newFantasmito.className = "fantasmito";
  newFantasmito.addEventListener("click", eatFantasmito);
  document.getElementById("pacman-container").append(newFantasmito);
}, 2000);

function addPoints(points) {
  const counter = document.getElementById("counter");
  const newPoints = parseInt(counter.textContent) + points;
  counter.textContent = String(newPoints).padStart(4, "0");

  if (newPoints >= 5000) {
    clearInterval(interval);
    const gameOver = document.createElement("h1");
    gameOver.textContent = "GAME OVER";
    gameOver.className = "game-over";
    document.body.appendChild(gameOver);
  }
}

