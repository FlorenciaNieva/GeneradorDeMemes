const body = document.getElementsByTagName('body');
const main = document.getElementsByTagName('main');
const header = document.getElementsByTagName('header');
const aside = document.getElementsByTagName('aside');
const buttonImage = document.getElementById('button-image');
const buttonText = document.getElementById('button-text');
const buttonModeDark = document.getElementById('button-mode-dark');
const buttonModeLight = document.getElementById('button-mode-light');
const topText = document.getElementById('top-text');
const bottomText = document.getElementById('bottom-text');
const inputTopText = document.getElementById('textareaTop');
const inputBottomText = document.getElementById('textareaBottom');
const buttonDownload = document.getElementById('button-download');
const asideImage = document.getElementById('aside-image');
const asideText = document.getElementById('aside-text');
const url = document.getElementById('url-image');
const imgMeme = document.getElementById('image-meme');
const colorContainerImg = document.getElementById('container-meme-color');
const colorLetters = document.getElementById('color-letter');
const backgroundLetters = document.getElementById('color-letter-background');
const fontSizeInput = document.getElementById('font-size-input');
const span = document.getElementsByTagName('span');
const brightInput = document.getElementById('bright');
const opacityInput = document.getElementById('opacity');
const contrastInput = document.getElementById('contrast');
const blurInput = document.getElementById('blur');
const graysInput = document.getElementById('gray-scale');
const sepiaInput = document.getElementById('sepia');
const hueInput = document.getElementById('hue');
const saturationInput = document.getElementById('saturation');
const negativeInput = document.getElementById('negative');
const buttonReset = document.getElementById('button-reset');
const containerTextTop = document.getElementById('container-text-top');
const containerTextBottom = document.getElementById('container-text-bottom');
const topTextCheckbox = document.getElementById('top-text-checkbox');
const bottomTextCheckbox = document.getElementById('bottom-text-checkbox');
const containerMemeImg = document.getElementById('container-meme-img');
const containerMeme = document.getElementById('container-meme');
const backgroundCheckbox = document.getElementById('background-checkbox');
const fontSelector = document.getElementById('font-selector');

const buttonTextHidden = (asideText, asideImage) => {
    asideText.classList.add('hidden');
    asideImage.classList.remove('hidden');
}

const buttonImageHidden = (asideText, asideImage) => {
    asideImage.classList.add('hidden');
    asideText.classList.remove('hidden');
}

const modeLight = (main, header, aside) => {
    body[0].classList.add('body-light');
    main[0].classList.add('main-light');
    header[0].classList.add('header-light');
    aside[0].classList.add('aside-light');
    buttonText.classList.add('button-light');
    buttonImage.classList.add('button-light');
    buttonModeDark.classList.add('hidden');
    buttonModeLight.classList.remove('hidden');
}

const modeDark = (main, header, aside) => {
    body[0].classList.remove('body-light');
    main[0].classList.remove('main-light');
    header[0].classList.remove('header-light');
    aside[0].classList.remove('aside-light');
    buttonText.classList.remove('button-light');
    buttonImage.classList.remove('button-light');
    buttonModeLight.classList.add('hidden');
    buttonModeDark.classList.remove('hidden');
}

const imageMeme = (url, imgMeme) => {
    imgMeme.style.backgroundImage = `url("${url.value}")`;
}

const backgroundColorImg = (e) => {
    imgMeme.style.backgroundColor = e.target.value;
}

const nameColorBackgroundImg = (e) => {
    span[0].innerText = e.target.value.toUpperCase();
} 

const lettersColor = (e) => {
    topText.style.color = e.target.value;
    bottomText.style.color = e.target.value;
}

const nameColorLetters = (e) => {
    span[1].innerText = e.target.value.toUpperCase();
}

const backgroundColorText = (e) => {
    containerTextTop.style.backgroundColor = e.target.value;
    containerTextBottom.style.backgroundColor = e.target.value;
}

const nameColorBackgroundText = (e) => {
    span[2].innerText = e.target.value.toUpperCase();
}

const filters = () => {
    imgMeme.style.filter = `brightness(${brightInput.value}) opacity(${opacityInput.value}) contrast(${contrastInput.value}%) blur(${blurInput.value}px) grayscale(${graysInput.value}%) sepia(${sepiaInput.value}%) hue-rotate(${hueInput.value}deg) saturate(${saturationInput.value}%) invert(${negativeInput.value})`;
}

const resetFilters = () => {
    imgMeme.style.filter = `brightness(1) opacity(1) contrast(100%) blur(0px) grayscale(0%) sepia(1%) hue-rotate(0deg) saturate(100%) invert(0)`;
}

