```js {1-99} {maxHeight:'464px'}
const style = document.createElement('style'); // не делайте так, используйте Constructable Stylesheets
const container = document.createElement('div');

style.textContent = `p { color: green; }`;

container.classList.add('container');

export class SimpleGreeting extends HTMLElement {
  static get observedAttributes() {
    /* array of attribute names to monitor for changes */
    return ['name'];
  }

  set name(value) {
    this.setAttribute('name', value);
  }

  get name() {
    return this.getAttribute('name');
  }

  constructor() {
    super();
    this.attachShadow({ mode: 'open' });
    this.shadowRoot.appendChild(style);
    this.shadowRoot.appendChild(container);
  }

  connectedCallback() {
    // browser calls this method when the element is added to the document
    // (can be called many times if an element is repeatedly added/removed)
    this.render();
  }

  disconnectedCallback() {
    // browser calls this method when the element is removed from the document
    // (can be called many times if an element is repeatedly added/removed)
  }

  adoptedCallback() {
    // called when the element is moved to a new document
    // (happens in document.adoptNode, very rarely used)
  }

  attributeChangedCallback(name, oldValue, newValue) {
    // called when one of attributes listed above is modified
    this.render();
  }

  render() {
    this.shadowRoot.querySelector('.container').innerHTML = `<p>Hello, ${this.name}!</p>`;
  }
}

customElements.define('simple-greeting', SimpleGreeting);
```
