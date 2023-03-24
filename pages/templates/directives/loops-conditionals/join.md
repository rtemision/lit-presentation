* `join`. Возвращает iterable, содержащую значения в элементах, чередующиеся со значением соединителя.

```js
join<I, J>(
  items: Iterable<I> | undefined,
  joiner: J
): Iterable<I | J>;

join<I, J>(
  items: Iterable<I> | undefined,
  joiner: (index: number) => J
): Iterable<I | J>;
```

```js
render() {
  return html`
    ${join(
      map(menuItems, (i) => html`<a href=${i.href}>${i.label}</a>`),
      html`<span class="separator">|</span>`
    )}
  `;
}
```
