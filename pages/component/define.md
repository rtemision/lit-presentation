## Определение компонента

<br>

```js
// w/o decorators
import { LitElement } from 'lit';

export class SimpleGreeting extends LitElement { /* ... */  }
customElements.define('simple-greeting', SimpleGreeting);
```

<br>
<br>

```ts
// with decorators
import { LitElement } from 'lit';
import { customElement } from 'lit/decorators';

@customElement('simple-greeting')
export class SimpleGreeting extends LitElement { /* ... */ }
```
