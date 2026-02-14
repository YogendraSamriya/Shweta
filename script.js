function moveRandomEl(elm) {
  elm.style.position = "absolute";
  elm.style.top = Math.floor(Math.random() * 90 + 5) + "%";
  elm.style.left = Math.floor(Math.random() * 90 + 5) + "%";
}

/**  Old Code that run perfectly
const moveRandom = document.querySelector("#move-random");

if(moveRandom){
moveRandom.addEventListener("mouseenter", function (e) {
  moveRandomEl(e.target);
});
}

**/

/** its perfect code 
const moveRandom = document.querySelector("#move-random");

if (moveRandom) {
  moveRandom.style.position = "absolute";
  moveRandom.style.transition = "transform 0.2s ease"; // smooth motion

  document.addEventListener("mousemove", (e) => {
    const rect = moveRandom.getBoundingClientRect();

    const buttonX = rect.left + rect.width / 2;
    const buttonY = rect.top + rect.height / 2;

    const mouseX = e.clientX;
    const mouseY = e.clientY;

    const distance = Math.hypot(mouseX - buttonX, mouseY - buttonY);

    const safeDistance = 200; // how close mouse must be

    if (distance < safeDistance) {
      const angle = Math.atan2(buttonY - mouseY, buttonX - mouseX);

      const moveX = Math.cos(angle) * 80;
      const moveY = Math.sin(angle) * 80;

      moveRandom.style.transform = `translate(${moveX}px, ${moveY}px)`;
    }
  });
}
   
*/

/**
const moveRandom = document.querySelector("#move-random");

if (moveRandom) {

  let posX = window.innerWidth / 2;
  let posY = window.innerHeight / 2;

  moveRandom.style.position = "absolute";
  moveRandom.style.left = posX + "px";
  moveRandom.style.top = posY + "px";

  document.addEventListener("mousemove", (e) => {

    const rect = moveRandom.getBoundingClientRect();

    const buttonX = rect.left + rect.width / 2;
    const buttonY = rect.top + rect.height / 2;

    const dx = buttonX - e.clientX;
    const dy = buttonY - e.clientY;

    const distance = Math.hypot(dx, dy);

    const safeDistance = 150; // how close mouse must be

    if (distance < safeDistance) {

      const angle = Math.atan2(dy, dx);

      const speed = 20; // increase for faster escape 😈

      posX += Math.cos(angle) * speed;
      posY += Math.sin(angle) * speed;

      // keep inside screen
      posX = Math.max(0, Math.min(window.innerWidth - rect.width, posX));
      posY = Math.max(0, Math.min(window.innerHeight - rect.height, posY));

      moveRandom.style.left = posX + "px";
      moveRandom.style.top = posY + "px";
    }
  });
}

 */

/** 

const moveRandom = document.querySelector("#move-random");

if (moveRandom) {

  let activated = false; // 🚀 Only activate after mouse comes close
  let posX, posY;

  document.addEventListener("mousemove", (e) => {

    const rect = moveRandom.getBoundingClientRect();

    const buttonX = rect.left + rect.width / 2;
    const buttonY = rect.top + rect.height / 2;

    const dx = buttonX - e.clientX;
    const dy = buttonY - e.clientY;

    const distance = Math.hypot(dx, dy);
    const safeDistance = 120;

    if (distance < safeDistance) {

      // 🔥 Activate escape mode only first time
      if (!activated) {
        activated = true;

        moveRandom.style.position = "absolute";
        posX = rect.left;
        posY = rect.top;

        moveRandom.style.left = posX + "px";
        moveRandom.style.top = posY + "px";
      }

      const angle = Math.atan2(dy, dx);
      const speed = 20;

      posX += Math.cos(angle) * speed;
      posY += Math.sin(angle) * speed;

      // Keep inside screen
      posX = Math.max(0, Math.min(window.innerWidth - rect.width, posX));
      posY = Math.max(0, Math.min(window.innerHeight - rect.height, posY));

      moveRandom.style.left = posX + "px";
      moveRandom.style.top = posY + "px";
    }
  });
}


*/

const moveRandom = document.querySelector("#move-random");

if (moveRandom) {

  let activated = false;
  let posX, posY;

  function handleMove(clientX, clientY) {

    const rect = moveRandom.getBoundingClientRect();

    const buttonX = rect.left + rect.width / 2;
    const buttonY = rect.top + rect.height / 2;

    const dx = buttonX - clientX;
    const dy = buttonY - clientY;

    const distance = Math.hypot(dx, dy);
    const safeDistance = 120;

    if (distance < safeDistance) {

      if (!activated) {
        activated = true;
        moveRandom.style.position = "absolute";
        posX = rect.left;
        posY = rect.top;
        moveRandom.style.left = posX + "px";
        moveRandom.style.top = posY + "px";
      }

      const angle = Math.atan2(dy, dx);
      const speed = 20;

      posX += Math.cos(angle) * speed;
      posY += Math.sin(angle) * speed;

      // Keep inside screen
      posX = Math.max(0, Math.min(window.innerWidth - rect.width, posX));
      posY = Math.max(0, Math.min(window.innerHeight - rect.height, posY));

      moveRandom.style.left = posX + "px";
      moveRandom.style.top = posY + "px";
    }
  }

  // 🖱 Desktop
  document.addEventListener("mousemove", (e) => {
    handleMove(e.clientX, e.clientY);
  });

  // 📱 Mobile / Tablet
  document.addEventListener("touchmove", (e) => {
    const touch = e.touches[0];
    handleMove(touch.clientX, touch.clientY);
  });
}

// HEART ANIMATION
function createHearts() {
    const heart = document.createElement("div");
    heart.classList.add("heart");
    heart.innerHTML = "❤️";
    heart.style.left = Math.random() * window.innerWidth + "px";
    heart.style.fontSize = Math.random() * 20 + 20 + "px";
    document.body.appendChild(heart);

    setTimeout(() => {
        heart.remove();
    }, 6000);
}

setInterval(createHearts, 200);


// BALLOON ANIMATION
function createBalloon() {
    const balloon = document.createElement("div");
    balloon.classList.add("balloon");
    balloon.style.left = Math.random() * window.innerWidth + "px";
    balloon.style.backgroundColor = `hsl(${Math.random()*360}, 80%, 60%)`;
    document.body.appendChild(balloon);

    setTimeout(() => {
        balloon.remove();
    }, 8000);
}

setInterval(createBalloon, 1000);
