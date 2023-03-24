# Директивы: циклы и условия

* `when<T, F>(condition: boolean, trueCase: () => T, falseCase?: () => F)`. Отображает один из двух шаблонов на основе условия.

```js
render() {
  return html`
    ${when(this.user, () => html`User: ${this.user.username}`, () => html`Sign In...`)}
  `;
}
```

* `choose<T, V>(value: T, cases: Array<[T, () => V]>, defaultCase?: () => V)`. Выбирает и оценивает функцию шаблона из списка случаев на основе соответствия заданного значения случаю (Типа `switch`).

```js
render() {
  return html`
    ${choose(this.section, [
      ['home', () => html`<h1>Home</h1>`],
      ['about', () => html`<h1>About</h1>`]
    ],
    () => html`<h1>Error</h1>`)}
  `;
  }
```
