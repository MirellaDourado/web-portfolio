const cat = document.querySelector('.extra');
const catText = document.querySelector('.cat-p')
const leftEar = document.querySelector('.ear-left')
const rightEar = document.querySelector('.ear-right')
const navBar = document.querySelector('.nav-bar')
const catFace = document.querySelector('.face')
const pageFooter = document.querySelector('.social-media')
const btnMobile = document.querySelector('.btn-mobile')



document.body.style.backgroundColor = '#FEFAF6'
function changeMode() {

  navBar.classList.toggle('darkMode')
  cat.classList.toggle('lightMode')
  leftEar.classList.toggle('darkMode')
  rightEar.classList.toggle('darkMode')
  catFace.classList.toggle('darkMode')
  pageFooter.classList.toggle('darkMode')
  if ( document.body.style.backgroundColor === 'rgb(254, 250, 246)'){
    document.body.style.backgroundColor = '#161616'
    document.body.style.color = 'white'
    catText.innerHTML = 'Clique em mim para Light Mode'
  } else if (document.body.style.backgroundColor === 'rgb(22, 22, 22)') {
    document.body.style.backgroundColor = '#FEFAF6'
    document.body.style.color = 'black'
    catText.innerHTML = 'Clique em mim para Dark Mode'
  }
}

cat.addEventListener('click', changeMode)

const changeMenu = () => {
  const navHamburguer = document.querySelector('.nav-bar');
  navHamburguer.classList.toggle('active');
}

btnMobile.addEventListener('click', changeMenu);
