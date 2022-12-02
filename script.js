/* main slider start */
let slideContainer = document.querySelector(`.slideContainer`)
let value = 0
let left = document.getElementById(`left`)
let right = document.getElementById(`right`)
let mainSliderinterval = 4000

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
    }, mainSliderinterval);
}
/* main slider end */

/* our partners slider start */
let partnerSlideContainer = document.querySelector(`.partnerSlideContainer`)
let partnerValue = 0
let partnerSliderinterval = 1000
setInterval(() => {
    partnerValue -= 240
    if (partnerValue < -2400) {
        partnerValue = 0
        partnerSlideContainer.style.transition = "none"
    }
    partnerSlideContainer.style.marginLeft = `${partnerValue}px`
    if (partnerValue == -240) {
        partnerSlideContainer.style.transition = ".5s cubic-bezier(0, 0, 0, 1)"
    }
}, partnerSliderinterval);
/* our partners slider end */