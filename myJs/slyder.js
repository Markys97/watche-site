let burgerButton= document.querySelector('.header-bottom__burger');
let nav= document.querySelector('.header-bottom-navbar');
let closeButton= document.querySelector('.header-bottom__close-btn');
let menu= document.querySelector('.header-bottom-menu');



burgerButton.addEventListener('click',e=>{
  nav.classList.add('show-menu')
  menu.classList.add('show-menu')



  closeButton.classList.add('visible')
  

})

closeButton.addEventListener('click',e=>{
  nav.classList.remove('show-menu')
  menu.classList.remove('show-menu')



 
  closeButton.classList.remove('visible')
  

})