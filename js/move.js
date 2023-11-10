'use strict';


// движение героя
const smoothMove = () => {
  let callbackId;
  
  const moveLeft = () => {
    if (!gameOver) {
      callbackId = requestAnimationFrame(moveLeft);
      hero.x += hero.speed;
      ctx.drawImage(imageHero, hero.x, hero.y, hero.width, hero.height);
    }
  };

  const moveRight = () => {
    if (!gameOver) {
      callbackId = requestAnimationFrame(moveRight);
      hero.x -= hero.speed;
      ctx.drawImage(imageHero, hero.x, hero.y, hero.width, hero.height);
    }
  };

  const onKeyDown = ({ code }) => {
    if (code === 'KeyA') {
      if (!gameOver) {
        callbackId = requestAnimationFrame(moveRight);
      }
    }
    if (code === 'KeyD') {
      if (!gameOver) {
        callbackId = requestAnimationFrame(moveLeft);
      }
    }
  };

  const onKeyUp = ({ code }) => {
    if (code === 'KeyA' || code === 'KeyD') {
      cancelAnimationFrame(callbackId);
      window.addEventListener('keydown', onKeyDown, { once: true });
    }
  }

  window.addEventListener('keydown', onKeyDown, { once: true });
  window.addEventListener('keyup', onKeyUp);


  draw();
};
