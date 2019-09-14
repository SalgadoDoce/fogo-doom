const firePixels = []
const WIDTH = 3
const HEIGHT = 2

const start = () => {
    createFireDataStructure()
    renderFire()
}

const createFireDataStructure = () => {
    const numberOfPixels = WIDTH * HEIGHT

    for(let i = 0; i < numberOfPixels; i++) {
        firePixels[i] = 0
    }
}

const renderFire = () => {
    let html = `<table cellpadding=0 cellspacing=0>`
    
    for(let row = 0; row < HEIGHT; row++) {
        html += `<tr>`

        for(let column = 0; column < WIDTH; column++) {
            const pixelIndex = column + (WIDTH * row)

            html += `<td>${pixelIndex}</td>`
        }

        html += `</tr>`
    }

    html += `</table>`

    document.querySelector("div#fireCanvas").innerHTML = html
}

start()