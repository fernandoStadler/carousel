let bntNext = document.getElementById("forward")
let bntBack = document.getElementById("backward")
let carousel = document.querySelector(".caroucel-img");
let count = 9;

function setNewImage() {
    count++;
    if (count > 9) {
        count = 0;
    }
    let retorno = `url(assets/imgs/${count}.jpg)`;
    carousel.style.background = retorno;
    console.log(retorno);
}
setInterval(setNewImage, 3500);

function nextImg() {
    count++;
    if (count == 10) {
        count = 0;
    }
    let retorno = `url(assets/imgs/${count}.jpg)`;
    carousel.style.background = retorno;
}
function backImg() {
    count--;
    if (count == -1) {
        count = 9;
    }

    let retorno = `url(assets/imgs/${count}.jpg)`;
    carousel.style.background = retorno;
}
bntNext.onclick = nextImg;
bntBack.onclick = nextImg;
