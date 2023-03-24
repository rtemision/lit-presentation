# CSS custom properties

Все кастомные CSS свойства наследуются. За счет этого стили компонента можно делать настраиваемыми извне.

```ts
class MyElement extends LitElement {
  static styles = css`
    :host { background-color: var(--my-background, yellow); }
  `;
  render() {
    return html`<p>Hello world</p>`;
  }
}
```

<br>

```html
<style>
  my-element {
    --my-background: rgb(67, 156, 144);
  }
  my-element.stuff {
    --my-background: #111111;
  }
</style>
<my-element></my-element>
<my-element class="stuff"></my-element>
```
