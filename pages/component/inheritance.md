# Lit-компонент — это HTMLElement

```html
<bl-component event="Почему bl?"></bl-component>
```

```js
const component = document.createElement('bl-component');
document.appendChild(component);
component.event = 'Чтобы никто не догадался';
```

<img v-click src="/assets/images/lit-element-inheritance.png" class="scheme">

<style>
.scheme {
  margin-top: 24px;
  height: 300px;
  width: auto;
}
</style>
