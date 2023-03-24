# DOM nodes

Любой узел DOM может быть передан в дочернее выражение. Обычно DOM-узлы отображаются путем указания шаблона с помощью `html`, но при необходимости DOM-узел может быть отображен напрямую. В этот момент узел прикрепляется к дереву DOM и, таким образом, удаляется от любого текущего родителя:

```js
const div = document.createElement('div');
const page = html`
  ${div}
  <p>This is some text</p>
`;
```