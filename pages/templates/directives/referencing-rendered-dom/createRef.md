Объект `Ref` действует как контейнер для ссылки на элемент и может быть создан с помощью вспомогательного метода `createRef`, находящегося в модуле `ref`. После рендеринга свойство `Ref` будет установлено на элемент, где к нему можно будет получить доступ в пострендерном жизненном цикле, например, при обновлении.

```ts
@customElement('my-element')
class MyElement extends LitElement {
  inputRef: Ref<HTMLInputElement> = createRef();

  render() {
    // Passing ref directive a Ref object that will hold the element in .value
    return html`<input ${ref(this.inputRef)}>`;
  }

  firstUpdated() {
    const input = this.inputRef.value;
    input.focus();
  }
}
```
