# `requestUpdate`

Вызывается, чтобы запланировать явное обновление.

Это может быть полезно, если вам нужно, чтобы элемент обновлялся и отображался при изменении чего-либо, не связанного со свойством.

Например, компонент таймера может вызывать `requestUpdate()` каждую секунду.

```ts
connectedCallback() {
  super.connectedCallback();
  this._timerInterval = setInterval(() => this.requestUpdate(), 1000);
}

disconnectedCallback() {
  super.disconnectedCallback();
  clearInterval(this._timerInterval);
}
```

По желанию можно передать имя свойства и предыдущее значение при вызове `requestUpdate('prop', oldVal)`, которое будет сохранено в `changedProperties`. Это может быть полезно, при реализации кастомных аксессоров свойства.
