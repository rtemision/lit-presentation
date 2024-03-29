# Кэширование результатов шаблона

В большинстве случаев условные операторы JavaScript — это все, что вам нужно для условных шаблонов. Однако, если вы переключаетесь между большими и сложными шаблонами, вы можете сэкономить на воссоздании DOM на каждом переключении.

В этом случае вы можете использовать директиву `cache`. Она кэширует DOM для шаблонов, которые в данный момент не отображаются.

```js
render() {
  return html`${cache(this.userName
    ? html`Welcome ${this.userName}`
    : html`Please log in <button>Login</button>`)
  }`;
}
```
