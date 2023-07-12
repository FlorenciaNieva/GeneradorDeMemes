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
const mixColor = document.getElementById('mix-color');
const buttonStart = document.getElementById('button-star');
const buttonCenter = document.getElementById('button-center');
const buttonEnd = document.getElementById('button-end');
const buttonNone = document.getElementById('button-none');
const buttonLight = document.getElementById('button-light');
const buttonDark = document.getElementById('button-dark');
const spacingInput = document.getElementById('spacing-input');
const lineSelect = document.getElementById('line-select');

inputTopText.oninput = () => {
    topText.innerText = `${inputTopText.value}`;
}

inputBottomText.oninput = () => {
    bottomText.innerText = `${inputBottomText.value}`;
}

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

const backgroundColorImg = () => {
    imgMeme.style.backgroundColor = colorContainerImg.value;
    span[0].innerText = colorContainerImg.value.toUpperCase();
}

const lettersColor = (e) => {
    topText.style.color = e.target.value;
    bottomText.style.color = e.target.value;
    span[1].innerText = e.target.value.toUpperCase();
}

const backgroundColorText = () => {
    containerTextTop.style.backgroundColor = backgroundLetters.value;
    containerTextBottom.style.backgroundColor = backgroundLetters.value;
    span[2].innerText = backgroundLetters.value.toUpperCase();
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
        containerTextTop.classList.add('hidden');
        containerTextBottom.classList.add('hidden');
    } else {
        if (topTextCheckbox.checked) {
            containerTextTop.classList.add('hidden');
            containerTextBottom.classList.remove('hidden');
        } else if (bottomTextCheckbox.checked) {
            containerTextBottom.classList.add('hidden');
            containerTextTop.classList.remove('hidden');
        } else {
            containerTextBottom.classList.remove('hidden');
            containerTextTop.classList.remove('hidden');
        }
    }
}

const downloadMeme = () => {
    domtoimage.toBlob(containerMeme).then(function (blob) {
    window.saveAs(blob, "mi-meme.png");
    });
};

const checkboxTexts = () => {
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
        if (topTextCheckbox.checked && bottomTextCheckbox.checked) {
            containerMemeImg.style.height = '605px';
        } else {
            if (topTextCheckbox.checked) {
                containerMemeImg.style.height = '490px';
            } else if (bottomTextCheckbox.checked) {
                containerMemeImg.style.height = '490px';
            } else {
                containerMemeImg.style.height = '375px';
            }
        }
    }
}

const changeFont = () => {
topText.style.fontFamily = fontSelector.value;
bottomText.style.fontFamily = fontSelector.value;
}

const mixingColors = () => {
    imgMeme.style.backgroundBlendMode = mixColor.value;
}

const justifyStart = () => {
    containerTextTop.style.justifyContent = 'start';
    containerTextBottom.style.justifyContent = 'start';
}

const justifyCenter = () => {
    containerTextTop.style.justifyContent = 'center';
    containerTextBottom.style.justifyContent = 'center';
}

const justifyEnd = () => {
    containerTextTop.style.justifyContent = 'end';
    containerTextBottom.style.justifyContent = 'end';
}

const shadowNone = () => {
    topText.style.textShadow = 'none';
    bottomText.style.textShadow = 'none';
}

const shadowLight = () => {
    topText.style.textShadow = '0 0 0.2em #FFF, 0 0 0.2em #FFF';
    bottomText.style.textShadow = '0 0 0.2em #FFF, 0 0 0.2em #FFF';
}

const shadowDark = () => {
    topText.style.textShadow = '0 0 0.2em #000, 0 0 0.2em #000';
    bottomText.style.textShadow = '0 0 0.2em #000, 0 0 0.2em #000';
}

const padding = () => {
    containerTextBottom.style.paddingTop = `${spacingInput.value}px`;
    containerTextTop.style.paddingTop = `${spacingInput.value}px`;
    containerTextBottom.style.paddingBottom = `${spacingInput.value}px`;
    containerTextTop.style.paddingBottom = `${spacingInput.value}px`;
}

const lineHight = () => {
    topText.style.lineHeight = lineSelect.value;
    bottomText.style.lineHeight = lineSelect.value;
}

buttonText.addEventListener('click', () => buttonImageHidden(asideText, asideImage));
buttonImage.addEventListener('click', () => buttonTextHidden(asideText, asideImage));
buttonModeDark.addEventListener('click', () => modeLight(main, header, aside));
buttonModeLight.addEventListener('click', () => modeDark(main, header, aside));
url.addEventListener("input", () => imageMeme(url, imgMeme));
colorContainerImg.addEventListener('input', () => backgroundColorImg());
colorLetters.addEventListener('input', (e) => lettersColor(e));
backgroundLetters.addEventListener('input', () => backgroundColorText());
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
backgroundCheckbox.addEventListener('change', () => checkboxTexts());
backgroundLetters.addEventListener('input', () => checkboxTexts());
topTextCheckbox.addEventListener('change', () => checkboxTexts());
bottomTextCheckbox.addEventListener('change', () => checkboxTexts());
fontSelector.addEventListener('change', () => changeFont());
mixColor.addEventListener('change', () => mixingColors());
buttonStart.addEventListener('click', () => justifyStart());
buttonCenter.addEventListener('click', () => justifyCenter());
buttonEnd.addEventListener('click', () => justifyEnd());
buttonNone.addEventListener('click', () => shadowNone());
buttonLight.addEventListener('click', () => shadowLight());
buttonDark.addEventListener('click', () => shadowDark());
spacingInput.addEventListener('input', () => padding());
lineSelect.addEventListener('change', () => lineHight());