# Стилизация самого компонента

Для стилизации хост элемента используются:

* CSS-псевдокласс `:host`
* функция CSS-псевдокласса `:host(selector)`

<br>

```ts
/* ... */
@customElement('my-element')
export class MyElement extends LitElement {
  static styles = css`
    :host {
      display: block;
      background-color: lightgray;
      padding: 8px;
    }
    :host(.blue) {
      background-color: aliceblue;
      color: darkgreen;
    }
  `;
  /* ... */
}
```

```css
/**
 * Note that the host element can be affected by styles from
 * outside the shadow tree, as well, so you should consider
 * the styles you set in :host and :host() rules
 * as default styles that can be overridden by the user.
 * For example:
 */
my-element {
  display: inline-block;
}
```

<style>
.slidev-code-wrapper:nth-of-type(2) {
  position: absolute;
  right: 48px;
  width: 500px;
  height: 300px;
  transform: translate(0, -100%);
  z-index: 9;
}
</style>
