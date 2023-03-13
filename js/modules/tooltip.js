export default function initTooltip() {
  
  const tooltips = document.querySelector('[data-tooltip]');
  
  
  function criarTooltipBox(element) {
    const text = element.getAttribute('aria-label');
    const div = document.createElement('div');
    div.classList.add('tooltip')
    div.innerHTML = text;
    document.body.appendChild(div);
    return div
  }
  
  function onMouseOver(event) {
    const tooltip = criarTooltipBox(this);
    onMouseMove.tooltip = tooltip;
    onMouseLeave.tooltip = tooltip;
    onMouseLeave.element = this;
    this.addEventListener('mouseleave', onMouseLeave);
    this.addEventListener('mousemove', onMouseMove)
  }
  
  const onMouseMove = {
    handleEvent(event) {
      this.tooltip.style.top = event.pageY + 20 + 'px';
      this.tooltip.style.left = event.pageX + 20 +'px';
    }
  }
  
  const onMouseLeave = {
    handleEvent() {
      this.tooltip.remove()
      this.element.removeEventListener('mouseleave', onMouseLeave);
      this.element.removeEventListener('mousemove', onMouseMove);
    }
  }
  
  tooltips.addEventListener('mouseover', onMouseOver)
}

