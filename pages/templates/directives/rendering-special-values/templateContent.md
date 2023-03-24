# Директивы: рендеринг специальных значений

* `templateContent(templateElement: HTMLTemplateElement)`. Рендерит контент `template` элемента. Используется в дочерних выражениях.

Шаблоны Lit закодированы в Javascript, поэтому в них можно встраивать выражения Javascript, которые делают их динамичными. Если у вас есть статичный HTML `template`, который нужно включить в шаблон Lit, вы можете использовать директиву `templateContent`, чтобы клонировать содержимое шаблона и включить его в свой шаблон Lit. Пока ссылка на элемент шаблона не изменится между рендерами, последующие рендеры будут no-op (No OPeration). Использовать только с доверенными источникам, использование сопряжено с XSS уязвимостью.

```ts
const templateEl = document.querySelector('template#myContent') as HTMLTemplateElement;

@customElement('my-element')
class MyElement extends LitElement {
  render() {
    return  html`
      Here's some content from a template element:
      ${templateContent(templateEl)}`;
  }
}
```
