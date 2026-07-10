// ================================
// NEO STORE MAIN JAVASCRIPT
// Works with all pages
// ================================


// ================================
// MOBILE MENU
// ================================

const menuBtn = document.getElementById("menuBtn");
const navLinks = document.getElementById("navLinks");


if(menuBtn && navLinks){

menuBtn.addEventListener("click",()=>{

navLinks.classList.toggle("active");

menuBtn.classList.toggle("open");

});

}



// Close menu when link clicked

document.querySelectorAll(".nav-links a")
.forEach(link=>{

link.addEventListener("click",()=>{

if(navLinks){

navLinks.classList.remove("active");

}

});

});




// ================================
// DARK / LIGHT THEME
// ================================


const themeBtn = document.getElementById("themeBtn");


if(themeBtn){


let savedTheme = localStorage.getItem("theme");


if(savedTheme==="dark"){

document.body.classList.add("dark-mode");

themeBtn.textContent="☀️";

}



themeBtn.addEventListener("click",()=>{


document.body.classList.toggle("dark-mode");



if(document.body.classList.contains("dark-mode")){


localStorage.setItem("theme","dark");

themeBtn.textContent="☀️";


}else{


localStorage.setItem("theme","light");

themeBtn.textContent="🌙";


}


});


}



// ================================
// SCROLL TO TOP
// ================================


const scrollBtn=document.getElementById("scrollTopBtn");


if(scrollBtn){


window.addEventListener("scroll",()=>{


if(window.scrollY>400){

scrollBtn.classList.add("show");

}else{

scrollBtn.classList.remove("show");

}


});


scrollBtn.addEventListener("click",()=>{


window.scrollTo({

top:0,

behavior:"smooth"

});


});


}




// ================================
// PASSWORD SHOW / HIDE
// LOGIN + SIGNUP
// ================================


const togglePassword=document.getElementById("togglePassword");


const password=document.getElementById("password");



if(togglePassword && password){


togglePassword.addEventListener("click",()=>{


if(password.type==="password"){


password.type="text";


togglePassword.classList.replace(
"fa-eye",
"fa-eye-slash"
);


}else{


password.type="password";


togglePassword.classList.replace(
"fa-eye-slash",
"fa-eye"
);


}


});


}





// ================================
// PRODUCT IMAGE GALLERY
// product-details.html
// ================================


const mainImage=document.getElementById("mainImage");

const thumbs=document.querySelectorAll(".thumb");


if(mainImage && thumbs.length){


thumbs.forEach(img=>{


img.addEventListener("click",()=>{


mainImage.src=img.src;



thumbs.forEach(t=>{

t.classList.remove("active");

});


img.classList.add("active");


});


});


}




// ================================
// PRODUCT QUANTITY
// CART + DETAILS
// ================================


const plusButtons=document.querySelectorAll(".plus-btn");

const minusButtons=document.querySelectorAll(".minus-btn");



plusButtons.forEach(btn=>{


btn.addEventListener("click",()=>{


let input=btn.parentElement.querySelector("input");


if(input){

input.value++;

}


});


});




minusButtons.forEach(btn=>{


btn.addEventListener("click",()=>{


let input=btn.parentElement.querySelector("input");


if(input && input.value>1){

input.value--;

}


});


});





// ================================
// PRODUCT FILTER SEARCH
// products.html
// ================================


const searchInput=document.getElementById("searchInput");


const products=document.querySelectorAll(".product-card");



if(searchInput && products.length){



searchInput.addEventListener("keyup",()=>{


let value=
searchInput.value.toLowerCase();



products.forEach(product=>{


let name=
product.querySelector("h3")
.textContent
.toLowerCase();



if(name.includes(value)){


product.style.display="block";


}else{


product.style.display="none";


}


});


});


}





// ================================
// FAQ ACCORDION
// contact.html
// ================================


const faqButtons=
document.querySelectorAll(".faq-question");



