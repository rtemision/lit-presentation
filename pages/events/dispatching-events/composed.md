# `composed`

По умолчанию событие, отправленное внутри shadow root, не будет видно за его пределами.

Чтобы событие прошло через границы Shadow DOM, необходимо установить свойство `composed` в `true`. Обычно используется пара `composed` с `bubbles`, чтобы все узлы в дереве DOM могли видеть событие:

```js
_dispatchMyEvent() {
  this.dispatchEvent(new CustomEvent('my-event', {
    detail: { message: 'my-event happened.' },
    bubbles: true,
    composed: true
  }));
}
```

Если событие `composed` и `bubbles`, его могут получить все предки элемента, отправляющего событие, включая предков во внешних shadow roots. Если событие `composed`, но не `bubbles`, оно может быть получено только на элементе, который отправляет событие, и на хост-элементе, содержащем shadow root.

Большинство стандартных событий UI, включая все события мыши, touch и клавиатуры, являются одновременно и `bubbles`, и `composed`.
