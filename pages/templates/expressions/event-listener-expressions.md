# Event listener expressions

Шаблоны также могут включать декларативные слушатели событий. Используется префикс `@`, за которым следует имя события:

```js
html`<button @click=${this.clickHandler}>Click Me!</button>`;
/* ... */
clickHandler() {
  this.clickCount++;
}
```
