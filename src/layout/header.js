import textCSS from '@/styles/layout/_header.css?inline';

const headerTemplate = document.createElement('template');

headerTemplate.innerHTML = `
  <style>
    ${textCSS}
  </style>
  <header>
    <h1>
      <a href="/" aria-label="Kanban homepage">Kanban</a>
    </h1>
    <button type="button" aria-haspopup="menu" aria-label="open main menu">
      이미지 추가
    </button>
  </header>
  
  `

export class Header extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({mode: 'open'});
    this.shadowRoot.appendChild(headerTemplate.content.cloneNode(true))
  }
}

customElements.define('c-header', Header)