faqButtons.forEach(btn=>{


btn.addEventListener("click",()=>{


let answer=
btn.nextElementSibling;



answer.classList.toggle("show");



btn.classList.toggle("active");



});


});






// ================================
// PRODUCT WISHLIST
// ================================


const wishlistButtons=
document.querySelectorAll(".wishlist-btn");



wishlistButtons.forEach(btn=>{


btn.addEventListener("click",()=>{


let icon=
btn.querySelector("i");



icon.classList.toggle(
"fa-regular"
);


icon.classList.toggle(
"fa-solid"
);


icon.classList.toggle(
"active"
);



});


});





// ================================
// CART BUTTON
// ================================


const cartButtons=
document.querySelectorAll(".cart-btn");

const cartCount=
document.querySelector(".cart-count");



let cartNumber=0;



cartButtons.forEach(btn=>{


btn.addEventListener("click",()=>{


cartNumber++;


if(cartCount){

cartCount.textContent=cartNumber;

}


btn.innerHTML=
`
<i class="fa-solid fa-check"></i>
Added
`;



setTimeout(()=>{


btn.innerHTML=
`
Add to Cart
`;


},1500);



});


});





// ================================
// CONTACT FORM
// ================================


const contactForm=
document.getElementById("contactForm");



if(contactForm){


contactForm.addEventListener("submit",(e)=>{


e.preventDefault();



alert(
"Message sent successfully! We will reply soon."
);



contactForm.reset();


});


}




// ================================
// LOGIN FORM
// ================================


const loginForm=
document.getElementById("loginForm");



if(loginForm){


loginForm.addEventListener("submit",(e)=>{


e.preventDefault();



alert(
"Login successful!"
);



window.location.href="index.html";



});


}





// ================================
// NEWSLETTER FORMS
// ================================


const newsletterForms=
document.querySelectorAll(".newsletter-form");



newsletterForms.forEach(form=>{


form.addEventListener("submit",(e)=>{


e.preventDefault();



alert(
"Thanks for subscribing to NeoStore!"
);



form.reset();


});


});





// ================================
// REVEAL ANIMATION
// ================================


const revealElements=
document.querySelectorAll(
".product-card,.value-card,.team-card,.why-card,.testimonial-card"
);



window.addEventListener("scroll",()=>{


revealElements.forEach(el=>{


let position=
el.getBoundingClientRect().top;



if(position < window.innerHeight - 100){


el.classList.add("show");


}


});


});




// ================================
// CURRENT YEAR FOOTER
// ================================


const year=
document.querySelector(".footer-bottom p");



if(year){

year.innerHTML=
`
© ${new Date().getFullYear()} NeoStore. All Rights Reserved.
`;

}
// =================================
// NEO STORE LOCAL STORAGE CART
// =================================



let cart =
JSON.parse(localStorage.getItem("cart")) || [];




// UPDATE CART COUNT EVERY PAGE

function updateCartCount(){

let count =
document.querySelector(".cart-count");


if(count){

count.textContent =
cart.reduce(
(total,item)=> total + item.quantity,
0
);

}

}


updateCartCount();





// =================================
// ADD PRODUCT TO CART
// =================================


const addButtons =
document.querySelectorAll(".cart-btn");



addButtons.forEach(button=>{


button.addEventListener("click",()=>{


let card =
button.closest(".product-card");



let product={

name:
card.querySelector("h3").textContent,


price:
card.querySelector(".price")
.textContent
.replace("$","")
.split(" ")[0],


image:
card.querySelector("img").src,


quantity:1

};




// CHECK IF PRODUCT EXISTS


let existing =
cart.find(
item=>item.name===product.name
);



if(existing){


existing.quantity++;


}else{


cart.push(product);


}




localStorage.setItem(
"cart",
JSON.stringify(cart)
);



updateCartCount();



alert(
product.name+" added to cart"
);



});


});






// ==============================
// PRODUCT DETAILS SYSTEM
// ==============================


