# Валидные позиции для выражений

Выражения могут встречаться только там, где вы можете поместить значения атрибутов и дочерних элементов в HTML.

```html
<!-- attribute values -->
<div label=${label}></div>
<button ?disabled=${isDisabled}>Click me!</button>
<input .value=${currentValue}>
<button @click=${this.handleClick()}>

<!-- child content -->
<div>${textContent}</div>
```

Выражения элементов могут встречаться внутри открывающего тега после имени тега:
```html
<div ${ref(elementReference)}></div>
```
