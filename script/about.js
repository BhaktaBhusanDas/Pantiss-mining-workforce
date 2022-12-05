// whoWeAre extension start
let whoWeAre = document.querySelector(`.whoWeAre`)
let whoWeAreExtension = document.querySelector(`.whoWeAreExtension`)

whoWeAre.onmouseover = () => {
    whoWeAreExtension.classList.add(`extensionActive`)
}

whoWeAre.onmouseleave = () => {
    whoWeAreExtension.classList.remove(`extensionActive`)
}

whoWeAreExtension.onmouseover = () => {
    whoWeAreExtension.classList.add(`extensionActive`)
}

whoWeAreExtension.onmouseleave = () => {
    whoWeAreExtension.classList.remove(`extensionActive`)
}
// whoWeAre extension end


// whatWeDo extension start
let whatWeDo = document.querySelector(`.whatWeDo`)
let whatWeDoExtension = document.querySelector(`.whatWeDoExtension`)

whatWeDo.onmouseover = () => {
    whatWeDoExtension.classList.add(`extensionActive`)
}

whatWeDo.onmouseleave = () => {
    whatWeDoExtension.classList.remove(`extensionActive`)
}

whatWeDoExtension.onmouseover = () => {
    whatWeDoExtension.classList.add(`extensionActive`)
}

whatWeDoExtension.onmouseleave = () => {
    whatWeDoExtension.classList.remove(`extensionActive`)
}
// whatWeDo extension end


/* main slider start */
let slideContainer = document.querySelector(`.slideContainer`)
let value = 0
let left = document.getElementById(`left`)
let right = document.getElementById(`right`)
let mainSliderinterval = 5000

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
    let stop = setInterval(() => {
        value -= 100
        if (value < -500) {
            value = 0
        }
        changeSlide()
    }, mainSliderinterval);
}
/* main slider end */

/* team box start */
let buttons = document.getElementsByClassName(`teamButoon`)
let teams = document.getElementsByClassName(`box`)

for (let index = 0; index < buttons.length; index++) {
    const element = buttons[index];
    element.onclick = () => {
        for (let index = 0; index < buttons.length; index++) {
            const element = buttons[index];
            element.classList.remove(`activeButton`)
            teams[index].classList.remove(`boxActive`)
        }
        element.classList.add(`activeButton`)
        teams[index].classList.add(`boxActive`)
    }
}
/* team box end */