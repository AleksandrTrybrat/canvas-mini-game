'use strict';

// Пули героя
const onKeyDown = ({ code }) => {
  if (code === 'Space') {
    const bulletX = hero.x + hero.width / 2;
    const bulletY = hero.y;
    const bulletWidth = 20;
    const bulletHeight = 20;
    const newBullet = { x: bulletX, y: bulletY, width: bulletWidth, height: bulletHeight };
    bullets.push(newBullet);
  }
};

// пуля
const drawBullets = () => {
  bullets.forEach((bullet) => {
    bullet.y -= bulletSpeed;
    ctx.drawImage(imageBullet, bullet.x, bullet.y, bullet.width, bullet.height);
    checkBulletCollision(bullet);
  });
};

// Счетчик очков
const drawScore = () => {
  ctx.font = 'bold 24px sans-serif';
  ctx.fillStyle = '#fff';
  ctx.fillText(`Score: ${score}`, 10, 30);
};

// столкновение снаряда с мишенью
const checkBulletCollision = (bullet) => {
  aims.forEach((aim) => {
    if (
      bullet.x + bullet.width / 2 > aim.x &&
      bullet.x - bullet.width / 2 < aim.x + aim.width &&
      bullet.y > aim.y &&
      bullet.y < aim.y + aim.height
    ) {
      const index = aims.indexOf(aim);
      aims.splice(index, 1);
      const bulletIndex = bullets.indexOf(bullet);
      bullets.splice(bulletIndex, 1);
      score += 1;
      drawScore();
    }
  });
};

window.addEventListener('keydown', onKeyDown);