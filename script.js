const body = document.getElementsByTagName('body');
const main = document.getElementsByTagName('main');
const header = document.getElementsByTagName('header');
const aside = document.getElementsByTagName('aside');
const buttonImage = document.getElementById('button-image');
const buttonText = document.getElementById('button-text');
const buttonModeDark = document.getElementById('button-mode-dark');
const buttonModeLight = document.getElementById('button-mode-light');
const containerMeme = document.getElementById('container-meme');
const containerMemeImg = document.getElementById('container-meme-img');
const imgMeme = document.getElementById('image-meme');
const containerTextTop = document.getElementById('container-text-top');
const containerTextBottom = document.getElementById('container-text-bottom');
const topText = document.getElementById('top-text');
const bottomText = document.getElementById('bottom-text');
const buttonDownload = document.getElementById('button-download');
const asideImage = document.getElementById('aside-image');
const asideText = document.getElementById('aside-text');
const buttonCloseImage = document.getElementById('button-close-image');
const buttonCloseText = document.getElementById('button-close-text');
const url = document.getElementById('url-image');
const colorContainerImg = document.getElementById('container-meme-color');
const span = document.getElementsByTagName('span');
const mixColor = document.getElementById('mix-color');
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
const inputTopText = document.getElementById('textareaTop');
const inputBottomText = document.getElementById('textareaBottom');
const topTextCheckbox = document.getElementById('top-text-checkbox');
const bottomTextCheckbox = document.getElementById('bottom-text-checkbox');
const fontSelect = document.getElementById('font-select');
const fontSizeInput = document.getElementById('font-size-input');
const buttonStart = document.getElementById('button-star');
const buttonCenter = document.getElementById('button-center');
const buttonEnd = document.getElementById('button-end');
const colorLetters = document.getElementById('color-letter');
const backgroundLetters = document.getElementById('color-letter-background');
const transparentCheckbox = document.getElementById('transparent-checkbox');
const buttonNone = document.getElementById('button-none');
const buttonLight = document.getElementById('button-light');
const buttonDark = document.getElementById('button-dark');
const spacingInput = document.getElementById('spacing-input');
const lineSelect = document.getElementById('line-height-select');

const buttonTextHidden = () => {
    asideText.classList.add('hidden');
    asideImage.classList.remove('hidden');
}

const buttonImageHidden = () => {
    asideImage.classList.add('hidden');
    asideText.classList.remove('hidden');
}

const modeLight = () => {
    body[0].classList.add('body-light');
    main[0].classList.add('main-light');
    header[0].classList.add('header-light');
    aside[0].classList.add('aside-light');
    buttonText.classList.add('button-light');
    buttonImage.classList.add('button-light');
    buttonModeDark.classList.add('hidden');
    buttonModeLight.classList.remove('hidden');
    buttonCloseText.style.color = '#626262';
    buttonCloseImage.style.color = '#626262';
}

const modeDark = () => {
    body[0].classList.remove('body-light');
    main[0].classList.remove('main-light');
    header[0].classList.remove('header-light');
    aside[0].classList.remove('aside-light');
    buttonText.classList.remove('button-light');
    buttonImage.classList.remove('button-light');
    buttonModeLight.classList.add('hidden');
    buttonModeDark.classList.remove('hidden');
    buttonCloseText.style.color = 'white';
    buttonCloseImage.style.color = 'white';
}

const downloadMeme = () => {
    domtoimage.toBlob(containerMeme).then(function (blob) {
    window.saveAs(blob, "mi-meme.png");
    });
}

const asideHidden = () => {
    aside[0].classList.add('hidden');
}

const asideVisible = () => {
    aside[0].classList.remove('hidden');
    aside[0].classList.remove('aside-hidden');
}

const imageMeme = () => {
    imgMeme.style.backgroundImage = `url("${url.value}")`;
}

const backgroundColorImg = () => {
    imgMeme.style.backgroundColor = colorContainerImg.value;
    span[0].innerText = colorContainerImg.value.toUpperCase();
}

const mixingColors = () => {
    imgMeme.style.backgroundBlendMode = mixColor.value;
}

const filters = () => {
    imgMeme.style.filter = `brightness(${brightInput.value}) opacity(${opacityInput.value}) contrast(${contrastInput.value}%) blur(${blurInput.value}px) grayscale(${graysInput.value}%) sepia(${sepiaInput.value}%) hue-rotate(${hueInput.value}deg) saturate(${saturationInput.value}%) invert(${negativeInput.value})`;
}

