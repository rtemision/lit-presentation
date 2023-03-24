# Динамические стили

Директива `styleMap` использует API `element.style` для эффективного добавления и удаления встроенных стилей к элементу на основе объекта, переданного пользователем.

Каждый ключ в объекте рассматривается как имя свойства стиля, а значение - как значение этого свойства. При последующих рендерах все ранее установленные свойства стиля, которые не определены или равны `null`, удаляются (устанавливаются в `null`).

```ts
styleMap(styleInfo: {[name: string]: string | undefined | null})
```

```ts
import { LitElement } from 'lit';
import { customElement, property } from 'lit/decorators';
import { styleMap } from 'lit/directives/style-map';

@customElement('my-element')
class MyElement extends LitElement {
  @property({type: Boolean})
  enabled = false;

  render() {
    const styles = { backgroundColor: this.enabled ? 'blue' : 'gray', color: 'white' };
    return html`<p style="font-size: 16px; ${styleMap(styles)}">Hello style!</p>`;
  }
}
```
