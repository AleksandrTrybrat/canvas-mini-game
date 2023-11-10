'use strict';

// отрисовка мишеней и конца игры
function draw() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  ctx.drawImage(imageBg, background.x, background.y, canvas.width, canvas.height);
  ctx.drawImage(imageHero, hero.x, hero.y, hero.width, hero.height);
  
  ctx.font = "20px Arial";
  ctx.fillStyle = "white";
  ctx.fillText(`Score: ${score}`, 10, 30);

  if (!gameOver) {
    drawBullets();
    aims.forEach((aim) => {
      aim.y += aim.speed;
      ctx.drawImage(imageAim, aim.x, aim.y, aim.width, aim.height);

      if (aim.y > canvas.height) { //удаление мишеней при достижении нижнего края холста
        const index = aims.indexOf(aim);
        aims.splice(index, 1);
      }

      // проверка координат мишени и пули, при столкновении конец игры
      if (
        aim.x < hero.x + hero.width &&
        aim.x + aim.width > hero.x &&
        aim.y < hero.y + hero.height &&
        aim.y + aim.height > hero.y
      ) {
        gameOver = true;
        aims.length = 0;
        audio.play();
      }
    });
  }

  //отрисовка рандомного количества мишеней
  if (aims.length < 3 && Math.random() < 0.05) {
    const newAim = {
      x: Math.random() * (canvas.width - aim.width),
      y: -aim.height,
      width: aim.width,
      height: aim.height,
      speed: aim.speed,
    };
    aims.push(newAim);
  }


  if (gameOver) {
    ctx.drawImage(imageBg, background.x, background.y, canvas.width, canvas.height);
  
    setTimeout(() => {
      window.location.href = 'game_over.html';
    }, 4000);
  }
  requestAnimationFrame(draw);
}


const audio = document.createElement('audio');
audio.src = 'sound/2.mp3';
audio.loop = true;
audio.autoplay = true;
document.body.appendChild(audio);