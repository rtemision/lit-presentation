### `@queryAll`

Идентичен `@query`, за исключением того, что возвращает все совпадающие узлы, а не один. Эквивалентно вызову `querySelectorAll`.

```ts
import { LitElement, html } from 'lit';
import { queryAll } from 'lit/decorators/queryAll';

class MyElement extends LitElement {
  @queryAll('div')
  _divs;

  render() {
    return html`
      <div id="first"></div>
      <div id="second"></div>
    `;
  }
}
```
