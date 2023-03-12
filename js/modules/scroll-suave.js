export default function initscrollSuave() {

}


const linksInternos = document.querySelectorAll('.menu-nav a[href^="#"]');

function scrolltoSection(event) {
  event.preventDefault();
  const href = this.getAttribute('href');
  const section = document.querySelector(href);
  section.scrollIntoView({
    behavior: 'smooth',
    block: 'start',
  });
}

linksInternos.forEach((link) => 
  link.addEventListener('click', scrolltoSection)
)




