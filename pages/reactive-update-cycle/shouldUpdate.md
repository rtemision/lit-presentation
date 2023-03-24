# `shouldUpdate()`
Вызывается для определения необходимости цикла обновления.

Если возвращает `true`, что происходит по умолчанию, то обновление проходит нормально.

Если возвращается `false`, то остальная часть цикла обновления не будет вызвана, но промис `updateComplete` резолвится.

Можно реализовать `shouldUpdate()`, чтобы указать, изменения каких свойств должны вызывать обновление:

```ts
shouldUpdate(changedProperties: Map<string, any>) {
  // Only update element if prop1 changed.
  return changedProperties.has('prop1');
}
```
