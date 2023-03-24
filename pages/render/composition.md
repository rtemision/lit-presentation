# Композиция шаблонов

```ts {1-99} {maxHeight:'420px'}
import { LitElement, html } from 'lit';
import { customElement, property } from 'lit/decorators';

@customElement('my-page')
class MyPage extends LitElement {

  @property({ attribute: false })
  article = {
    title: 'My Nifty Article',
    text: 'Some witty text.',
  };

  headerTemplate() {
    return html`<header>${this.article.title}</header>`;
  }

  articleTemplate() {
    return html`<article>${this.article.text}</article>`;
  }

  footerTemplate() {
    return html`<footer>Your footer here.</footer>`;
  }

  render() {
    return html`
      ${this.headerTemplate()}
      ${this.articleTemplate()}
      ${this.footerTemplate()}
    `;
  }
}
```
