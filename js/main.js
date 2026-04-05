// making the about img carousel work
// Followed this tutorial, same code with slight tweaks for the rest of the image carousels: https://www.youtube.com/watch?v=749ta0nvj8s
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

const DCAboutImgs = document.querySelectorAll(".DCAboutImgs img");
const DCAboutBtns = document.querySelectorAll(".DCAbout-btn");
const DCAboutText = document.querySelector("#DCAbout-text");
let DCAboutImgIndex = 0;
let DCAboutIntervalID = null;
const DCAboutTexts = [
    "I focused on communicating the product as a unique photobooth experience that could be booked for private events early in the page. I also added a benefits section, highlighting benefits received by both hosts and guests, enticing users to the product.",

    "I introduced a clear step-by-step breakdown on how the AI photobooth works to help users quickly understand the process. Pricing tiers were also added to this page to provide transparency and help users make informed decisions."
];

function initDCAboutCarousel() {
    DCAboutImgs[DCAboutImgIndex].classList.add("displayImg");
    DCAboutBtns[DCAboutImgIndex].classList.add("show-button");
}

function showDCAboutImg(index) {
    if (index >= DCAboutImgs.length) {
        DCAboutImgIndex = 0;
    } else if (index < 0) {
        DCAboutImgIndex = DCAboutImgs.length - 1;
    }

    DCAboutImgs.forEach(DCAboutImg => {
        DCAboutImg.classList.remove("displayImg");
    });
    DCAboutImgs[DCAboutImgIndex].classList.add("displayImg");

    DCAboutText.textContent = DCAboutTexts[DCAboutImgIndex];

    DCAboutBtns.forEach(DCAboutBtn => {
        DCAboutBtn.classList.remove("show-button");
    });
    DCAboutBtns[DCAboutImgIndex].classList.add("show-button");
}

function prevDCAboutImg() {
    DCAboutImgIndex--;
    showDCAboutImg(DCAboutImgIndex);
}

function nextDCAboutImg() {
    DCAboutImgIndex++;
    showDCAboutImg(DCAboutImgIndex);
}

if (DCAboutImgs.length > 0) {
    initDCAboutCarousel();
}

const DCOnboardingImgs = document.querySelectorAll(".DCOnboardingImgs img");
const DCOnboardingText = document.querySelector("#DCOnboarding-text");
let DCOnboardingImgIndex = 0;
let DCOnboardingIntervalID = null;
const DCOnboardingTexts = [
    "I added a theme sorting system to help users sort through 20+ themes and find one they liked as well as a progress bar to set time expectations.",

    "I added a theme preview along with example outputs with a short description to help guests understand their option before proceeding.",

    "I added a ‘Photo Tips’ section to help users capture the best pictures possible.",

    "Provided a step for users to review and confirm  their image before moving on, with clear calls-to-action to guide their interaction.",

    "Included a transformation loader to indicate the image being generated.",

    "I included calls-to-action with various options for guests to download or share their images with family and friends."
];

function initDCOnboardingCarousel() {
    DCOnboardingImgs[DCOnboardingImgIndex].classList.add("displayImg");
}

function showDCOnboardingImg(index) {
    if (index >= DCOnboardingImgs.length) {
        DCOnboardingImgIndex = 0;
    } else if (index < 0) {
        DCOnboardingImgIndex = DCOnboardingImgs.length - 1;
    }

    DCOnboardingImgs.forEach(DCOnboardingImg => {
        DCOnboardingImg.classList.remove("displayImg");
    });
    DCOnboardingImgs[DCOnboardingImgIndex].classList.add("displayImg");

    DCOnboardingText.textContent = DCOnboardingTexts[DCOnboardingImgIndex];
}

function prevDCOnboardingImg() {
    DCOnboardingImgIndex--;
    showDCOnboardingImg(DCOnboardingImgIndex);
}

function nextDCOnboardingImg() {
    DCOnboardingImgIndex++;
    showDCOnboardingImg(DCOnboardingImgIndex);
}

if (DCOnboardingImgs.length > 0) {
    initDCOnboardingCarousel();
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
            // revert back to original state before dragging
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