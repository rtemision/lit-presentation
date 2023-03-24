# `slot`

По умолчанию, если элемент имеет shadow tree, его дочерние элементы не отображаются вообще.

```html
<my-element>
  <p>A child</p>
</my-element>
```

Чтобы отобразить дочерние элементы, шаблон должен включать один или несколько элементов `<slot>`, которые являются плейсхолдерами для дочерних узлов.

```ts
import { LitElement, html } from 'lit';
import { customElement } from 'lit/decorators';

@customElement('my-element')
export class MyElement extends LitElement {
  protected render() {
    return html`<slot></slot>`;
  }
}
```

Дочерние элементы не перемещаются в дереве DOM, но они отображаются так, как если бы они были дочерними элементами `<slot>`.

<img v-click class="slot-img" src="/assets/images/slot.png">

<style>
  .slot-img {
    position: absolute;
    right: 62px;
    bottom: 100px;
  }
</style>
