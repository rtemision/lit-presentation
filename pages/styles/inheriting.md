# Наследование стилей из superclass

```ts
import { css } from 'lit';
import { customElement } from 'lit/decorators';
import { SuperElement } from './super-element';

@customElement('my-element')
export class MyElement extends SuperElement {
  static styles = [ SuperElement.styles, css`div { color: red; }` ];
}
```

Можно использовать `super.styles` для ссылки на свойство `styles` суперкласса в JS. Если используется TS, рекомендуется избегать `super.styles`, поскольку компилятор не всегда корректно преобразует его. Явная ссылка на суперкласс, как показано в примере, позволяет избежать этой проблемы.

При написании компонентов на TS, поле `static styles` должно быть явно типизировано как `CSSResultGroup`, чтобы пользователи могли гибко переопределять стили с помощью массива:

```ts
// Prevent typescript from narrowing the type of `styles` to `CSSResult`
// so that subclassers can assign e.g. `[SuperElement.styles, css`...`]`;
static styles: CSSResultGroup = css`...`;
```
