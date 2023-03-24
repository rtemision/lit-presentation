* `range`. Возвращает iterable целых чисел от `начала` до `конца` (не включая) с шагом инкремента.

```js
range(end: number): Iterable<number>;

range(
  start: number,
  end: number,
  step?: number
): Iterable<number>;
```

```js
render() {
  return html`
    ${map(range(8), (i) => html`${i + 1}`)}
  `;
}
```
