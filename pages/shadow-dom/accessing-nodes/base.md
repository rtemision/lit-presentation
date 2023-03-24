# Доступ к элементам внутри shadow DOM

Lit рендерит компоненты в свой `renderRoot`, который по умолчанию является `shadowRoot`.

Для поиска внутренних элементов можно использовать DOM query APIs, например `this.renderRoot.querySelector()`.

`renderRoot` всегда должен быть либо `shadowRoot`, либо элементом, которые имеют общие API, такие как .`querySelectorAll()` и `.children`.

Элементы внутреннего DOM можно запросить после первоначального рендеринга компонента или использовать getter pattern:

```js
firstUpdated() {
  this.staticNode = this.renderRoot.querySelector('#static-node');
}

get _closeButton() {
  return this.renderRoot.querySelector('#close-button');
}
```
