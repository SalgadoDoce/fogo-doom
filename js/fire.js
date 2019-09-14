const firePixels = []
const WIDTH = 10
const HEIGHT = 10

const start = () => {
    createFireDataStructure()
    createFireSource()
    renderFire()
    calculateFirePropagation()
    setInterval(calculateFirePropagation, 1000)
}

const createFireDataStructure = () => {
    const numberOfPixels = WIDTH * HEIGHT

    for(let i = 0; i < numberOfPixels; i++) {
        firePixels[i] = 0
    }
}

const updateFireIntensityPerPixel = (currentPixel) => {
    const belowPixelIndex = currentPixel + WIDTH
    if(belowPixelIndex >= WIDTH * HEIGHT) {
        return
    }

    const decay = Math.floor(Math.random() * 3)
    const belowPixelFireIntensity = firePixels[belowPixelIndex]
    const newFireIntensity = 
    belowPixelFireIntensity - decay >= 0 ? belowPixelFireIntensity - decay : 0

    firePixels[currentPixel] = newFireIntensity
}

const calculateFirePropagation = () => {
    for(let column = 0; column < WIDTH; column++) {
        for(let row = 0; row < HEIGHT; row++) {
            const pixelIndex = column + (WIDTH * row)
            updateFireIntensityPerPixel(pixelIndex)
        }
    }

    renderFire()
}

const renderFire = () => {
    let html = `<table cellpadding=0 cellspacing=0>`
    
    for(let row = 0; row < HEIGHT; row++) {
        html += `<tr>`

        for(let column = 0; column < WIDTH; column++) {
            const pixelIndex = column + (WIDTH * row)
            const fireIntensity = firePixels[pixelIndex]

            html += `<td><div class="pixel-index">${pixelIndex}</div>${fireIntensity}</td>`
        }

        html += `</tr>`
    }

    html += `</table>`

    document.querySelector("div#fireCanvas").innerHTML = html
}

const createFireSource = () => {
    for(let column = 0; column < WIDTH; column++) {
        const overFlowPixelIndex = WIDTH * HEIGHT
        const pixelIndex = (overFlowPixelIndex - WIDTH) + column

        firePixels[pixelIndex] = 36
    }
}

start()