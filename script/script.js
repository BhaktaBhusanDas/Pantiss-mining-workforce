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


// main slider start
let slideContainer = document.querySelector(`.slideContainer`)
let value = 0
let left = document.getElementById(`left`)
let right = document.getElementById(`right`)
let mainSliderinterval = 5000
let mainSliderImages = 6
let maxMainSliderValue = (mainSliderImages * (-100)) + 100

let changeSlide = () => {
    slideContainer.style.marginLeft = `${value}%`
}
document.body.onload = () => {
    left.onclick = () => {
        value += 100
        if (value > 0) {
            value = maxMainSliderValue
        }
        changeSlide()
    }
    right.onclick = () => {
        value -= 100
        if (value < maxMainSliderValue) {
            value = 0
        }
        changeSlide()
    }
    setInterval(() => {
        value -= 100
        if (value < maxMainSliderValue) {
            value = 0
        }
        changeSlide()
    }, mainSliderinterval);
}
// main slider end


// our partners slider start
let partnerSlideContainer = document.querySelector(`.partnerSlideContainer`)
let partnerValue = 0
let partnerSliderinterval = 1000
let partnerSliderImages = 10
let maxPartnerSliderValue = partnerSliderImages * (-240)
setInterval(() => {
    partnerValue -= 240
    if (partnerValue < maxPartnerSliderValue) {
        partnerValue = 0
        partnerSlideContainer.style.transition = "none"
    }
    partnerSlideContainer.style.marginLeft = `${partnerValue}px`
    if (partnerValue == -240) {
        partnerSlideContainer.style.transition = ".5s cubic-bezier(0, 0, 0, 1)"
    }
}, partnerSliderinterval);
// our partners slider end


// notice slider start
let noticeSlideContainer = document.querySelector(`.noticeSlideContainer`)
let noticeValue = 0
let noticeSliderinterval = 5000
let noticeSliderNotices = 10
let maxNoticeSliderValue = (noticeSliderNotices - 5) * (-70)

let up = document.getElementById(`up`)
let down = document.getElementById(`down`)

up.onclick = () => {
    noticeValue += 70
    if (noticeValue > 0) {
        noticeValue = maxNoticeSliderValue
    }
    noticeSlideContainer.style.marginTop = `${noticeValue}px`
}
down.onclick = () => {
    noticeValue -= 70
    if (noticeValue < maxNoticeSliderValue) {
        noticeValue = 0
    }
    noticeSlideContainer.style.marginTop = `${noticeValue}px`
}
setInterval(() => {
    noticeValue -= 70
    if (noticeValue < maxNoticeSliderValue) {
        noticeValue = 0
        noticeSlideContainer.style.transition = "none"
    }
    noticeSlideContainer.style.marginTop = `${noticeValue}px`
    if (noticeValue == -70) {
        noticeSlideContainer.style.transition = ".5s cubic-bezier(0, 0, 0, 1)"
    }
}, noticeSliderinterval);
// notice slider end


// quick link slider start
let linkSliderContainer = document.querySelector(`.linkSliderContainer`)
let linkValue = 0
let linkSliderinterval = 3000
let linkSliderImages = 10
let maxLinkSliderValue = (linkSliderImages - 5) * (-274)


let linkLeft = document.getElementById(`linkLeft`)
let linkRight = document.getElementById(`linkRight`)


linkLeft.onclick = () => {
    linkValue += 274
    if (linkValue > 0) {
        linkValue = maxLinkSliderValue
    }
    linkSliderContainer.style.marginLeft = `${linkValue}px`
}
linkRight.onclick = () => {
    linkValue -= 274
    if (linkValue < maxLinkSliderValue) {
        linkValue = 0
    }
    linkSliderContainer.style.marginLeft = `${linkValue}px`
}

setInterval(() => {
    linkValue -= 274
    if (linkValue < maxLinkSliderValue) {
        linkValue = 0
        console.log(linkValue);
        linkSliderContainer.style.transition = "none"
    }
    linkSliderContainer.style.marginLeft = `${linkValue}px`
    if (linkValue == -274) {
        linkSliderContainer.style.transition = ".5s cubic-bezier(0, 0, 0, 1)"
    }
}, linkSliderinterval);
// quick link slider end

