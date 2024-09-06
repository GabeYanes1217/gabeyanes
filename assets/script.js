
// CÓDIGO DO MENU MOBILE
const btnMobile = document.getElementById('btn-mobile');

function toggleMenu(){
  const nav = document.getElementById('nav');
  nav.classList.toggle('active');
}

btnMobile.addEventListener('click', toggleMenu);


// CÓDIGO DO DARKMODE 
let darkmode = localStorage.getItem('darkmode');
const trocaTema = document.getElementById('trocatema');

const enableDarkmode = () => {
  document.body.classList.add('darkmode')
  localStorage.setItem('darkmode', 'active')
}

const disableDarkmode = () => {
  document.body.classList.remove('darkmode')
  localStorage.setItem('darkmode', null)
}

trocaTema.addEventListener("click", () => {
  darkmode = localStorage.getItem('darkmode')
  if(darkmode !== "active"){
    enableDarkmode()
  }
  else{
    disableDarkmode()
  }
})


// CÓDIGO DO SCROLL
document.querySelectorAll('.link-icon-ancora').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
      e.preventDefault();
      var sectionId = this.getAttribute('href');
      var section = document.querySelector(sectionId);
      if (section) {
          window.scrollTo({ top: section.offsetTop, behavior: 'smooth' });
      }
  });
});