const resetFilters = () => {
    imgMeme.style.filter = `brightness(1) opacity(1) contrast(100%) blur(0px) grayscale(0%) sepia(1%) hue-rotate(0deg) saturate(100%) invert(0)`;
}

inputTopText.oninput = () => {
    topText.innerText = `${inputTopText.value}`;
}

inputBottomText.oninput = () => {
    bottomText.innerText = `${inputBottomText.value}`;
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

const checkboxTexts = () => {
    if (transparentCheckbox.checked) {
        containerMemeImg.style.height = '500px';
        containerTextTop.style.position = 'absolute';
        containerTextBottom.style.position = 'absolute';
        containerTextTop.style.width = '100%';
        containerTextBottom.style.width = '100%';
        containerTextBottom.style.bottom = '0px';
        containerTextTop.style.backgroundColor = 'transparent';
        containerTextBottom.style.backgroundColor = 'transparent';
        if (topTextCheckbox.checked && bottomTextCheckbox.checked) {
            containerMemeImg.style.height = '500px';
        } else {
            if (topTextCheckbox.checked) {
                containerMemeImg.style.height = '500px';
            } else if (bottomTextCheckbox.checked) {
                containerMemeImg.style.height = '500px';
            } else {
                containerMemeImg.style.height = '500px';
            }
        }
    } else {
        containerMemeImg.style.height = '300px';
        containerTextTop.style.position = 'static';
        containerTextBottom.style.position = 'static';
        containerTextTop.style.backgroundColor = backgroundLetters.value;
        containerTextBottom.style.backgroundColor = backgroundLetters.value;
        if (topTextCheckbox.checked && bottomTextCheckbox.checked) {
            containerMemeImg.style.height = '500px';
        } else {
            if (topTextCheckbox.checked) {
                containerMemeImg.style.height = '400px';
            } else if (bottomTextCheckbox.checked) {
                containerMemeImg.style.height = '400px';
            } else {
                containerMemeImg.style.height = '300px';
            }
        }
    }
}

const changeFont = () => {
topText.style.fontFamily = fontSelect.value;
bottomText.style.fontFamily = fontSelect.value;
}

const fontSize = () => {
    topText.style.fontSize = `${fontSizeInput.value}px`;
    bottomText.style.fontSize = `${fontSizeInput.value}px`;
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

const lineHeight = () => {
    topText.style.lineHeight = lineSelect.value;
    bottomText.style.lineHeight = lineSelect.value;
}

buttonImage.addEventListener('click', () => buttonTextHidden());
buttonText.addEventListener('click', () => buttonImageHidden());
buttonModeLight.addEventListener('click', () => modeDark());
buttonModeDark.addEventListener('click', () => modeLight());
buttonDownload.addEventListener("click", () => downloadMeme());
buttonCloseImage.addEventListener('click', () => asideHidden());
buttonCloseText.addEventListener('click', () => asideHidden());
buttonImage.addEventListener('click', () => asideVisible());
buttonText.addEventListener('click', () => asideVisible());
url.addEventListener("input", () => imageMeme());
colorContainerImg.addEventListener('input', () => backgroundColorImg());
mixColor.addEventListener('change', () => mixingColors());
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
topTextCheckbox.addEventListener('change', () => hiddenText());
bottomTextCheckbox.addEventListener('change', () => hiddenText());
transparentCheckbox.addEventListener('change', () => checkboxTexts());
backgroundLetters.addEventListener('input', () => checkboxTexts());
topTextCheckbox.addEventListener('change', () => checkboxTexts());
bottomTextCheckbox.addEventListener('change', () => checkboxTexts());
fontSelect.addEventListener('change', () => changeFont());
fontSizeInput.addEventListener('input', () => fontSize());
buttonStart.addEventListener('click', () => justifyStart());
buttonCenter.addEventListener('click', () => justifyCenter());
buttonEnd.addEventListener('click', () => justifyEnd());
colorLetters.addEventListener('input', (e) => lettersColor(e));
backgroundLetters.addEventListener('input', () => backgroundColorText());
buttonNone.addEventListener('click', () => shadowNone());
buttonLight.addEventListener('click', () => shadowLight());
buttonDark.addEventListener('click', () => shadowDark());
spacingInput.addEventListener('input', () => padding());
lineSelect.addEventListener('change', () => lineHeight());