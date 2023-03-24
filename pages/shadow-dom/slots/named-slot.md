# Именованный слот

```html
<my-element>
  <p slot="two">Include me in slot "two".</p>
</my-element>

<my-element>
  <p slot="one">Include me in slot "one".</p>
  <p slot="nope">This one will not render at all.</p>
  <p>No default slot, so this one won't render either.</p>
</my-element>
```

```ts
import { LitElement, html } from 'lit';
import { customElement } from 'lit/decorators';

@customElement('my-element')
export class MyElement extends LitElement {
  protected render() {
    return html`
      <div>
        <slot name="one"></slot>
        <slot name="two"></slot>
      </div>
    `;
  }
}
```
