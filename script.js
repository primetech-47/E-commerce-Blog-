const menu = document.querySelector('.menu-btn-box');
const blink = document.querySelector('.blink');
const blinks = document.querySelector('.blinks');
const blinkss = document.querySelector('.blinkss');
const blinksss = document.querySelector('.blinksss');
const navLinks = document.querySelectorAll('.link');
const navClose = document.querySelector('.nav-close');
const loginWrappers = document.querySelectorAll('.signup-wrapper');
const register = document.querySelector('.register');
const cartWrappers = document.querySelectorAll('.cart-wrapper');
const cartCloseBtn = document.querySelector('.cart-close-btn');
const fastCarts = document.querySelectorAll('.fast-cart');
const quickClose = document.querySelector('.quick-close');
const hearts = document.querySelectorAll('.heart');
const modals = document.querySelectorAll('.modal');
const ending = document.querySelector('.ending');
const closeHearts = document.querySelectorAll('.close-heart');
const slider = document.querySelector('.slider');
const news = document.querySelector('.news');
const compares = document.querySelectorAll('.compare');
const closeCompares = document.querySelectorAll('.close-compare');
const submit = document.querySelector('.submit');

const popupViews = document.querySelectorAll('.popupView');
const shows = document.querySelectorAll('.show');
const closeShows = document.querySelectorAll('.close-show');




function scrollt() {
   const scrollTop = document.querySelector('.scroll-top');
   window.scrollTo(0, 0)
}


menu.addEventListener('click', ()=>{
   document.body.classList.toggle('end');
   document.body.style.overflow=document.body.style.overflow=='hidden' ? 'auto':'hidden'
});
 blink.addEventListener('click', ()=>{
   document.body.classList.toggle('appear');
  
 
});
blinks.addEventListener('click', ()=>{
   document.body.classList.toggle('appears');
  
 
});
blinkss.addEventListener('click', ()=>{
   document.body.classList.toggle('appearss');
  
 
});
blinksss.addEventListener('click', ()=>{
   document.body.classList.toggle('appearsss');
  
 
});


navLinks.forEach(link =>{
   link.addEventListener('click', ()=>{
   document.body.classList.add('end');
   document.body.style.overflow='initial'   
  
   })
});


navClose.addEventListener('click', ()=>{
   document.body.classList.remove('end');
   document.body.style.overflow='initial'  
});
loginWrappers.forEach(loginWrapper =>{
   loginWrapper.addEventListener('click', ()=>{
   document.body.classList.add('open');
   })
});
register.addEventListener('click', ()=>{
   document.body.classList.remove('open');
});
cartWrappers.forEach(cartWrapper =>{
   cartWrapper.addEventListener('click', ()=>{
   document.body.classList.add('close');
   })
});

cartCloseBtn.addEventListener('click', ()=>{
   document.body.classList.remove('close');
});
fastCarts.forEach(fastCart =>{
   fastCart.addEventListener('click', ()=>{
   document.body.classList.add('flash');
   })
});

quickClose.addEventListener('click', ()=>{
   document.body.classList.remove('flash');
});
hearts.forEach(heart =>{
   heart.addEventListener('click', ()=>{
   document.body.classList.add('wish');
   document.body.style.overflow='initial'   
  
   })
});
modals.forEach(modal =>{
   modal.addEventListener('click', ()=>{
   document.body.classList.toggle('case');
   document.body.style.overflow='initial'   
  
   })
});
ending.addEventListener('click', ()=>{
   document.body.classList.remove('case');
});
closeHearts.forEach(closeHeart =>{
   closeHeart.addEventListener('click', ()=>{
   document.body.classList.remove('wish');
   document.body.style.overflow='initial'   
  
   })
});
slider.addEventListener('click', ()=>{
   document.body.classList.add('activate');
});
news.addEventListener('click', ()=>{
   document.body.classList.add('popoff');
});

compares.forEach(compare =>{
   compare.addEventListener('click', ()=>{
   document.body.classList.add('sync');
   document.body.style.overflow='initial'   
  
   })
});
closeCompares.forEach(closeCompare =>{
   closeCompare.addEventListener('click', ()=>{
   document.body.classList.remove('sync');
   document.body.style.overflow='initial'   
  
   })
});

submit.addEventListener('click', ()=>{
   document.body.classList.add('popout');
});

popupViews.forEach(popupView =>{
   popupView.addEventListener('click', ()=>{
       document.body.classList.add('pop')
   });
})

shows.forEach(show =>{
   show.addEventListener('click', ()=>{
       document.body.classList.add('pop')
   });
})


closeShows.forEach(closeShow =>{
   closeShow.addEventListener('click', ()=>{
       document.body.classList.remove('pop')
   });
})


