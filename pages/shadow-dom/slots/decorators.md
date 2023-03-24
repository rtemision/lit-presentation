# Декораторы

```ts
@queryAssignedElements({ slot: 'list', selector: '.item' })
_listItems!: Array<HTMLElement>;

@queryAssignedNodes({ slot: 'header', flatten: true })
_headerNodes!: Array<Node>;
```

Приведенные выше примеры эквивалентны следующему коду:

```ts
get _listItems() {
  const slot = this.shadowRoot.querySelector('slot[name=list]');
  return slot.assignedElements().filter((node) => node.matches('.item'));
}

get _headerNodes() {
  const slot = this.shadowRoot.querySelector('slot[name=header]');
  return slot.assignedNodes({ flatten: true });
}
```
