"use strict";

let canvas = document.querySelector("canvas");
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
let context = canvas.getContext("2d");

function randomNumber(min, max) {
	return Math.floor(Math.random() * (max - min + 1)) + min;
}

let width = context.canvas.width;
let height = context.canvas.height;

let r = randomNumber(0, width);
let r2 = randomNumber(0, height);
let r3 = randomNumber(-50, 50);

let pixelSize = 40;

function drawPixel(x, y) {
	context.fillRect(x, y, pixelSize, pixelSize);
}

if (r3 >= 0) {
	let randomBlue1 = randomNumber(0, 20);
	let randomBlue2 = randomNumber(0, 230);
	context.fillStyle =
		"rgb(" + randomBlue1 + "," + randomBlue1 + "," + randomBlue2 + ")";
} else {
	let randomYellow1 = randomNumber(0, 20);
	let randomYellow2 = randomNumber(0, 230);
	context.fillStyle =
		"rgb(" + randomYellow2 + "," + randomYellow2 + "," + randomYellow1 + ")";
}

context.fillRect(0, 0, width, height);

context.fillStyle = "white";

for (let i = 0; i < 4; i++) {
	if (r3 >= 0) {
		drawPixel(r - 2 * pixelSize, r2 - 3 * pixelSize);
		drawPixel(r - 3 * pixelSize, r2 - 3 * pixelSize);
		drawPixel(r - 1 * pixelSize, r2 - 4 * pixelSize);

		drawPixel(r + 2 * pixelSize, r2 - 3 * pixelSize);
		drawPixel(r + 3 * pixelSize, r2 - 3 * pixelSize);
		drawPixel(r + 1 * pixelSize, r2 - 4 * pixelSize);
	} else {
		drawPixel(r - 3 * pixelSize, r2 - 4 * pixelSize);
		drawPixel(r - 2 * pixelSize, r2 - 4 * pixelSize);
		drawPixel(r - 1 * pixelSize, r2 - 4 * pixelSize);

		drawPixel(r + 3 * pixelSize, r2 - 4 * pixelSize);
		drawPixel(r + 2 * pixelSize, r2 - 4 * pixelSize);
		drawPixel(r + 1 * pixelSize, r2 - 4 * pixelSize);
	}

	drawPixel(r, r2);
	drawPixel(r - i * pixelSize, r2);
	drawPixel(r + i * pixelSize, r2);

	drawPixel(r - 4 * pixelSize, r2 + r3);
	drawPixel(r + 4 * pixelSize, r2 + r3);
}
