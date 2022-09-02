const cat = document.querySelector('.extra');
const catText = document.querySelector('.cat-p')
const leftEar = document.querySelector('.ear-left')
const rightEar = document.querySelector('.ear-right')
const navBar = document.querySelector('.nav-bar')
const catFace = document.querySelector('.face')
const pageFooter = document.querySelector('.social-media')
const btnMobile = document.querySelector('.btn-mobile')
const hamburguer = document.querySelector('#hamb')

const changeMenu = () => {
  const navHamburguer = document.querySelector('.nav-bar');
  navHamburguer.classList.toggle('active');
  const active = navHamburguer.classList.contains('active')
  btnMobile.setAttribute('aria-expanded', active)

  if (active) {
    btnMobile.setAttribute('aria-label', 'Fechar Menu')
  } else {
    btnMobile.setAttribute('aria-label', 'Abrir Menu')
  }
}
  

btnMobile.addEventListener('click', changeMenu);
