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

let pixelSize = 50;

// ^ Before-code stuff ^

drawHappyFace(width / 2 - 2 * pixelSize, height / 2);

function drawPixel(x, y) {
	context.fillRect(x, y, pixelSize, pixelSize);
}

function drawHappyFace(x, y) {
	context.fillStyle = "black";

	drawPixel(x, y);

	// left side of mouth
	drawPixel(x + pixelSize, y);
	drawPixel(x + 2 * pixelSize, y);
	drawPixel(x + 3 * pixelSize, y - pixelSize);

	// right side of mouth
	drawPixel(x - pixelSize, y);
	drawPixel(x - 2 * pixelSize, y);
	drawPixel(x - 3 * pixelSize, y - pixelSize);

	// left eye
	drawPixel(x - 3 * pixelSize, y - 4 * pixelSize);
	drawPixel(x - 2 * pixelSize, y - 5 * pixelSize);
	drawPixel(x - 1 * pixelSize, y - 4 * pixelSize);

	//right eye
	drawPixel(x + 3 * pixelSize, y - 4 * pixelSize);
	drawPixel(x + 2 * pixelSize, y - 5 * pixelSize);
	drawPixel(x + 1 * pixelSize, y - 4 * pixelSize);
}
