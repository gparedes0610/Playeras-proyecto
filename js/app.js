//MOSTRAR MENU

const showMenu = (toggleId, navId) => {
  const toggle = document.getElementById(toggleId),
    nav = document.getElementById(navId);

  if (toggle && nav) {
    toggle.addEventListener("click", () => {
      nav.classList.toggle("show-menu");
      console.log("hace click");
    });
  }
};

showMenu("nav-toggle", "nav-menu");

 ////REMOVER MENU MOVIL AL HACER CLICK EN LOS ENLACES

const navLink = document.querySelectorAll(".nav__link");

function linkAction() {
  const navMenu = document.getElementById("nav-menu");
  navMenu.classList.remove("show-menu");
}

navLink.forEach((n) => n.addEventListener('click', linkAction));

////////////////////////////SCROLL SECTION ACTIVE

/* const sections = document.querySelectorAll("section[id]");

function scrollActive() {
  const scrollY = window.pageYOffset

  sections.forEach((current) => {
    const sectionHeight = current.offsetHeight;
    const sectionTop = current.offsetTop - 50;
    sectionId = current.getAttribute("id")

    if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
      document.querySelector('nav__menu a[href*=' + sectionId + ']').classList.add('active-link');
    } else {
      document.querySelector('nav__menu a[href*=' + sectionId + ']').classList.remove('active-link');
    }
  });
}
window.addEventListener('scroll', scrollActive); */


//CAMBIAR FONDO DE HEADER
function scrollHeader() {
  const nav = document.getElementById('header');

  if (this.scrollY >= 200) {
    nav.classList.add('scroll-header')
  }
  else {
      nav.classList.remove('scroll-header');
    }
}

window.addEventListener('scroll', scrollHeader);

/* ////////////////////////////////SHOW SCROLL TOP */

function scrollTop() {
  const scrollTop = document.getElementById('scroll-top');
  if (this.scrollY >= 560) scrollTop.classList.add('scroll-top');
  else scrollTop.classList.remove('scroll-top');
}

window.addEventListener('scroll', scrollTop);


/* ////////////////////////////////TEMA OSCURO*/

const themeButton = document.getElementById('theme-button')
const darkTheme = 'dark-theme'
const iconTheme = 'bx-sun'


const selectedTheme =localStorage.getItem('selected-theme')
const selectedIcon = localStorage.getItem('selected-icon')

const getCurrentTheme = () => document.body.classList.contains(darkTheme) ? 'dark':'light'

const getCurrentIcon = () =>   document.body.classList.contains(iconTheme) ? 'bx-moon':'bx-sun'

if(selectedTheme){
  document.body.classList[selectedTheme === 'dark' ? 'add' : 'remove'] (darkTheme)
  themeButton.classList[selectedIcon === 'bx-moon' ? 'add' : 'remove'] (iconTheme)
}

//activar desactivar
themeButton.addEventListener('click',()=>{
  document.body.classList.toggle(darkTheme);
  themeButton.classList.toggle(iconTheme);

  localStorage.setItem('selected-theme',getCurrentTheme())
  localStorage.setItem('selected-icon',getCurrentIcon())
})

/* ////////////////////////////////ANIMACION DE SCROLL*/

const sr = ScrollReveal({
  origin: 'top',
  distance: '30px',
  duration : 1000,
  reset: true
});

sr.reveal(`.home__data, .home__img , .about__data , .about__img , .tienda__content, .contact__data, .contact__button , .footer__content`,{
  interval:200
})

/* ////////////////////////////////PAGAR*/
let products = [];
let total = 0;
function add(product,price){
  console.log(product,price);
  products.push(product);
  total = total + price;
  document.getElementById("checkout").innerHTML = `pagar $${total}`
}

function pay(){
  window.alert(products.join(","))
}