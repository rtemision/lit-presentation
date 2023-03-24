# Sentiel values

Lit предоставляет несколько специальных значений, которые можно использовать в дочерних выражениях.

* `noChange` не изменяет существующее значение выражения. Обычно оно используется в пользовательских директивах.

* `nothing` ничего не отображает.

```js
render() {
  return html`<user-name>${this.userName ?? nothing}</user-name>`;
}
```

```js
// nothing will remove attribute
html`<button aria-label="${this.ariaLabel || nothing}"></button>`
```
