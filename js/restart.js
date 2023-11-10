'use strict';


window.addEventListener('click', () => {
	audio.play();
});

const audio = document.createElement('audio');
audio.src = 'sound/1.mp3';
audio.loop = true;
document.body.appendChild(audio);