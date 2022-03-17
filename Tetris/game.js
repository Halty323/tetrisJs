const xsize = 30;
const ysize = 30;

const screenSizeX = 10;
const screenSizeY = 20;
const interval = 500;
//hjui7g6uk7987uiy60ok6ri7

let running = true;
const mapColor = "white";
let objs = []

const canvas = document.querySelector("#canvas");
const ctx = canvas.getContext('2d');

canvas.height = screenSizeY * ysize + 10;
canvas.width = screenSizeX * xsize + 10;

window.addEventListener('load', () => {
    playGame();
})

async function playGame() {
    while (running) {
        drawMap();
        //logic();
        await sleep(interval)
    }
}

function drawMap() {
    ctx.fillStyle = mapColor
    for (let x = 1; x < screenSizeX; x++) {
        for (let y = 1; y < screenSizeY; y++) {
            drawCube(x, y, ctx, mapColor)
        }
    }
}   

function getRandomInt(max) {
    return Math.floor(Math.random() * max);
}

function drawCube(x, y, color) {
    ctx.fillStyle = color;
    ctx.fillRect(x * xsize, y * ysize, xsize - 1, ysize - 1);
}

function sleep(ms) {
    return new Promise((accept) => {
        setTimeout(() => {
            accept()
        }, ms)
    })
}