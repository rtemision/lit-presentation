# `attribute`

Связывает свойство с атрибутом.

Значение по умолчанию: `true`. В значении `false` опции `converter`, `reflect` и `type` игнорируются.

По умолчанию Lit создает соответствующий наблюдаемый атрибут для всех публичных реактивных свойств. Имя наблюдаемого атрибута - это имя свойства, написанное строчными буквами (lowercase):

```ts
// observed attribute name is "myvalue"
@property({ type: Number })
myValue = 0;
```

```ts
// Observed attribute will be called my-name
@property({ attribute: 'my-name' })
myName = 'Vasya';
```

```ts
// No observed attribute for this property
@property({ attribute: false })
myData = {};
```
