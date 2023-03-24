# Невалидные позиции для выражений

```html
<!-- ERROR -->
<${tagName}></${tagName}>`

<!-- ERROR -->
<div ${attrName}=true></div>

<!-- ERROR -->
<template>${content}</template>

<!-- OK -->
<template id="${attrValue}">static content ok</template>

<!-- BEWARE -->
<textarea>${content}</textarea>

<!-- OK -->
<textarea .value=${content}></textarea>

<!-- OK -->
<textarea id="${attrValue}">static content ok</textarea>

```

```html
<!-- BEWARE -->
<div contenteditable>${content}</div>

<!-- OK -->
<div contenteditable .innerText=${content}></div>

<!-- OK -->
<div contenteditable id="${attrValue}">
  static content ok
</div>

<!-- will not update: ${value} -->
```

<style>
.slidev-code-wrapper:nth-of-type(2) {
  position: absolute;
  right: 48px;
  width: 410px;
  height: 300px;
  z-index: 9;
  bottom: 16px;
}
</style>
