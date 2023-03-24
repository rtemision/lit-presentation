* `unsafeSVG(value: string | typeof nothing | typeof noChange)`. Представляет строку не как текст, а как SVG. Используется в дочерних выражениях.

Аналогично `unsafeHTML`

```ts
const svg = '<circle cx="50" cy="50" r="40" fill="red" />';

@customElement('my-element')
class MyElement extends LitElement {
  render() {
    return html`
      Look out, potentially unsafe SVG ahead:
      <svg width="40" height="40" viewBox="0 0 100 100"
        xmlns="http://www.w3.org/2000/svg" version="1.1">
        ${unsafeSVG(svg)}
      </svg> `;
  }
}
```
