# Повторение шаблонов:

```ts
@property() colors = ['red', 'green', 'blue'];

render() {
  return html`
    <ul>
      ${this.colors.map((color) => html`<li style="color: ${color}">${color}</li>`)}
    </ul>
  `;
}
```

```ts
render() {
  const itemTemplates = [];

  for (const i of this.items) {
    itemTemplates.push(html`<li>${i}</li>`);
  }

  return html`
    <ul>
      ${itemTemplates}
    </ul>
  `;
}
```
