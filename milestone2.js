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

let r = randomNumber(-50, 50);

let decidingFactor = randomNumber(-1, 1);
let randomBoolean;

if (decidingFactor >= 0) {
	randomBoolean = true;
} else {
	randomBoolean = false;
}

let pixelSize = 50;

function drawPixel(x, y) {
	context.fillRect(x, y, pixelSize, pixelSize);
}

//

//

backgroundColor();
function backgroundColor() {
	if (r >= 0 && randomBoolean == true) {
		let randomBlue1 = randomNumber(0, 0);
		let randomBlue2 = randomNumber(100, 255);
		context.fillStyle =
			"rgb(" + randomBlue1 + "," + randomBlue1 + "," + randomBlue2 + ")";
	} else if (r >= 0 && randomBoolean == false) {
		let randomRed1 = randomNumber(0, 0);
		let randomRed2 = randomNumber(100, 255);
		context.fillStyle =
			"rgb(" + randomRed2 + "," + randomRed1 + "," + randomRed1 + ")";
	} else {
		let randomYellow1 = randomNumber(0, 0);
		let randomYellow2 = randomNumber(100, 255);
		context.fillStyle =
			"rgb(" + randomYellow2 + "," + randomYellow2 + "," + randomYellow1 + ")";
	}
}

context.fillRect(0, 0, width, height);

context.fillStyle = "white";

for (let index = 0; index < 1; index++) {
	let x = randomNumber(0, width);
	let y = randomNumber(0, height);
	drawFace(x, y, r);
}

function drawFace(x, y, r) {
	for (let i = 0; i < 4; i++) {
		if (r >= 0 && randomBoolean == true) {
			drawPixel(x - 2 * pixelSize, y - 3 * pixelSize);
			drawPixel(x - 3 * pixelSize, y - 3 * pixelSize);
			drawPixel(x - 1 * pixelSize, y - 4 * pixelSize);

			drawPixel(x + 2 * pixelSize, y - 3 * pixelSize);
			drawPixel(x + 3 * pixelSize, y - 3 * pixelSize);
			drawPixel(x + 1 * pixelSize, y - 4 * pixelSize);
		} else if (r >= 0 && randomBoolean == false) {
			drawPixel(x - 2 * pixelSize, y - 3 * pixelSize);
			drawPixel(x - 3 * pixelSize, y - 4 * pixelSize);
			drawPixel(x - 1 * pixelSize, y - 2 * pixelSize);

			drawPixel(x + 2 * pixelSize, y - 3 * pixelSize);
			drawPixel(x + 3 * pixelSize, y - 4 * pixelSize);
			drawPixel(x + 1 * pixelSize, y - 2 * pixelSize);
		} else {
			drawPixel(x - 3 * pixelSize, y - 4 * pixelSize);
			drawPixel(x - 2 * pixelSize, y - 4 * pixelSize);
			drawPixel(x - 1 * pixelSize, y - 4 * pixelSize);

			drawPixel(x + 3 * pixelSize, y - 4 * pixelSize);
			drawPixel(x + 2 * pixelSize, y - 4 * pixelSize);
			drawPixel(x + 1 * pixelSize, y - 4 * pixelSize);
		}

		drawPixel(x, y);
		drawPixel(x - i * pixelSize, y);
		drawPixel(x + i * pixelSize, y);

		drawPixel(x - 4 * pixelSize, y + r);
		drawPixel(x + 4 * pixelSize, y + r);
	}
}
