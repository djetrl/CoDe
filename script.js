const btn = document.querySelector('#btn_form');
const modal = document.querySelector('.modal');
const bg = document.querySelector('.bg-black');

const toggleModal = ()=>{
  modal.classList.toggle('show')
  bg.classList.toggle('show')
}

btn.addEventListener("click", function (e) {
  toggleModal()
});
bg.addEventListener('click', (e)=>{
  toggleModal()
  
})


const menu_cross = document.querySelector('.icon_cross');
const burger = document.querySelector('.burger');
const burgerNav = document.querySelector('.burger_nav'); 

menu_cross.addEventListener('click', (e)=>{
  burgerNav.classList.remove('show_burger_menu')
})
burger.addEventListener('click', (e)=>{
  burgerNav.classList.add('show_burger_menu')
})
Fancybox.bind("[data-fancybox]", {
  // Your custom options
});

