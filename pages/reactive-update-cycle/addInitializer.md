# `static addInitializer()`

Позволяет запускать код при создании инстанса класса. Например, кастомные декораторы.

Декораторы запускаются во время определения класса и могут заменять определения полей и методов. Если им также необходимо выполнять работу при создании экземпляра, они должны вызывать `addInitializer()`. Обычно это используется для добавления реактивного контроллера, чтобы декораторы могли подключаться к жизненному циклу компонента:

```ts
const myDecorator = (proto: ReactiveElement, key: string) => {
  const ctor = proto.constructor as typeof ReactiveElement;
  ctor.addInitializer((instance: ReactiveElement) => {
    // This is run during construction of the element
    new MyController(instance);
  });
};
```

Декорирование поля заставит каждый экземпляр выполнить инициализатор, который добавит контроллер:
```ts
class MyElement extends LitElement {
  @myDecorator foo;
}
```
