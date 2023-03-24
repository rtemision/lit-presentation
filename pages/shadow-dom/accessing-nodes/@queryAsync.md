### `@queryAsync`

Аналогичен `@query`, за исключением того, что вместо непосредственного возврата узла (DOM Node) возвращает `Promise`, который разрешается в этот узел после завершения ожидающего обновления. Код может использовать это вместо ожидания обещания `updateComplete`.

Это полезно, например, если узел, возвращаемый @queryAsync, может измениться в результате изменения другого свойства.

```ts
import { ReactiveElement } from '../reactive-element';
import { decorateProperty } from './base';

export function queryAsync(selector: string) {
  return decorateProperty({
    descriptor: (_name: PropertyKey) => ({
      async get(this: ReactiveElement) {
        await this.updateComplete;
        return this.renderRoot?.querySelector(selector);
      },
      enumerable: true,
      configurable: true,
    }),
  });
}
```
