```js {1-99} {maxHeight:'464px'}
import { html, css, LitElement } from 'lit';

export class SimpleGreetingLit extends LitElement {
  /**
   * You define scoped styles in the static styles class field
   * using the tagged template literal css function.
   * Defining styles this way results in the most optimal performance:
   */
  static styles = css`p { color: blue }`;

  /**
   * Lit components receive input and store their state as JavaScript class fields or properties.
   * Reactive properties are properties that can trigger the reactive update cycle when changed,
   * re-rendering the component, and optionally be read or written to attributes.
   */
  static properties = {
    name: { type: String },
  };

  constructor() {
    super();
  }

  connectedCallback() {
    // Invoked when a component is added to the document's DOM.
    super.connectedCallback();
  }

  disconnectedCallback() {
    // Invoked when a component is removed from the document's DOM.
    super.disconnectedCallback();
  }

  /* attributeChangedCallback(...args) {
    // Invoked when one of the element’s observedAttributes changes.
    // You rarely need to implement this callback.
    super.attributeChangedCallback(...args);
  } */

  firstUpdated(changedProperties) {
    /**
     * Called after the component's DOM has been updated the first time,
     * immediately before updated() is called.
     */
    super.firstUpdated?.(changedProperties);
  }

  updated(changedProperties) {
    // Called to update the component's DOM.
    super.updated?.(changedProperties);
  }

  adoptedCallback() {
    // called when the element is moved to a new document
    super.adoptedCallback();
  }

  render() {
    /**
     * Called by update() and should be implemented
     * to return a renderable result (such as a TemplateResult)
     * used to render the component's DOM.
     */
    return html`<p>Hello, ${this.name}!</p>`;
  }
}

customElements.define('simple-greeting-lit', SimpleGreetingLit);
```
