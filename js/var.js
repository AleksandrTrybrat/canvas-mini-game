'use strict';

const canvas = document.getElementById('canvasId');
const ctx = canvas.getContext('2d');
const imageBg = document.getElementById('bg');
const imageHero = document.getElementById('hero');
const imageAim = document.getElementById('aim');
const imageBullet = document.getElementById('bullet');

canvas.height = 550;
canvas.width = 550;


let background = {
  x: 0,
  y: 0,
  width: canvas.width,
  height: canvas.height,
};

let hero = {
  x: 275,
  y: 385,
  width: 110,
  height: 180,
  speed: 3,
};

let aim = {
  x: 0,
  y: -50,
  width: 50,
  height: 50,
  speed: 1.5,
};


let aims = [];
let speed = 1;

let bullets = [];
let bulletSpeed = 4;

let score = 0;

let gameOver = false;

ctx.drawImage(imageBg, background.x, background.y, canvas.width, canvas.height);
ctx.drawImage(imageHero, hero.x, hero.y, hero.width, hero.height);
ctx.drawImage(imageAim, aim.x, aim.y, aim.width, aim.height);