const fontSize = () => {
    topText.style.fontSize = `${fontSizeInput.value}px`;
    bottomText.style.fontSize = `${fontSizeInput.value}px`;
}

const hiddenText = () => {
    if (topTextCheckbox.checked && bottomTextCheckbox.checked) {
        containerMemeImg.style.height = '605px';
        containerTextTop.classList.add('hidden');
        containerTextBottom.classList.add('hidden');
    } else {
        if (topTextCheckbox.checked) {
            containerTextTop.classList.add('hidden');
            containerTextBottom.classList.remove('hidden');
            containerMemeImg.style.height = '490px';
        } else if (bottomTextCheckbox.checked) {
            containerTextBottom.classList.add('hidden');
            containerTextTop.classList.remove('hidden');
            containerMemeImg.style.height = '490px';
        } else {
            containerTextBottom.classList.remove('hidden');
            containerTextTop.classList.remove('hidden');
            containerMemeImg.style.height = '375px';
        }
    }
}

const downloadMeme = () => {
    domtoimage.toBlob(containerMeme).then(function (blob) {
    window.saveAs(blob, "mi-meme.png");
    });
};

const transparentCheckbox = () => {
    if (backgroundCheckbox.checked) {
        containerMemeImg.style.height = '605px';
        containerTextTop.style.position = 'absolute';
        containerTextBottom.style.position = 'absolute';
        containerTextTop.style.width = '100%';
        containerTextBottom.style.width = '100%';
        containerTextBottom.style.bottom = '0px';
        containerTextTop.style.backgroundColor = 'transparent';
        containerTextBottom.style.backgroundColor = 'transparent';
        if (topTextCheckbox.checked && bottomTextCheckbox.checked) {
            containerMemeImg.style.height = '605px';
        } else {
            if (topTextCheckbox.checked) {
                containerMemeImg.style.height = '605px';
            } else if (bottomTextCheckbox.checked) {
                containerMemeImg.style.height = '605px';
            } else {
                containerMemeImg.style.height = '605px';
            }
        }
    } else {
        containerMemeImg.style.height = '375px';
        containerTextTop.style.position = 'static';
        containerTextBottom.style.position = 'static';
        containerTextTop.style.backgroundColor = backgroundLetters.value;
        containerTextBottom.style.backgroundColor = backgroundLetters.value;
    }
}

const changeFont = () => {
topText.style.fontFamily = fontSelector.value;
bottomText.style.fontFamily = fontSelector.value;
}

buttonText.addEventListener('click', () => buttonImageHidden(asideText, asideImage));
buttonImage.addEventListener('click', () => buttonTextHidden(asideText, asideImage));
buttonModeDark.addEventListener('click', () => modeLight(main, header, aside));
buttonModeLight.addEventListener('click', () => modeDark(main, header, aside));
url.addEventListener("input", () => imageMeme(url, imgMeme));
colorContainerImg.addEventListener('input', (e) => backgroundColorImg(e));
colorContainerImg.addEventListener('input', (e) => nameColorBackgroundImg(e));
colorLetters.addEventListener('input', (e) => lettersColor(e));
colorLetters.addEventListener('input', (e) => nameColorLetters(e));
backgroundLetters.addEventListener('input', (e) => backgroundColorText(e));
backgroundLetters.addEventListener('input', (e) => nameColorBackgroundText(e));
brightInput.addEventListener('input', () => filters());
opacityInput.addEventListener('input', () => filters ());
contrastInput.addEventListener('input', () => filters());
blurInput.addEventListener('input', () => filters());
graysInput.addEventListener('input', () => filters());
sepiaInput.addEventListener('input', () => filters());
hueInput.addEventListener('input', () => filters());
saturationInput.addEventListener('input', () => filters());
negativeInput.addEventListener('input', () => filters());
buttonReset.addEventListener('click', () => resetFilters());
fontSizeInput.addEventListener('input', () => fontSize());
topTextCheckbox.addEventListener('change', () => hiddenText());
bottomTextCheckbox.addEventListener('change', () => hiddenText());
buttonDownload.addEventListener("click", () => downloadMeme());
backgroundCheckbox.addEventListener('change', () => transparentCheckbox());
backgroundLetters.addEventListener('input', () => transparentCheckbox());
topTextCheckbox.addEventListener('change', () => transparentCheckbox());
bottomTextCheckbox.addEventListener('change', () => transparentCheckbox());
fontSelector.addEventListener('change', () => changeFont());

inputTopText.oninput = () => {
    topText.innerText = `${inputTopText.value}`;
}

inputBottomText.oninput = () => {
    bottomText.innerText = `${inputBottomText.value}`;
}
