# Обработка ошибок в цикле обновления
Промис `updateComplete` отклоняется, если во время цикла обновления произошла необработанная ошибка.

Если в методе жизненного цикла есть код, который может вызвать исключение, рекомендуется поместить его в оператор `try/catch`. Также можно использовать `try/catch`, при ожидании промиса `updateComplete`:

```js
try {
  await this.updateComplete;
} catch (e) {
  /* handle error */
}
```

В некоторых случаях код может выкидывать ошибки в неожиданных местах. В качестве fallback можно использовать обработчик для `window.onunhandledrejection`

```js
window.onunhandledrejection = function(e) {
  /* handle error */
}
```
