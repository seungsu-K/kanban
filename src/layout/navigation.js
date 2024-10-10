import textCSS from '@/styles/layout/_navigation.css?inline';

const navTemplate = document.createElement('template');

navTemplate.innerHTML = `
  <style>
    ${textCSS}
  </style>
  <nav>
  <div class="nav_container">
    <h2>###의 프로젝트</h2>
    <ul>
      <li>1</li>
      <li>2</li>
      <li>3</li>
    </ul>
    <button type="button">+ 프로젝트 추가</button>
  </div>
  </nav>
  `

export class Navigation extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({mode: 'open'});
    this.shadowRoot.appendChild(navTemplate.content.cloneNode(true))
  }
}

customElements.define('c-nav', Navigation)