# `hasChanged`

Функция, вызываемая каждый раз, когда свойство установлено, чтобы определить, изменилось ли свойство, и вызвать обновление

Если не указано, LitElement использует строгую проверку неравенства (`newValue !== oldValue`), чтобы определить, изменилось ли значение свойства.

Если возвращает `true`, Lit начинает обновление элемента, если оно еще не запланировано.

```ts
@property({
  hasChanged(newVal: string, oldVal: string) {
    return newVal?.toLowerCase() !== oldVal?.toLowerCase();
  }
})
myProp: string | undefined;
```
