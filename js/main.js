// making the about img carousel work

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

if (aboutImgs.length > 0) {
    initAboutCarousel();
}

// THE MATCHA LAB BRANDING APPLIED IMAGE CAROUSEL
const theMatchaLabBAImgs = document.querySelectorAll(".theMatchaLabBAImgs img");
let matchaBAImgIndex = 0;
let matchaBAIntervalID = null;

function initMatchaBACarousel() {
    theMatchaLabBAImgs[matchaBAImgIndex].classList.add("displayImg");
}

function showMatchaBAImg(index) {
    if (index >= theMatchaLabBAImgs.length) {
        matchaBAImgIndex = 0;
    } else if (index < 0) {
        matchaBAImgIndex = theMatchaLabBAImgs.length - 1;
    }

    theMatchaLabBAImgs.forEach(matchaBAImg => {
        matchaBAImg.classList.remove("displayImg");
    });
    theMatchaLabBAImgs[matchaBAImgIndex].classList.add("displayImg");
}

function prevMatchaBAImg() {
    matchaBAImgIndex--;
    showMatchaBAImg(matchaBAImgIndex);
}

function nextMatchaBAImg() {
    matchaBAImgIndex++;
    showMatchaBAImg(matchaBAImgIndex);
}

if (theMatchaLabBAImgs.length > 0) {
    initMatchaBACarousel();
}

// grabbing words to move in about page
let floatingWords = document.querySelectorAll(".floating");
floatingWords.forEach((floatingWord => {
    dragWord(floatingWord);
}))

function dragWord (floatingWord) {
    // getting the words original coordinates to use: https://developer.mozilla.org/en-US/docs/Web/API/Element/getBoundingClientRect
    let ogPosition = floatingWord.getBoundingClientRect();
    let ogY = ogPosition.y;
    let ogX = ogPosition.x;

    let dragging = false;
    
    floatingWord.addEventListener("mousedown", function() {
        dragging = true;

        // turning off animations and scaling the text to move
        floatingWord.style.animation = "none";
        floatingWord.style.transform = "scale(1.5)";
        floatingWord.style.position = "fixed";
        floatingWord.style.left = `${ogX}px`;
        floatingWord.style.top = `${ogY}px`;
    });

    document.addEventListener("mousemove", function(e) {
        if (dragging) {
            // getting the mouse positions: https://developer.mozilla.org/en-US/docs/Web/API/MouseEvent/clientX
            floatingWord.style.left = `${e.clientX}px`;
            floatingWord.style.top = `${e.clientY}px`;
        } else {
            return;
        }
    });

    floatingWord.addEventListener("mouseup", function() {
        if (dragging) {
            dragging = false;
            floatingWord.style.animation = "";
            floatingWord.style.animationDelay = "0s";
            floatingWord.style.position = "absolute"
            floatingWord.style.left = "";
            floatingWord.style.top = "";
        } else {
            return;
        }
    });
}