# Реактивные свойства

Инпутом и стором Lit компонентов являются поля или свойства JavaScript класса.

Реактивные свойства — это свойства, которые при изменении могут запускать цикл реактивного обновления, перерисовывая компонент, и, по желанию, считываться или записываться в атрибуты.

```js
import { LitElement } from 'lit';

class MyElement extends LitElement {
  static properties = {
    name: {
      type: String
    },
  };
}
```

```ts
import { LitElement } from 'lit';
import { property } from 'lit/decorators';

class MyElement extends LitElement {
  @property({ type: String })
  name: string;
}
```
