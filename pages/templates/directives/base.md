# Директивы

Директивы — это функции, которые могут расширять Lit, настраивая способ отображения выражения.

Lit включает в себя ряд встроенных директив, помогающих решать различные задачи рендеринга:

* `classMap(classInfo: {[name: string]: string | boolean | number})`.

Присваивает список классов элементу на основе объекта. Испльзование: `class` attr only

```js
render() {
  const classes = { enabled: this.enabled, hidden: false };
  return html`<div class=${classMap(classes)}>Classy text</div>`;
}
```

* `styleMap(styleInfo: {[name: string]: string | undefined | null})`. Присваивает список свойств стиля для элемента, основанного на объекте. Испльзование: `style` attr only


```js
render() {
  const styles = { backgroundColor: this.enabled ? 'blue' : 'gray', color: 'white' };
  return html`<p style=${styleMap(styles)}>Hello style!</p>`;
}
```
