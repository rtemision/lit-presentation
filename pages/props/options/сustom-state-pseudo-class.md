# Bonus: Custom State Pseudo Class
Draft Community Group Report, 18 January 2021

```js {1-99} {maxHeight:'380px'}
class LabeledCheckbox extends HTMLElement {
  constructor() {
    super();
    this._internals = this.attachInternals();
    this.addEventListener('click', this._onClick.bind(this));

    const shadowRoot = this.attachShadow({ mode: 'closed' });
    shadowRoot.innerHTML =
      `<style>
       :host::before {
         content: '[ ]';
         white-space: pre;
         font-family: monospace;
       }
       :host(:--checked)::before { content: '[x]' }
       </style>
       <slot>Label</slot>`;
  }

  get checked() { return this._internals.states.has('--checked'); }

  set checked(flag) {
    if (flag)
      this._internals.states.add('--checked');
    else
      this._internals.states.delete('--checked');
  }

  _onClick(event) {
    this.checked = !this.checked;
  }
}

customElements.define('labeled-checkbox', LabeledCheckbox);
```
