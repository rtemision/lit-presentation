# Наследование стилей

Наследование CSS позволяет родительским и хостовым элементам передавать определенные свойства CSS своим потомкам.

Наследуются:

* `color`
* `font-family` и другие `font-*`
* Все CSS custom properties (`--*`)

```html
<style>
html {
  color: green;
}
</style>
<my-element>
  #shadow-root
    Will be green if not default styles in my-element
</my-element>
```
