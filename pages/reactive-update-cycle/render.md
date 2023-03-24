# `render()`
Вызывается методом `update()`, должен быть имплементирован.

Возвращает рендерируемый результат (например, `TemplateResult`).

```js
render() {
  const header = `<header>${this.header}</header>`;
  const content = `<section>${this.content}</section>`;
  return html`${header}${content}`;
}
```
