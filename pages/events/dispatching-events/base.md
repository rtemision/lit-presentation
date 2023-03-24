# Отправка событий

* `CustomEvent`

```js
const event = new CustomEvent('my-event', {
  detail: {
    message: 'Something important happened'
  }
});

this.dispatchEvent(event);
```

* `Event`

```js
class MyEvent extends Event {
  constructor(message) {
    super();
    this.type = 'my-event';
    this.message = message;
  }
}

const event = new MyEvent('Something important happened');
this.dispatchEvent(event);
```
