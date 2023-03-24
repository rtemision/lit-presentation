# Экранирование юникода в стилях

* второй бэкслэш (`\\2022`)
* использование \u (`\u2022`)

```js
static styles = css`
  div::before {
    content: '\u2022';
  }
```