const products = {


laptop:{
name:"NeoBook Pro X",
price:"1199",
oldPrice:"1399",
image:"images/products/laptop.jpg",
description:
"Powerful laptop with premium design, fast performance and long battery life.",
rating:"★★★★★",
stock:"In Stock"
},


phone:{
name:"Galaxy Ultra",
price:"899",
oldPrice:"999",
image:"images/products/phone.jpg",
description:
"High performance smartphone with amazing camera and powerful processor.",
rating:"★★★★★",
stock:"In Stock"
},


headphones:{
name:"NeoPods Max",
price:"249",
oldPrice:"",
image:"images/products/headphones.jpg",
description:
"Premium wireless headphones with noise cancellation and deep bass.",
rating:"★★★★☆",
stock:"In Stock"
},


watch:{
name:"NeoWatch Pro",
price:"349",
oldPrice:"",
image:"images/products/smartwatch.jpg",
description:
"Smart watch with fitness tracking and modern features.",
rating:"★★★★★",
stock:"In Stock"
},


camera:{
name:"NeoCam 4K",
price:"699",
oldPrice:"",
image:"images/products/camera.jpg",
description:
"Professional 4K camera for photography and video creation.",
rating:"★★★★★",
stock:"In Stock"
},


keyboard:{
name:"Mechanical Keyboard",
price:"129",
oldPrice:"",
image:"images/products/keyboard.jpg",
description:
"RGB mechanical keyboard designed for gamers and programmers.",
rating:"★★★★☆",
stock:"In Stock"
},


mouse:{
name:"Gaming Mouse",
price:"79",
oldPrice:"",
image:"images/products/mouse.jpg",
description:
"High precision gaming mouse with adjustable DPI.",
rating:"★★★★★",
stock:"In Stock"
},


speaker:{
name:"Bluetooth Speaker",
price:"159",
oldPrice:"",
image:"images/products/speaker.jpg",
description:
"Portable speaker with powerful sound and long battery life.",
rating:"★★★★★",
stock:"In Stock"
}


};





// GET PRODUCT NAME FROM URL


let params =
new URLSearchParams(window.location.search);


let selectedProduct =
params.get("product");



if(selectedProduct && products[selectedProduct]){


let product =
products[selectedProduct];



// CHANGE DETAILS PAGE CONTENT


document.querySelector(".product-info h1")
.textContent =
product.name;



document.querySelector(".product-info h2")
.innerHTML =
`$${product.price}
<span>$${product.oldPrice}</span>`;



document.querySelector(".product-info p")
.textContent =
product.description;



document.querySelector(".main-image img")
.src =
product.image;



document.querySelector(".rating")
.firstChild.textContent =
product.rating;



document.querySelector(".stock")
.innerHTML =
`
<i class="fa-solid fa-circle-check"></i>
${product.stock}
`;



}
// =================================
// DISPLAY CART ITEMS
// =================================


const cartContainer =
document.getElementById("cartItems");



function displayCart(){


if(!cartContainer)
return;



cartContainer.innerHTML="";



cart.forEach((item,index)=>{


cartContainer.innerHTML += `


<div class="cart-item">


<img src="${item.image}">


<div class="item-info">

<h3>${item.name}</h3>

<p>$${item.price}</p>

</div>



<div class="quantity-box">


<button onclick="changeQuantity(${index},-1)">
-
</button>


<input value="${item.quantity}" readonly>


<button onclick="changeQuantity(${index},1)">
+
</button>


</div>



<h4>
$${item.price * item.quantity}
</h4>



<button onclick="removeCart(${index})"
class="remove-btn">

<i class="fa-solid fa-trash"></i>

</button>



</div>


`;


});


}



displayCart();





function changeQuantity(index,value){


cart[index].quantity += value;



if(cart[index].quantity <1){

cart[index].quantity=1;

}



saveCart();


}





function removeCart(index){


cart.splice(index,1);


saveCart();


}





function saveCart(){


localStorage.setItem(
"cart",
JSON.stringify(cart)
);


displayCart();

updateCartCount();


}