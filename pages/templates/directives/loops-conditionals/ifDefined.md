* `ifDefined(value: unknown)`. Устанавливает атрибут, если значение определено, и удаляет атрибут, если не определено. Испльзуется в выражениях аттрибутов.

```js
render() {
  // src attribute not rendered if either size or filename are undefined
  return html`<img src="/images/${ifDefined(this.size)}/${ifDefined(this.filename)}">`;
}
```
