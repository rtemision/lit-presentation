# `getUpdateComplete()`
Используется, чтобы дождаться дополнительных условий перед резолвингом промиса `updateComplete`

Например, если необходимо дождаться обновления дочернего элемента:

```js
class MyElement extends LitElement {
  async getUpdateComplete() {
    await super.getUpdateComplete();
    await this._myChild.updateComplete;
  }
}
```
