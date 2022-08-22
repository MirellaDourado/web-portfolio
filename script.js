const cat = document.querySelector('.extra');
const catText = document.querySelector('.cat-p')
const leftEar = document.querySelector('.ear-left')
const rightEar = document.querySelector('.ear-right')
const navBar = document.querySelector('.nav-bar')
const catFace = document.querySelector('.face')
const pageFooter = document.querySelector('.social-media')
const btnMobile = document.querySelector('.btn-mobile')
const hamburguer = document.querySelector('#hamb')



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
    cat.setAttribute('aria-label', 'Botão com imagem de gato com a frase "Clique para mudar para o modo claro"')
    btnMobile.style.color = 'rgb(254, 250, 246)'
    hamburguer.style.borderColor = 'rgb(254, 250, 246)'
  } else if (document.body.style.backgroundColor === 'rgb(22, 22, 22)') {
    document.body.style.backgroundColor = '#FEFAF6'
    document.body.style.color = 'black'
    catText.innerHTML = 'Clique em mim para Dark Mode'
    cat.setAttribute('aria-label', 'Botão com imagem de gato com a frase "Clique para mudar para o modo escuro"')
    btnMobile.style.color = 'rgb(22, 22, 22)'
    hamburguer.style.borderColor = 'rgb(22, 22, 22)'
  }
}

cat.addEventListener('click', changeMode)

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
