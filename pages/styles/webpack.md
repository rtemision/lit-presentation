---
layout: two-cols
---

# Webpack lit-css-loader

```js
import { html, css, LitElement } from 'lit';
import buttonStyles from '@components/button/button.postcss?lit';
import attachStyles from '@components/attach/attach.postcss?lit';

export class MyComponent extends LitElement {
  static styles = [
    buttonStyles,
    attachStyles,
    css`
      p { color: red; }
    `
  ];
}
```

::right::

```js {1-99} {maxHeight:'464px'}
module.exports = {
  module: {
    rules: [
      { oneOf: [
        {
          test: /\.(post|p)?css$/,
          resourceQuery: /lit/,
          use: [
            'lit-css-loader',
            'postcss-loader'
          ]
        },
        {
          test: /\.(post|p)?css$/,
          use: [
            {
              loader: MiniCssExtractPlugin.loader,
              options: {
                publicPath: '/'
              }
            },
            'css-loader',
            'postcss-loader'
          ]
        }
      ]},
    ]
  }
}
```
