const dino = document.getElementById("dino-js");
const cactus = document.getElementById("cactus-js");
const scores = document.getElementById("scores-js");
let score = 0;
let timer = null;

function startGame() {
  document.addEventListener("keydown", jump);
  cactus.classList.add("action");
  timer = setInterval(confluenceDinoCactus, 10);
  score = 0;
}

function stopGame() {
  document.removeEventListener("keydown", jump);
  cactus.classList.remove("action");
  clearInterval(timer);
}

function gameOverGame() {
  const gameOverModal = basicLightbox.create(
    `
    <div class="modal box">
        <h2>
            Game Over
        </h2>
        <p>Scores: ${score}</p>
    </div>
`,
    {
      onShow: () => {
        stopGame();
      },
      onClose: () => {
        startGame();
      },
    }
  );

  gameOverModal.show();
}

function jump(e) {
  if (e.code != "Space") return;

  if (dino.classList != "jump") {
    dino.classList.add("jump");
  }
  setTimeout(function () {
    dino.classList.remove("jump");
  }, 300);

  score += 1;
}

function confluenceDinoCactus() {
  const dinoTop = parseInt(
    window.getComputedStyle(dino).getPropertyValue("top")
  );
  const cactusLeft = parseInt(
    window.getComputedStyle(cactus).getPropertyValue("left")
  );

  if (cactusLeft < 50 && cactusLeft > 0 && dinoTop >= 140) {
    gameOverGame();
  }

  scores.innerHTML = score;
}

startGame();
