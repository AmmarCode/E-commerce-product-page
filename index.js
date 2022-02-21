document.addEventListener("DOMContentLoaded", () => {
  // --------------Images------------------
  let expandImg = document.getElementById("expandedImg");
  const next = document.getElementById("next");
  const previous = document.getElementById("previous");
  const images = document.querySelectorAll(".thumbnail-img");

	// Set the main product image
  if (!expandImg.src) {
    expandImg.src = "./images/image-product-1.jpg";
  }

	// Loop through thumbnail images
  images.forEach((img) => {
    img.addEventListener("click", () => {
			// set the main product image.src to the current image.src
			expandImg.src = img.src;
			// Remove the active class from previous image and active class to the current image
			let current = document.getElementsByClassName('active');
			current[0].className = current[0].className.replace(" active", "");
			img.classList.add('active');
    });
  });

	// Set Event listener for the next button to view next product image
  next.addEventListener("click", () => {
    currentImg = expandImg.src;
    let i = 0;
    while (i < images.length - 1) {
      if (currentImg === images[i].src) {
        expandImg.src = images[i + 1].src;
      }
      i++;
    }
  });

	// Set Event listener for the previous button to view previous product image
  previous.addEventListener("click", () => {		
    currentImg = expandImg.src;
    let i = images.length - 1;
    while (i > 0) {
      if (currentImg === images[i].src) {
        expandImg.src = images[i - 1].src;
      }
      i--;
    }
  });

	// ---------------------------Add to Cart controls--------------------
	const cartIncrement = document.getElementById('cart-increment');
	const cartDecrement = document.getElementById('cart-decrement');
	let inCartNum = document.getElementById('in-cart-number');
	const addToCart = document.getElementById('add-to-cart');
	let cartBadge = document.getElementById('cart-badge');
	const numOfProductInCart = document.querySelector('.num-in-cart-badge');
	const productPrice = 125.00;
	const totalPrice = document.querySelector('.total-price');


	// Increase number of items to add to cart
	cartIncrement.addEventListener('click', () => {
		if(parseInt(inCartNum.textContent) < 20) {
			inCartNum.textContent =  parseInt(inCartNum.textContent) + 1
		}		
	})

	// decrease number of items to add to cart
	cartDecrement.addEventListener('click', () => {
		if (parseInt(inCartNum.textContent) > 0) {
			inCartNum.textContent =  parseInt(inCartNum.textContent) - 1
		}
	})

	// remove cart badge if cart is empty
	if (parseInt(inCartNum.textContent) === 0) {
		cartBadge.style.display = "none"
	}

	// add items to cart
	addToCart.addEventListener('click', () => {
		if (parseInt(inCartNum.textContent) > 0){
			cartBadge.style.display = "block"
			cartBadge.textContent = parseInt(cartBadge.textContent) + parseInt(inCartNum.textContent);
			numOfProductInCart.textContent = cartBadge.textContent;
			totalPrice.textContent = ` $${(parseFloat(productPrice) * parseFloat(numOfProductInCart.textContent)).toFixed(2)}`;
		}
		inCartNum.textContent = 0;
	})

// ----------------------Shopping Cart content--------------------
	const shoppingCart = document.getElementById('shopping-cart');
	const cartContentContainer = document.querySelector('.cart-content-container');
	const emptyCart = document.querySelector('.empty-cart');
	const inCartProduct = document.querySelector('.cart-content-details');
	const deleteIcon = document.querySelector('.delete-icon');


	const toggleActiveCartContainer = () => {
		cartContentContainer.classList.toggle('active-cart');
	}

	const toggleActiveEmptyCart = () => {
		emptyCart.classList.toggle('active-cart');
	}

	const toggleActiveInCartProduct = () => {
		inCartProduct.classList.toggle('active-cart')
	}

	shoppingCart.addEventListener('click', () => {
		toggleActiveCartContainer()

		if (parseInt(cartBadge.textContent) > 0 ) {
			toggleActiveInCartProduct()
		} else {
			toggleActiveEmptyCart()
		}
	})

	deleteIcon.addEventListener('click', () => {
		cartBadge.textContent = 0;
		cartBadge.style.display = "none"
		toggleActiveInCartProduct()
		toggleActiveEmptyCart()
	})


});
