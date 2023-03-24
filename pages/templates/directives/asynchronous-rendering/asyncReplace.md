* `asyncReplace(iterable: AsyncIterable)`. Выводит последнее значение из `AsyncIterable` в DOM по мере его получения. Используется в дочерних выражениях.

Аналогично `asyncAppend`, заменяет предыдущее значение новым.

```ts
async function *countDown(count: number) {
  while (count > 0) {
    yield count--;
    await new Promise((r) => setTimeout(r, 1000));
  }
}

@customElement('my-element')
class MyElement extends LitElement {
  @state()
  private timer = countDown(10);

  render() {
    return html`Timer: <span>${asyncReplace(this.timer)}</span>.`;
  }
}
```
