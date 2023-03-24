# `changedProperties`

Многие реактивные методы обновления получают `Map` измененных свойств.

Ключами `Map` являются имена свойств, а ее значениями — **предыдущие** значения свойств. Текущие доступны через `this.property` или `this[property]`.

<h4 class="mb-2">TypeScript types for changedProperties</h4>

```ts
import { LitElement, html, PropertyValues } from 'lit';
/* ... */
  shouldUpdate(changedProperties: PropertyValues<this>) {
    /* ... */
  }
```

`PropertyValues<this>` не распознает `protected` или `private` свойства. В этом случае используйте менее ограничивающий тип `Map<string, any>`.

Изменение свойств во время обновления (до метода `render()` вкл.) обновляет `changedProperties`, но не вызывает нового обновления. Изменение свойства после `render()` (например, в методе `updated()`) запускает новый цикл обновления, и измененное свойство добавляется в новую map `changedProperties`, которая будет использоваться в следующем цикле.
