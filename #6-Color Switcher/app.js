var switchBtn = document.querySelector('.switch');
var pColor = document.querySelector('.color');
var body = document.body;

switchBtn.addEventListener('click',switchColor);

function switchColor(){
    let r = getRandomNumber();
    let g = getRandomNumber();
    let b = getRandomNumber();
    var color = `RGB(${r},${g},${b})`;
    body.style.backgroundColor = color;
    pColor.innerText = color;
}

function getRandomNumber(){
    return Math.floor(Math.random() * 256);
}