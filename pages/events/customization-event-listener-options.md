# Кастомизация опций подписки на событие

* декоратор `@eventOptions`

```ts
import { LitElement, html } from 'lit';
import { eventOptions } from 'lit/decorators';
//...
@eventOptions({ passive: true })
private _handleTouchStart(e) { console.log(e.type) }
```

* метод `handleEvent()`

```js
render() {
  return html`<button @click=${{ handleEvent: () => this.onClick(), once: true }}>click</button>`
}
```
