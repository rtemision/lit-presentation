#### Кастомный конвертер

```js
prop1: { // If it is an object, it can have keys for fromAttribute and toAttribute:
  converter: {
    fromAttribute: (value, type) => {
      // `value` is a string
      // Convert it to a value of type `type` and return it
    },
    toAttribute: (value, type) => {
      // `value` is of type `type`
      // Convert it to a string and return it
    }
  }
}
```

```js
myProp: { // If converter is a function, it is used in place of fromAttribute:
  converter: (value, type) => {
    // `value` is a string
    // Convert it to a value of type `type` and return it
  }
}
```

Если функция `toAttribute` не определена, используется дефолтный конвертер свойство -> атрибут.

Если `toAttribute` возвращает `null` или `undefined`, атрибут удаляется.
