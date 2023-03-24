# Директивы: кэширование и обнаружение изменений

* `cache(value: TemplateResult|unknown)`. Кэширует отрисованный DOM при смене шаблонов вместо того, чтобы отбрасывать. Использутся для оптимизации производительности рендеринга при частом переключении между большими шаблонами. Используется в дочерних выражениях.

```ts
const detailView = (data) => html`<div>...</div>`;
const summaryView = (data) => html`<div>...</div>`;

@customElement('my-element')
class MyElement extends LitElement {
  @property()
  data = {showDetails: true, /*...*/ };

  render() {
    return html`${cache(this.data.showDetails
      ? detailView(this.data)
      : summaryView(this.data)
    )}`;
  }
}
```
