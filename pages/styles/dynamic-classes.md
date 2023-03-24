# Динамические классы

Директива `classMap` использует API `element.classList` для эффективного добавления и удаления классов в элемент на основе объекта, переданного пользователем.

Каждый ключ в объекте рассматривается как имя класса, и если значение, связанное с ключом, истинно, то этот класс добавляется в элемент. При последующих рендерах все ранее установленные классы, которые являются ложными или больше не содержатся в объекте, удаляются.

```ts
classMap(classInfo: {[name: string]: string | boolean | number})
```

```ts
import { LitElement } from 'lit';
import { customElement, property } from 'lit/decorators';
import { classMap } from 'lit/directives/class-map';

@customElement('my-element')
class MyElement extends LitElement {
  @property({ type: Boolean })
  enabled = false;

  render() {
    const classes = { enabled: this.enabled, hidden: false };
    return html`<div class="static-class ${classMap(classes)}">Classy text</div>`;
  }
}
```
