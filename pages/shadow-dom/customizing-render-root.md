# Кастомизация `renderRoot`

* `shadowRootOptions`

```js
class DelegatesFocus extends LitElement {
  static shadowRootOptions = { ...LitElement.shadowRootOptions, delegatesFocus: true };
}
```

* имплементация `createRenderRoot`

```ts
@customElement('light-dom')
export class LightDom extends LitElement {
  protected render() {
    return html`
      <p>Custom rendering without shadow DOM (note, styling leaks in).</p>
    `;
  }

  protected createRenderRoot() {
    return this;
  }
}
```
