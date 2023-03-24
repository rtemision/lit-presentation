# Рендер

Обычно метод `render()` компонента возвращает объект `TemplateResult` (результат функции `html`)

```ts
import { LitElement, html } from 'lit';
import { customElement } from 'lit/decorators';

@customElement('my-element')
class MyElement extends LitElement {
  /**
   * Add a template to your component to define what it should render.
   * Templates can include expressions, which are placeholders for dynamic content.
   * To define a template for a Lit component, add a render() method:
   */
  render() {
    return html`<p>Hello from my template.</p>`;
  }
}
```
