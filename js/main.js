'use strict';

window.addEventListener('click', () => {
	audio.play();
});

const audio = document.createElement('audio');
audio.src = 'sound/1.mp3';
audio.loop = true;
document.body.appendChild(audio);



// Открыть модальное окно
document.getElementById('button').addEventListener('click', function() {
  document.getElementById('modal').classList.add('open')
});

// Закрыть модальное окно при нажатии на Esc
window.addEventListener('keydown', (e) => {
  if (e.key === 'Escape') {
      document.getElementById('modal').classList.remove('open')
  }
});

// Закрыть модальное окно при клике вне его
document.querySelector('#modal .modal__box').addEventListener('click', event => {
  event._isClickWithInModal = true;
});
document.getElementById('modal').addEventListener('click', event => {
  if (event._isClickWithInModal) return;
  event.currentTarget.classList.remove('open');
});

