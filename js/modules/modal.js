export default function initModal() {

}


const botaoAbrir = document.querySelector('[data-modal="abrir"]');
const botaoFechar = document.querySelector('[data-modal="fechar"]');
const containerModal = document.querySelector('[data-modal="container"')

if(botaoAbrir && botaoFechar && containerModal) {
  function abrirModal(event) {
    event.preventDefault();
    containerModal.classList.toggle('ativo')
  }

  function fecharModal(event) {
    if(event.target === containerModal) {
      containerModal.classList.toggle('ativo')
    }
  }



  botaoAbrir.addEventListener('click', abrirModal)
  botaoFechar.addEventListener('click', abrirModal)
  containerModal.addEventListener('click', fecharModal)
}