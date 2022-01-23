let burgerButton= document.querySelector('.header-bottom__burger');
let menu= document.querySelector('.header-bottom-navbar');
let closeButton= document.querySelector('.header-bottom__close-btn');


burgerButton.addEventListener('click',e=>{
  menu.classList.add('show-menu')
  closeButton.classList.add('visible')
  

})

closeButton.addEventListener('click',e=>{
  menu.classList.remove('show-menu')
  closeButton.classList.remove('visible')
  

})