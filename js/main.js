// making the img carousel work

// let imgBox = document.querySelector("#img-carousel");
const aboutImgs = document.querySelectorAll(".aboutImgs img");
let aboutImgIndex = 0;
let aboutIntervalID = null;

function initAboutCarousel() {
    aboutImgs[aboutImgIndex].classList.add("displayImg");
}

function showAboutImg(index) {
    if (index >= aboutImgs.length) {
        aboutImgIndex = 0;
    } else if (index < 0) {
        aboutImgIndex = aboutImgs.length - 1;
    }

    aboutImgs.forEach(aboutImg => {
        aboutImg.classList.remove("displayImg");
    });
    aboutImgs[aboutImgIndex].classList.add("displayImg");
}

function prevAboutImg() {
    aboutImgIndex--;
    showAboutImg(aboutImgIndex);
}

function nextAboutImg() {
    aboutImgIndex++;
    showAboutImg(aboutImgIndex);
}

initAboutCarousel();

// const carouselRight = document.querySelector("#");
// const carouselLeft = document.querySelector("#");

// https://www.youtube.com/watch?v=749ta0nvj8s
// watch this later to make the carousel :P


// function imgChange (imgNum) {
//     if (imgNum) === 1 {
//         return 1;
//     } else if (imgNum) === 2 {
//         return 2;
//     } else if (imgNum) === 3 {
//         return 3;
//     }
// }
