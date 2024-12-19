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

let flowingTears = false;

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

function drawLine(x, y, x2, y2) {
	context.beginPath();
	context.moveTo(x, y);
	context.lineTo(x2, y2);
	context.strokeStyle = "White";
	context.lineWidth = "5";
	context.stroke();
	context.closePath();
}

// ^ Before-code stuff ^

window.onmousedown = transfer;

/**
 *
 * @param {MouseEvent} eventData
 */
function transfer(eventData) {
	let posX = eventData.pageX;
	let posY = eventData.pageY;

	if (posY > height / 2) {
		randomBoolean = false;
	} else {
		randomBoolean = true;
	}
	console.log(randomBoolean);

	if (randomBoolean == true) {
		drawHappyFace(width / 2 - 2 * pixelSize, height / 2);
		nonRandomBoolean = false;
	} else {
		tearMovement = 0;
		drawSadFace(width / 2 - 2 * pixelSize, height / 2);
		nonRandomBoolean = true;
		drawTears();
	}
}

if (randomBoolean == true) {
	drawHappyFace(width / 2 - 2 * pixelSize, height / 2);
} else {
	drawSadFace(width / 2 - 2 * pixelSize, height / 2);
}

function drawHappyFace(x, y) {
	context.fillStyle = "gold";
	context.fillRect(0, 0, width, height);

	context.fillStyle = "white";

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

	drawLine(0, height / 2, width, height / 2);
}

function drawSadFace(x, y) {
	context.fillStyle = "Blue";
	context.fillRect(0, 0, width, height);

	context.fillStyle = "white";
	drawPixel(x, y);

	//left side of mouth
	drawPixel(x + pixelSize, y);
	drawPixel(x + 2 * pixelSize, y);
	drawPixel(x + 3 * pixelSize, y + pixelSize);

	// right side of mouth
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

	drawLine(0, height / 2, width, height / 2);
}

function drawTears() {
	if (nonRandomBoolean == false) return;

	tearMovement += 2;
	context.fillStyle = "Cyan";
	drawPixel(width / 2, height / 2 - 105 + tearMovement);
	drawPixel(width / 2 - 4 * pixelSize, height / 2 - 105 + tearMovement);

	// Continue animation
	requestAnimationFrame(drawTears);
}

// Taak klaar
