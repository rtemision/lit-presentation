```ts
import { LitElement } from 'lit';
import { html, literal } from 'lit/static-html';

class MyButton extends LitElement {
  static properties = {
    caption: {},
    active: { type: Boolean },
  };

  tag = literal`button`;
  activeAttribute = literal`active`;

  constructor() {
    super();
    this.caption = 'Hello static';
    this.active = false;
  }

  render() {
    return html`
      <${this.tag} ${this.activeAttribute}?=${this.active}>
        <p>${this.caption}</p>
      </${this.tag}>`;
  }
}

customElements.define('my-button', MyButton);
```

```js
class MyAnchor extends MyButton {
  tag = literal`a`;
}

customElements.define('my-anchor', MyAnchor);
```

<div v-click class="desc">
  <p><strong>Изменение значения статических выражений стоит дорого</strong>. Выражения, использующие <code>literal</code> значения, не должны часто изменяться, так как они вызывают повторный анализ нового шаблона, а каждое изменение сохраняется в памяти.</p>
  <p>В приведенном примере, если шаблон перерисовывается и <code>this.caption</code> или <code>this.active</code> изменяются, Lit эффективно обновляет шаблон, изменяя только затронутые выражения. Однако если <code>this.tag</code> или <code>this.activeAttribute</code> изменяются, поскольку они являются статическими значениями, помеченными литералом, создается совершенно новый шаблон; обновление неэффективно, поскольку DOM полностью перерисовывается. Кроме того, изменение <code>literal</code> значений, передаваемых выражениям, увеличивает использование памяти, поскольку каждый уникальный шаблон кэшируется в памяти для повышения производительности повторного рендеринга.</p>
  <p>По этим причинам рекомендуется свести к минимуму изменения выражений, использующих <code>literal</code>, и избегать использования реактивных свойств для изменения литеральных значений, поскольку реактивные свойства предназначены для изменения.</p>
  <p>После интерполяции статических значений шаблон должен быть правильно сформирован, как и обычные шаблоны Lit, иначе динамические выражения в шаблоне могут работать неправильно.</p>
</div>

<style>
.slidev-code-wrapper:nth-of-type(2) {
  position: absolute;
  right: 48px;
  width: 410px;
  height: 300px;
  z-index: 9;
  top: 32px;
}

.desc {
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  padding: 32px 48px;
  background: #fff;
  z-index: 99;
}
</style>
