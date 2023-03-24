# Удаление атрибутов

```js
html`<img src="/images/${this.imagePath}/${this.imageFile}">`;
```

Если `this.imagePath` или `this.imageFile` не определены, атрибут `src` не должен быть установлен, иначе произойдет некорректный сетевой запрос.

Lit's sentinel value `nothing` решает эту проблему, удаляя атрибут, когда любое выражение в значении атрибута оценивается как ничто:

```js
html`<img src="/images/${this.imagePath ?? nothing}/${this.imageFile ?? nothing}">`;
```

Lit также предоставляет директиву `ifDefined`, которая является сахаром для `?? nothing`

```js
html`<img src="/images/${ifDefined(this.imagePath)}/${ifDefined(this.imageFile)}">`;
```

Как удалить атрибут, когда его значение не является истинными — `false` или `''`:

```js
//  default value for this.ariaLabel is empty string ''
html`<button aria-label="${this.ariaLabel || nothing}"></button>`
```
