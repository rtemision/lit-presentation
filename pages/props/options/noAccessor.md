# `noAccessor`
По умолчанию для всех реактивных свойств генерируется пара getter/setter

Значение по умолчанию: `false`.

В редких случаях подклассу может понадобиться изменить или добавить параметры свойства, существующего в его суперклассе.

Чтобы Lit не создавал аксессор свойства, который перезаписывает определенный аксессор суперкласса, установите значение `noAccessor` в `true` в объявлении свойства:

```js
static properties = {
  myProp: { type: Number, noAccessor: true }
};
```
