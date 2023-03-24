В директиву `ref` можно также передать колбэк. Колбэк будет вызываться каждый раз при изменении элемента, на который ссылается ссылка. Если колбэк `ref` отображается на другую позицию элемента или удаляется при последующем рендеринге, то сначала будет вызван `undefined`, а затем еще один вызов с новым элементом, на который он был отображен (если таковой имеется). Обратите внимание, что в LitElement колбэк будет вызван автоматически с привязкой к главному элементу.

```ts
@customElement('my-element')
class MyElement extends LitElement {
  render() {
    // Passing ref directive a change callback
    return html`<input ${ref(this.inputChanged)}>`;
  }

  inputChanged(input?: HTMLInputElement) {
    input?.focus();
  }
}
```
