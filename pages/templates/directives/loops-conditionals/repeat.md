* `repeat`. Выводит значения из iterable в DOM, с дополнительным ключом, чтобы обеспечить дифферинцирование данных и стабильность DOM. Используется в дочерних выражениях.

```js
repeat(items: Iterable<T>, keyfn: KeyFn<T>, template: ItemTemplate<T>)
repeat(items: Iterable<T>, template: ItemTemplate<T>)
type KeyFn<T> = (item: T, index: number) => unknown;
type ItemTemplate<T> = (item: T, index: number) => unknown;
```

```js
render() {
  return html`
    <ul>
      ${repeat(this.items, (item) => item.id, (item, index) => html`
        <li>${index}: ${item.name}</li>`)}
    </ul>
  `;
}
```

Повторяет серию значений (обычно `TemplateResults`), сгенерированных из iterable, и эффективно обновляет эти элементы при изменении iterable.

<p>Если указан `keyFn`, связь между ключами и DOM поддерживается между обновлениями путем перемещения сгенерированного DOM, когда это необходимо, и, как правило, это наиболее эффективный способ использования `repeat`, поскольку он выполняет минимум ненужной работы при вставках и удалениях. <a href="https://lit.dev/playground/#sample=examples/directive-repeat" target="_blank">Каво?</a></p>
