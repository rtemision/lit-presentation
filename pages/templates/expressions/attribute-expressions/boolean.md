# Булевы атрибуты

Для установки булева атрибута, используется префикс `?` с именем атрибута. Атрибут добавляется, если выражение оценивается как истинное значение, и удаляется, если оценивается как ложное значение:

```js
html`<div ?hidden=${!this.showAdditional}>This text may be hidden.</div>`;
```