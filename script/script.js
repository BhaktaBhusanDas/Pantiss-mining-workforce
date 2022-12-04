/* main slider start */
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
/* main slider end */

/* our partners slider start */
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
/* our partners slider end */

/* map start */
google.load('visualization', '1', { 'packages': ['geochart'] });
google.setOnLoadCallback(drawVisualization);

function drawVisualization() {
    var data = google.visualization.arrayToDataTable([
        ['State Code', 'State'],
        ['IN-UP', 'Uttar Pradesh'],
        ['IN-BR', 'Bihar'],
        ['IN-MH', 'Maharashtra'],
        ['IN-WB', 'West Bengal'],
        ['IN-MP', 'Madhya Pradesh'],
        ['IN-TN', 'Tamil Nadu'],
        ['IN-RJ', 'Rajasthan'],
        ['IN-KA', 'Karnataka'],
        ['IN-GJ', 'Gujarat'],
        ['IN-AP', 'Andhra Pradesh'],
        ['IN-OR', 'Orissa'],
        ['IN-TG', 'Telangana'],
        ['IN-KL', 'Kerala'],
        ['IN-JH', 'Jharkhand'],
        ['IN-AS', 'Assam'],
        ['IN-PB', 'Punjab'],
        ['IN-CT', 'Chhattisgarh'],
        ['IN-HR', 'Haryana'],
        ['IN-JK', 'Jammu and Kashmir'],
        ['IN-UT', 'Uttarakhand'],
        ['IN-HP', 'Himachal Pradesh'],
        ['IN-TR', 'Tripura'],
        ['IN-ML', 'Meghalaya'],
        ['IN-MN', 'Manipur'],
        ['IN-NL', 'Nagaland'],
        ['IN-GA', 'Goa'],
        ['IN-AR', 'Arunachal Pradesh'],
        ['IN-MZ', 'Mizoram'],
        ['IN-SK', 'Sikkim'],
        ['IN-DL', 'Delhi'],
        ['IN-PY', 'Puducherry'],
        ['IN-CH', 'Chandigarh'],
        ['IN-AN', 'Andaman and Nicobar Islands'],
        ['IN-DN', 'Dadra and Nagar Haveli'],
        ['IN-DD', 'Daman and Diu'],
        ['IN-LD', 'Lakshadweep']
    ]);
    var opts = {
        region: "IN",
        domain: "IN",
        displayMode: "regions",
        resolution: "provinces",
        backgroundColor: '#000000',
        datalessRegionColor: '#000000',
        defaultColor: "#43F6DB",
        width: 540,
        height: 380
    };
    var geochart = new google.visualization.GeoChart(
        document.getElementById("visualization")
    );
    geochart.draw(data, opts);
}
/* map end */

/* notice slider start */
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
/* notice slider end */

/* quick link slider start */
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
/* quick link slider end */