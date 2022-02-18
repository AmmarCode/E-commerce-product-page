document.addEventListener("DOMContentLoaded", () => {
  let expandImg = document.getElementById("expandedImg");
  const next = document.getElementById("next");
  const previous = document.getElementById("previous");
  const images = document.querySelectorAll(".thumbnail-img");

  if (!expandImg.src) {
    expandImg.src = "./images/image-product-1.jpg";
  }

  images.forEach((img) => {
    img.addEventListener("click", () => {
      expandImg.src = img.src;
      expandImg.parentElement.style.display = "block";
    });
  });

  next.addEventListener("click", () => {
      currentImg = expandImg.src;
      let i = 0
    while (i < images.length - 1) {
      if (currentImg === images[i].src) {
        expandImg.src = images[i+1].src
      }
      i++
    }
  });

  previous.addEventListener("click", () => {
    currentImg = expandImg.src;
    let i = images.length - 1;
    while (i > 0) {
        if (currentImg === images[i].src) {
            expandImg.src = images[i-1].src
          }
          i--
    }
    // for (let i = images.length - 1; i > -1; i--) {
    //     console.log(i)
    //     if (currentImg === images[i].src) {
    //       console.log(images[i].src)
    //       expandImg.src = images[i-1].src
    //       console.log(expandImg.src)
    //     }
    //   }
  });
});
