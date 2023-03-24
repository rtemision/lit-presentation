С помощью `::slotted()` можно стилизовать только прямые дочерние элементы слота:

```html
<my-element>
  <div>Stylable with ::slotted()</div>
</my-element>

<my-element>
  <div><p>Not stylable with ::slotted()</p></div>
</my-element>
```

<br>

Кроме того, дочерние элементы могут быть стилизованы вне shadow tree, поэтому следует рассматривать стили `::slotted()` как стили по умолчанию, которые могут быть переопределены:

```css
my-element > div {
  /* Outside style targetting a slotted child can override ::slotted() styles */z
}
```
