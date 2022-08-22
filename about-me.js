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