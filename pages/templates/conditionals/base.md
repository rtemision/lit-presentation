---
layout: two-cols
---

# Условия

```js
render() {
  return this.userName
    ? html`Welcome ${this.userName}`
    : html`Please log in <button>Login</button>`;
}
```

```js
render() {
  let message;
  if (this.userName) {
    message = html`Welcome ${this.userName}`;
  } else {
    message = html`Please log in <button>Login</button>`;
  }

  return html`<p class="message">${message}</p>`;
}

```

::right::

```js
getUserMessage() {
  if (this.userName) {
    return html`Welcome ${this.userName}`;
  } else {
    return html`Please log in <button>Login</button>`;
  }
}

render() {
  return html`<p>${this.getUserMessage()}</p>`;
}
```

<style>
  .slidev-page.col-right {
    margin-top: 52px;
  }
</style>
