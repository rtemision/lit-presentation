## Декораторы: `@query`, `@queryAll`, `@queryAsync`

<br>

### `@query`

Изменяет свойство класса, превращая его в геттер, который возвращает элемент. Необязательный второй аргумент при значении `true` выполняет поиск в DOM только один раз и кэширует результат.

```ts
import { LitElement, html } from 'lit';
import { query } from 'lit/decorators/query';

class MyElement extends LitElement {
  @query('#first')
  _first;

  render() {
    return html`
      <div id="first"></div>
      <div id="second"></div>
    `;
  }
}
```
