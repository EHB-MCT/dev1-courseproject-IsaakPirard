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

	context.beginPath();
	context.rect(200, 100, 50, 50);
	context.stroke();
	context.fillStyle = "Green";
	context.strokeStyle = "Green";
	context.fill();

	context.beginPath();
	context.rect(250, 100, 50, 50);
	context.stroke();
	context.fillStyle = "Green";
	context.strokeStyle = "Green";
	context.fill();

	context.beginPath();
	context.rect(300, 100, 50, 50);
	context.stroke();
	context.fillStyle = "Green";
	context.strokeStyle = "Green";
	context.fill();

	context.beginPath();
	context.rect(200, 150, 50, 50);
	context.stroke();
	context.fillStyle = "Green";
	context.strokeStyle = "Green";
	context.fill();

	context.beginPath();
	context.rect(300, 150, 50, 50);
	context.stroke();
	context.fillStyle = "Green";
	context.strokeStyle = "Green";
	context.fill();

	context.beginPath();
	context.rect(250, 300, 50, 50);
	context.stroke();
	context.fillStyle = "Green";
	context.strokeStyle = "Green";
	context.fill();
}

//HAHAHHAHAHAHAHAH!!!
