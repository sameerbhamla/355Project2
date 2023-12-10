let lightboxTitle = 'Featured GiveAway Items';
let imgFiles = ['images/L1.jpg', 'images/GoogleNestHub.png', 'images/L6.jpg', 'images/L2.jpg', 'images/L3.jpg', 'images/L4.jpg', 'images/L5.jpg', 'images/TV.png'];

let imgCaptions = new Array(4);
imgCaptions[0] = 'one';
imgCaptions[1] = 'two';
imgCaptions[2] = 'three';
imgCaptions[3] = 'four';

let imgCount = imgFiles.length;

window.addEventListener('load', createLightbox);

let currentImg = 1; // Move the currentImg variable outside the function scope

function createLightbox() {
    let lightbox = document.getElementById('lightbox');

    let lbTitle = document.createElement('h1'); // Fix the tag name
    let lbNav = document.createElement('div');
    let lbCounter = document.createElement('div');
    let lbPrev = document.createElement('div');
    let lbNext = document.createElement('div');
    let lbPlay = document.createElement('div');
    let lbImages = document.createElement('div');

    lightbox.appendChild(lbTitle);
    lbTitle.id = 'lbTitle';
    lbTitle.textContent = lightboxTitle;

    lightbox.appendChild(lbNav);
    lbNav.id = 'lbNav';

    lbNav.appendChild(lbCounter);
    lbCounter.id = 'lbCounter';
    lbCounter.textContent = currentImg + ' / ' + imgCount;

    lbNav.appendChild(lbPrev);
    lbPrev.id = 'lbPrev';
    lbPrev.innerHTML = '&#9664';
    lbPrev.onclick = showPrev;

    lbNav.appendChild(lbNext);
    lbNext.id = 'lbNext';
    lbNext.innerHTML = '&#9654';
    lbNext.onclick = showNext;

    lbNav.appendChild(lbPlay);
    lbPlay.id = 'lbPlay';
    lbPlay.innerHTML = '&#9199';
    let timeId;
    lbPlay.onclick = function () {
        if (timeId) {
            window.clearInterval(timeId);
            timeId = undefined;
        } else {
            showNext();
            timeId = window.setInterval(showNext, 1500);
        }
    };

    lightbox.appendChild(lbImages);
    lbImages.id = 'lbImages';

    for (let i = 0; i < imgCount; i++) {
        let image = document.createElement('img');
        image.src = imgFiles[i];
        image.alt = imgCaptions[i];
        lbImages.append(image);
    }
}

function showNext() {
    document.getElementById('lbImages').appendChild(document.getElementById('lbImages').firstElementChild);
    (currentImg < imgCount) ? currentImg++ : currentImg = 1;
    document.getElementById('lbCounter').textContent = currentImg + ' / ' + imgCount;
}

function showPrev() {
    document.getElementById('lbImages').insertBefore(document.getElementById('lbImages').lastElementChild, document.getElementById('lbImages').firstElementChild);
    (currentImg > 1) ? currentImg-- : currentImg = imgCount;
    document.getElementById('lbCounter').textContent = currentImg + ' / ' + imgCount;
}
