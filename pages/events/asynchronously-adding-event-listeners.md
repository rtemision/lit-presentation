# Асинхронное добавление подписки событий

Чтобы добавить подписку после рендеринга, используйте метод `firstUpdated`, который срабатывает после первого обновления компонента и вызова его метода рендеринга, **но** до того, как браузер успел отрисовать компонент.

Чтобы убедиться, что подписка добавлена после того, как пользователь сможет увидеть компонент, можно использовать `Promise`, который разрешается после отрисовки.

```js
async firstUpdated() {
  // Give the browser a chance to paint
  await new Promise((r) => setTimeout(r, 0));
  this.addEventListener('click', this._handleClick);
}
```
