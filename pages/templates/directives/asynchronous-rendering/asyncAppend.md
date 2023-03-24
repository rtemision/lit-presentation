# Директивы: асинхронный рендеринг

* `asyncAppend(iterable: AsyncIterable)`. Добавляет значения из `AsyncIterable` в DOM по мере их получения. Используется в дочерних выражениях.

`asyncAppend` отображает значения асинхронной итеративной таблицы, добавляя каждое новое значение после предыдущего. Обратите внимание, что генераторы async также реализуют протокол async iterable и, таким образом, могут быть использованы asyncAppend.

```ts
async function *tossCoins(count: number) {
  for (let i=0; i<count; i++) {
    yield Math.random() > 0.5 ? 'Heads' : 'Tails';
    await new Promise((r) => setTimeout(r, 1000));
  }
}

@customElement('my-element')
class MyElement extends LitElement {
  @state()
  private tosses = tossCoins(10);

  render() { return html`<ul>${asyncAppend(this.tosses, (v: string) => html`<li>${v}</li>`)}</ul>`; }
}
```
