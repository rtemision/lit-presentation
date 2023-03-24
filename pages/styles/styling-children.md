# Стилизация дочерних элементов

Для стилизации хост элемента используются:

* функция CSS-псевдоэлемент `::slotted()`

<br>

```ts
/* ... */
@customElement('my-element')
export class MyElement extends LitElement {
  static styles = css`
    ::slotted(*) { font-family: Roboto; }
    ::slotted(p) { color: blue; }
    div ::slotted(*) { color: red; }
  `;
  protected render() {
    return html`
      <slot></slot>
      <div><slot name="hi"></slot></div>
    `;
  }
}
```
