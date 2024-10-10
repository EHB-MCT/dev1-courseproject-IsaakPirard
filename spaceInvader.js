"use strict";

drawSpaceAlien();

function drawSpaceAlien() {
	let canvas = document.querySelector("canvas");
	canvas.width = window.innerWidth;
	canvas.height = window.innerHeight;
	let context = canvas.getContext("2d");

	context.beginPath();
	context.rect(100, 100, 300, 300);
	context.stroke();
	context.fill();

	context.fillStyle = "Green";
	context.strokeStyle = "Green";
	context.beginPath();
	context.rect(175, 125, 50, 50);
	context.fill();

	context.beginPath();
	context.rect(225, 125, 50, 50);
	context.fill();

	context.beginPath();
	context.rect(275, 125, 50, 50);
	context.stroke();
	context.fill();

	context.beginPath();
	context.rect(175, 175, 50, 50);
	context.fill();

	context.beginPath();
	context.rect(275, 175, 50, 50);
	context.fill();

	context.beginPath();
	context.rect(225, 325, 50, 50);
	context.fill();
}
