const xsize = 30
const ysize = 30

const screenSizeX = 10
const screenSizeY = 20

let running = true
const mapColor = "white"

const canvas = document.querySelector("#canvas")
const ctx = canvas.getContext('2d')

canvas.height = screenSizeY * ysize + 10
canvas.width = screenSizeX * xsize + 10

fillMap(ctx, mapColor)

function getRandomInt(max) {
    return Math.floor(Math.random() * max)
}

function gravity() {
    
}

function drawObj(obj, ctx, offset) {
    let color = obj.color
    for (let i = 0; i < obj.texture.length; i++) {
        drawCube(obj.texture[i][0], obj.texture[i][1] + offset, ctx, color)
    }
}

function sleep(ms) {
    return new Promise((accept) => {
        setTimeout(() => {
            accept()
        }, ms)
    })
}

function drawCube(x, y, ctx, color) {
    ctx.fillStyle = color
    ctx.fillRect(x * xsize, y * ysize, xsize-1, ysize-1)
}

function fillMap(ctx, color) {
    ctx.fillStyle = color
    for (let x = 1; x < screenSizeX; x++) {
        for (let y = 1; y < screenSizeY; y++) {
            drawCube(x, y, ctx, color)
        }
    }
}