---
layout: two-cols
---

```ts
import { LitElement, html } from 'lit';
import { customElement } from 'lit/decorators';

import './my-header';
import './my-article';
import './my-footer';

@customElement('my-page')
class MyPage extends LitElement {
  render() {
    return html`
      <my-header></my-header>
      <my-article></my-article>
      <my-footer></my-footer>
    `;
  }
}
```

```html
<!DOCTYPE html>
<html lang="en">
<head></head>
  <body>
    <my-page></my-page>
  </body>
</html>
```

::right::
```ts
// header.ts
/* ... */
@customElement('my-header')
class MyHeader extends LitElement {
  render() {
    return html`<header>header</header>`;
  }
}

// article.ts
/* ... */
@customElement('my-article')
class MyArticle extends LitElement {
  render() {
    return html`<article>article</article>`;
  }
}

// footer.ts
/* ... */
@customElement('my-footer')
class MyFooter extends LitElement {
  render() {
    return html`<footer>footer</footer>`;
  }
}

```
