# Доступ к дочерним элементам в слотах

Для доступа используются стандартные методы `slot.assignedNodes` или `slot.assignedElements` с событием `slotchange`

```js
get _slottedChildren() {
  const slot = this.shadowRoot.querySelector('slot');
  return slot.assignedElements({ flatten: true });
}
```

<br>

```js
handleSlotchange(e) {
  const childNodes = e.target.assignedNodes({ flatten: true });
  // ... do something with childNodes ...
  this.allText = childNodes.map((node) => {
    return node.textContent ? node.textContent : ''
  }).join('');
}

render() {
  return html`<slot @slotchange=${this.handleSlotchange}></slot>`;
}
```
