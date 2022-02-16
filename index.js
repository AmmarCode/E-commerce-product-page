document.addEventListener("DOMContentLoaded", () => {
    let expandImg = document.getElementById("expandedImg");
    if (! expandImg.src) {
        expandImg.src = "./images/image-product-1.jpg"
    }

    const next = document.getElementsByClassName('next');
    const previous = document.getElementsByClassName('previous');

    next.addEventListener('click', (e) => {
        expandImg.src = `./images/`
    })


})

function expandImg(imgs) {
    let expandImg = document.getElementById("expandedImg");
    expandImg.src = imgs.src;
    expandImg.parentElement.style.display = "block";
  }

