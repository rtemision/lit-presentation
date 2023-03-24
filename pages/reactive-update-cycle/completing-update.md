# Завершение цикла обновления

* `firstUpdated()`

Вызывается после того, как DOM компонента был обновлен в первый раз, непосредственно перед вызовом функции `updated()`.

Реализуется для выполнения одноразовых операций после создания DOM компонента, например: фокус на элемента, добавление `ResizeObserver` или `IntersectionObserver`.

```js
firstUpdated() {
  this.renderRoot.getElementById('my-text-area').focus();
}
```

<br>

* `updated()`

```ts
updated(changedProperties: Map<string, any>) {
  if (changedProperties.has('collapsed')) {
    this._measureDOM();
  }
}
```
