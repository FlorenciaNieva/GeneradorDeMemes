const body = document.getElementsByTagName('body');
const header = document.getElementsByTagName('header');
const aside = document.getElementsByTagName('aside');
const buttonImage = document.getElementById('button-image');
const buttonText = document.getElementById('button-text');
const buttonModeDark = document.getElementById('button-mode-dark');
const buttonModeLight = document.getElementById('button-mode-light');
const topText = document.getElementById('top-text');
const bottomText = document.getElementById('bottom-text');
const buttonDownload = document.getElementById('button-download');
const asideImage = document.getElementById('aside-image');
const asideText = document.getElementById('aside-text');
const url = document.getElementById('url-image');
const imageMeme = document.getElementById('image-meme')


const textHidden = (asideText, asideImage) => {
    asideText.classList.add('hidden');
    asideImage.classList.remove('hidden');
}

const imageHidden = (asideText, asideImage) => {
    asideImage.classList.add('hidden');
    asideText.classList.remove('hidden');
}

const modeLight = (body, header, aside) => {
    body[0].classList.add('body-light');
    header[0].classList.add('header-light');
    aside[0].classList.add('aside-light');
    buttonText.classList.add('button-light');
    buttonImage.classList.add('button-light');
    buttonModeDark.setAttribute('class', 'hidden');
    buttonModeLight.classList.remove('hidden');
    buttonModeLight.setAttribute('class', 'button-header button-light');
}

const modeDark = (body, header, aside) => {
    body[0].classList.remove('body-light');
    header[0].classList.remove('header-light');
    aside[0].classList.remove('aside-light');
    buttonText.classList.remove('button-light');
    buttonImage.classList.remove('button-light');
    buttonModeLight.setAttribute('class', 'hidden');
    buttonModeDark.classList.remove('hidden');
    buttonModeDark.setAttribute('class', 'button-header button-dark');
}


buttonText.addEventListener('click', () => imageHidden(asideText, asideImage));
buttonImage.addEventListener('click', () => textHidden(asideText, asideImage));
buttonModeDark.addEventListener('click', () => modeLight(body, header, aside));
buttonModeLight.addEventListener('click', () => modeDark(body, header, aside));