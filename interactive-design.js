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
let tearMovement = 0;

let randomBoolean;
let nonRandomBoolean = true;
let randomValue = randomNumber(1, 2);

if (randomValue % 2 == 0) {
	randomBoolean = true;
} else {
	randomBoolean = false;
}

function drawPixel(x, y) {
	context.fillRect(x, y, pixelSize, pixelSize);
}

// ^ Before-code stuff ^

if (randomBoolean == true) {
	drawHappyFace(width / 2 - 2 * pixelSize, height / 2);
} else {
	drawSadFace(width / 2 - 2 * pixelSize, height / 2);
}

function drawHappyFace(x, y) {
	context.fillStyle = "black";

	drawPixel(x, y);

	// right side of mouth
	drawPixel(x + pixelSize, y);
	drawPixel(x + 2 * pixelSize, y);
	drawPixel(x + 3 * pixelSize, y - pixelSize);

	// left side of mouth
	drawPixel(x - pixelSize, y);
	drawPixel(x - 2 * pixelSize, y);
	drawPixel(x - 3 * pixelSize, y - pixelSize);

	//right eye
	drawPixel(x + 3 * pixelSize, y - 4 * pixelSize);
	drawPixel(x + 2 * pixelSize, y - 5 * pixelSize);
	drawPixel(x + 1 * pixelSize, y - 4 * pixelSize);

	// left eye
	drawPixel(x - 3 * pixelSize, y - 4 * pixelSize);
	drawPixel(x - 2 * pixelSize, y - 5 * pixelSize);
	drawPixel(x - 1 * pixelSize, y - 4 * pixelSize);
}

function drawSadFace(x, y) {
	drawPixel(x, y);

	//left side of mouth
	drawPixel(x + pixelSize, y);
	drawPixel(x + 2 * pixelSize, y);
	drawPixel(x + 3 * pixelSize, y + pixelSize);

	// left side of mouth
	drawPixel(x - pixelSize, y);
	drawPixel(x - 2 * pixelSize, y);
	drawPixel(x - 3 * pixelSize, y + pixelSize);

	//right eye
	drawPixel(x + 3 * pixelSize, y - 3 * pixelSize);
	drawPixel(x + 2 * pixelSize, y - 3 * pixelSize);
	drawPixel(x + 1 * pixelSize, y - 4 * pixelSize);

	//left eye
	drawPixel(x - 3 * pixelSize, y - 3 * pixelSize);
	drawPixel(x - 2 * pixelSize, y - 3 * pixelSize);
	drawPixel(x - 1 * pixelSize, y - 4 * pixelSize);

	if (nonRandomBoolean == true) {
		drawTears();
	}

	function drawTears() {
		tearMovement += 2;
		context.fillStyle = "Blue";
		drawPixel(width / 2, height / 2 - 105 + tearMovement);
		drawPixel(width / 2 - 4 * pixelSize, height / 2 - 105 + tearMovement);
		requestAnimationFrame(drawTears);
	}
}

let mouseDown = false;
window.onmousedown = verify;

function verify() {
	mouseDown = true;
}
