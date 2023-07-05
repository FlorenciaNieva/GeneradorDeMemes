const body = document.getElementsByTagName('body');
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
const containerTextTop = document.getElementById('container-text-top');
const containerTextBottom = document.getElementById('container-text-bottom');
const superiorHidden = document.getElementById('superior-hidden');
const lowerHidden = document.getElementById('lower-hidden');
const colorContainerImg = document.getElementById('container-meme-color');
const colorLetters = document.getElementById('color-letter');
const backgroundLetters = document.getElementById('color-letter-background');
const span = document.getElementsByTagName('span');

const buttonTextHidden = (asideText, asideImage) => {
    asideText.classList.add('hidden');
    asideImage.classList.remove('hidden');
}

const buttonImageHidden = (asideText, asideImage) => {
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

const meme = (url, imgMeme) => {
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
    topText.style.backgroundColor = e.target.value;
    bottomText.style.backgroundColor = e.target.value;
}

const nameColorBackgroundText = (e) => {
    span[2].innerText = e.target.value.toUpperCase();
}

buttonText.addEventListener('click', () => buttonImageHidden(asideText, asideImage));
buttonImage.addEventListener('click', () => buttonTextHidden(asideText, asideImage));
buttonModeDark.addEventListener('click', () => modeLight(body, header, aside));
buttonModeLight.addEventListener('click', () => modeDark(body, header, aside));
url.addEventListener("input", () => meme(url, imgMeme));
colorContainerImg.addEventListener('input', (e) => backgroundColorImg(e));
colorContainerImg.addEventListener('input', (e) => nameColorBackgroundImg(e));
colorLetters.addEventListener('input', (e) => lettersColor(e));
colorLetters.addEventListener('input', (e) => nameColorLetters(e));
backgroundLetters.addEventListener('input', (e) => backgroundColorText(e));
backgroundLetters.addEventListener('input', (e) => nameColorBackgroundText(e));

inputTopText.oninput = () => {
    topText.innerText = `${inputTopText.value}`;
}

inputBottomText.oninput = () => {
    bottomText.innerText = `${inputBottomText.value}`;
}