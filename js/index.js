const dino = document.getElementById("dino");
const cactus = document.getElementById("cactus");

const gameOver = basicLightbox.create(
  `
    <div class="modal box">
        <h1>
            Game Over
        </h1>
    </div>
`,
  {
    onShow: () => {
      document.removeEventListener("keydown", jump);
    },
    onClose: () => {
      document.addEventListener("keydown", jump);
      cactus.classList.add("action");
    },
  }
);

function jump(e) {
  if (e.code != "Space") return;

  if (dino.classList != "jump") {
    dino.classList.add("jump");
  }
  setTimeout(function () {
    dino.classList.remove("jump");
  }, 300);
}

function confluenceDinoCactus() {
  const dinoTop = parseInt(
    window.getComputedStyle(dino).getPropertyValue("top")
  );
  const cactusLeft = parseInt(
    window.getComputedStyle(cactus).getPropertyValue("left")
  );

  if (cactusLeft < 50 && cactusLeft > 0 && dinoTop >= 140) {
    cactus.classList.remove("action");
    gameOver.show();
  }
}

document.addEventListener("keydown", jump);
cactus.classList.add("action");

setInterval(confluenceDinoCactus, 10);
