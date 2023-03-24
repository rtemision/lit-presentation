# Стили

Стили за счёт Shadow DOM инкапсулированы. Задаются через статиечское поле класса `static styles`. Значением поля  может быть:

* A single tagged template literal.

```js
static styles = css`...`;
```

* An array of tagged template literals.

```js
static styles = [ css`...`, css`...`];
```

Это рекомендуемый способ добавления стилей в компонент. Если по какой-то причине нужно кастомизация стилей на уровне инстансов:

```js
render() {
  return html`
    <style>
      /* updated per instance */
    </style>
    <div>template content</div>
  `;
}
```
