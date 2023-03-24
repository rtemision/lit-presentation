# Шаблоны

Поскольку дочерним выражением может быть `TemplateResult`, можно вкладывать и компоновать шаблоны:

```js
const nav = html`<nav>...</nav>`;
const page = html`
  ${nav}
  <main>...</main>
`;
```

Можно использовать обычный JS для создания условных шаблонов, повторяющихся шаблонов и многого другого:

```js
html`
  ${this.user.isloggedIn
    ? html`Welcome ${this.user.name}`
    : html`Please log in`
  }
`;
```
