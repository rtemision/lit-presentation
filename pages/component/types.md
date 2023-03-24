# Типизация для кастомных элементов

```ts
import { LitElement } from 'lit';
import { customElement, property } from 'lit/decorators';

@customElement('my-element')
export class MyElement extends LitElement {

  @property({ type: Number })
  value: number = 5;

  /* ... */
}

declare global {
  interface HTMLElementTagNameMap {
    'my-element': MyElement;
  }
}
```

В результате получаем проверку типа в коде:

```ts
const myElement = document.createElement('my-element');
myElement.value = 10;
```
