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

/* const sr = ScrollReveal({
  origin: 'top',
  distance: '30px',
  duration : 1000,
  reset: true
});

sr.reveal(`.home__img , .about__data , .about__img , .contact__data, .contact__button `,{
  interval:200
}) */

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


/////////BOTONES DE TIENDA

bts = document.querySelector('.bts');
memes = document.querySelector('.memes');
todas = document.querySelector('.todas');
tienda__container = document.querySelector(".tienda__container");
tienda__container2 = document.querySelector(".tienda__container2");

bts.addEventListener('click',()=>{
  console.log('hizo click en boton bts')
  tienda__container2.classList.remove("activar")
  tienda__container.classList.add("activar")
})

memes.addEventListener('click',()=>{
  console.log('hizo click en boton memes')
  tienda__container2.classList.add("activar")
  tienda__container.classList.remove("activar")
})

todas.addEventListener('click',()=>{
  console.log('hizo click en ver todo')
  tienda__container.classList.remove("activar")
  tienda__container2.classList.remove("activar")
})


