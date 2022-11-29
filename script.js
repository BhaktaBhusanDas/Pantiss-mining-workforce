let slideContainer = document.querySelector(`.slideContainer`)
let value = 0
let left = document.getElementById(`left`)
let right = document.getElementById(`right`)


let changeSlide = () => {
    slideContainer.style.marginLeft = `${value}%`
}
document.body.onload = () => {
    left.onclick = () => {
        value += 100
        if (value > 0) {
            value = -500
        }
        changeSlide()
    }
    right.onclick = () => {
        value -= 100
        if (value < -500) {
            value = 0
        }
        changeSlide()
    }
    setInterval(() => {
        value -= 100
        if (value < -500) {
            value = 0
        }
        changeSlide()
    }, 4000);
}