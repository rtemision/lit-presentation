Метод рендер может возвращать все, что Lit может вывести в качестве дочернего элемента HTML:

* Примитивные значения: `string`, `number` `boolean`
* Объекты `TemplateResult`, созданные функцией `html`
* Узлы DOM.
* Sentinel value:
  * `nothing` — A sentinel value that signals a ChildPart to fully clear its content
  * `noChange` — A sentinel value that signals that a value was handled by a directive and should not be written to the DOM
* Arrays or iterables любого из поддерживаемых типов