let preveiwContainer = document.querySelector('.products-preview');
let previewBox = preveiwContainer.querySelectorAll('.preview');

document.querySelectorAll('.products-container .product .quick').forEach(quick =>{
  quick.onclick = () =>{
    preveiwContainer.style.display = 'flex';
    let name = quick.getAttribute('data-name');
    previewBox.forEach(preview =>{
      let target = preview.getAttribute('data-target');
      if(name == target){
        preview.classList.add('active');
      }
    });
  };
});

previewBox.forEach(close =>{
  close.querySelector('.fa-times').onclick = () =>{
    close.classList.remove('active');
    preveiwContainer.style.display = 'none';
  };
});

const bigDeal = document.getElementById("big-deal");
const smallDeal = document.getElementsByClassName("small-deal");

smallDeal[0].addEventListener('click', ()=>{
   bigDeal.src = smallDeal[0].src
});
smallDeal[1].addEventListener('click', ()=>{
   bigDeal.src = smallDeal[1].src
});
smallDeal[2].addEventListener('click', ()=>{
   bigDeal.src = smallDeal[2].src
});

function scrollpl() {
   const proLeft = document.querySelector('.pro-small-img-container');
   proLeft.scrollBy(-200, 0)
}
function scrollpr() {
  const proRight = document.querySelector('.pro-small-img-container');
  proRight.scrollBy(200, 0)
}
function scrollbc() {
  const back = document.querySelector('.slide-wrapper');
  back.scrollBy(-200, 0)
}
function scrollf() {
 const front = document.querySelector('.slide-wrapper');
 front.scrollBy(200, 0)
}
function scrolllt() {
  const lit = document.querySelector('.catalog-wrapper');
  lit.scrollBy(-200, 0)
}
function scrollrt() {
 const rit = document.querySelector('.catalog-wrapper');
 rit.scrollBy(200, 0)
}
function scrollbb() {
  const bestBack = document.querySelector('.best-wrapper');
  bestBack.scrollBy(-200, 0)
}
function scrollbf() {
 const bestFront = document.querySelector('.best-wrapper');
 bestFront.scrollBy(200, 0)
}
function scrollb() {
  const prodBack = document.querySelector('.products-container');
  prodBack.scrollBy(-200, 0)
}
function scrolla() {
 const prodFront = document.querySelector('.products-container');
 prodFront.scrollBy(200, 0)
}
function scrolldb() {
  const dealBack = document.querySelector('.deal-container');
  dealBack.scrollBy(-200, 0)
}
function scrolldf() {
 const dealFront = document.querySelector('.deal-container');
 dealFront.scrollBy(200, 0)
}


function scrollbk() {
  const backwards = document.querySelector('.collection-wrapper');
  backwards.scrollBy(-200, 0)
}
function scrollfk() {
  const fowards = document.querySelector('.collection-wrapper');
  fowards.scrollBy(200, 0)
}
function scrollpb() {
  const prevBack = document.querySelector('.product-container-mod');
  prevBack.scrollBy(-200, 0)
}
function scrollpf() {
  const prevFront = document.querySelector('.product-container-mod');
  prevFront.scrollBy(200, 0)
}
function scrollab() {
  const accessBack = document.querySelector('.access');
  accessBack.scrollBy(-200, 0)
}
function scrollaf() {
  const accessFront = document.querySelector('.access');
  accessFront.scrollBy(200, 0)
}




var countDownDate = new Date("jan 30, 2023 00:00:00").getTime();
var x = setInterval(function(){
   var now = new Date().getTime();
   var distance = countDownDate - now;

   var days = Math.floor(distance / (1000 * 60 * 60* 24));
   var hours = Math.floor((distance % (1000 * 60 * 60* 24)) / (1000 * 60 * 60 ));
   var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
   var seconds = Math.floor((distance % (1000 * 60 )) / 1000);

   document.getElementById("days").innerHTML = days;
   document.getElementById("hours").innerHTML = hours;
   document.getElementById("minutes").innerHTML = minutes;
   document.getElementById("seconds").innerHTML = seconds;
},1000);

function scrollrb() {
   const reviewBack = document.querySelector('.review-wrapper');
   reviewBack.scrollBy(-200, 0)
 }
 function scrollrf() {
   const reviewFront = document.querySelector('.review-wrapper');
   reviewFront.scrollBy(200, 0)
}
 
 
function scrollsb() {
   const singleProBack = document.querySelector('.single-pro-small-img-box');
   singleProBack.scrollBy(-100, 0)
 }
 function scrollsf() {
   const singleProFront = document.querySelector('.single-pro-small-img-box');
   singleProFront.scrollBy(100, 0)
 }


 



 