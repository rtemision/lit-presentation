* `unsafeHTML(value: string | typeof nothing | typeof noChange)`. Представляет строку не как текст, а как HTML. Используется в дочерних выражениях.

Ключевой особенностью синтаксиса шаблонов Lit является то, что только строки, происходящие из template literals, анализируются как HTML.

Поскольку template literals могут быть созданы только в доверенных файлах скриптов, это служит естественной защитой от XSS-атак, внедряющих недоверенный HTML. Однако могут быть случаи, когда в шаблоне Lit необходимо отобразить HTML, не созданный в файлах скриптов, например, доверенный HTML-контент, полученный из базы данных. Директива `unsafeHTML` разберет такую строку как HTML и отобразит ее в шаблоне Lit.

```ts
const markup = '<h3>Some HTML to render.</h3>';

@customElement('my-element')
class MyElement extends LitElement {
  render() {
    return html`
      Look out, potentially unsafe HTML ahead:
      ${unsafeHTML(markup)}
    `;
  }
}
