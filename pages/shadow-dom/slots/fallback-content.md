# Fallback content

```ts
import { html, LitElement } from 'lit';

export class MyElement extends LitElement {
  render() {
    return html`
      <slot><b>fallback content</b></slot>
    `;
  }
}

customElements.define('my-element', MyElement);
```

<br>

```html
  <my-element>component text</my-element> <!-- component text -->

  <my-element></my-element> <!-- <b>fallback content</b> -->

  <my-element> </my-element> <!-- -->
```
