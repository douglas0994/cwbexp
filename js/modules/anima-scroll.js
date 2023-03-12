export default function initanimaScroll() {

}

const sections = document.querySelectorAll('[data-anima="scroll"]');
if(sections.length) {
    const windowMetade = window.innerHeight * 0.80;


    function animaScroll() {
      sections.forEach((section) => {
        const sectionTop = section.getBoundingClientRect().top;
        if(sectionTop < windowMetade) 
          section.classList.add('ativo');
        else if(section.classList.contains('ativo'))
          section.classList.remove('ativo');
        })
    }
    
    animaScroll();
    window.addEventListener('scroll', animaScroll)
  }