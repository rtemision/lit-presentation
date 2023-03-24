# Правильно сформированный HTML

Lit-шаблоны должны быть правильно сформированным HTML. Перед интерполяцией значений шаблоны анализируются встроенным HTML-парсером браузера.

* Шаблоны должны быть правильно сформированным HTML, когда все выражения заменяются пустыми значениями.
* Шаблоны могут иметь несколько элементов верхнего уровня и текст.
* Шаблоны не должны содержать незакрытых элементов - они будут закрыты анализатором HTML.

```js
// HTML parser closes this div after "Some text"
const template1 = html`<div class="broken-div">Some text`;

// When joined, "more text" does not end up in .broken-div
const template2 = html`${template1} more text. </div>`;
```
