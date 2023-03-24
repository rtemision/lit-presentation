# Контекст

Подписки на события, добавленные с помощью декларативного синтаксиса `@` в шаблоне, автоматически привязываются к компоненту.

```js
class MyElement extends LitElement {
  render() {
    return html`<button @click="${this._handleClick}">click</button>`;
  }

  _handleClick(e) {
    console.log(this.prop);
  }
}
```

```js
export class MyElement extends LitElement {
  private _handleResize = () => {
    // `this` refers to the component
    console.log(this.isConnected);
  }

  constructor() {
    window.addEventListener('resize', this._handleResize);
  }
}
```
