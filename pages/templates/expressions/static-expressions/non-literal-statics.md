# Non-literal statics

В случаях, когда надо интерполировать статический HTML-код в шаблон, который не определен в вашем скрипте и, следовательно, не может быть помечен `literal` функцией, можно использовать функцию `unsafeStatic()` для создания статического HTML на основе строк из non-script источников.

```js {1-99} {maxHeight:'260px'}
import { html, unsafeStatic } from 'lit/static-html';

class MyButton extends LitElement {
  static properties = {
    caption: {},
    active: { type: Boolean },
  };

  constructor() {
    super();
    this.caption = 'Hello static';
    this.active = false;
  }

  render() {
    // These strings MUST be trusted, otherwise this is an XSS vulnerability
    const tag = getTagName();
    const activeAttribute = getActiveAttribute();
    return html`
      <${unsafeStatic(tag)} ${unsafeStatic(activeAttribute)}?=${this.active}>
        <p>${this.caption}</p>
      </${unsafeStatic(tag)}>`;
  }
}

customElements.define('my-button', MyButton);
```

Использования `unsafeStatic` сопряжено с теми же предостережения, что и `literal`: поскольку изменение значений приводит к анализу и кэшированию нового шаблона в памяти, они не должны изменяться часто.
