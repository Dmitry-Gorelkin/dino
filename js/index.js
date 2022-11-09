const dino = document.getElementById("dino");
const cactus = document.getElementById("cactus");

const instance = basicLightbox.create(
  `
    <div class="modal box">
        <p>
            Game Over
        </p>
    </div>
`,
  {
    onClose: () => {
      cactus.classList.add("action");
    },
  }
);

document.addEventListener("keydown", jump);
cactus.classList.add("action");

function jump(e) {
  if (e.code != "Space") return;

  if (dino.classList != "jump") {
    dino.classList.add("jump");
  }
  setTimeout(function () {
    dino.classList.remove("jump");
  }, 300);
}

setInterval(() => {
  const dinoTop = parseInt(
    window.getComputedStyle(dino).getPropertyValue("top")
  );
  const cactusLeft = parseInt(
    window.getComputedStyle(cactus).getPropertyValue("left")
  );

  if (cactusLeft < 50 && cactusLeft > 0 && dinoTop >= 140) {
    cactus.classList.remove("action");
    instance.show();
  }
}, 10);
