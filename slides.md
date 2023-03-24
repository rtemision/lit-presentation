---
# try also 'default' to start simple
theme: default
colorSchema: 'ligth'
# random image from a curated Unsplash collection by Anthony
# like them? see https://unsplash.com/collections/94734566/slidev
# background: /assets/images/shiro-hatori-WR-ifjFy4CI-unsplash.jpg
# apply any windi css classes to the current slide
# class: 'text-center'
# https://sli.dev/custom/highlighters.html
highlighter: shiki
# show line numbers in code blocks
lineNumbers: true
favicon: '/favicon.svg'
fonts:
  sans: 'Manrope'
  serif: 'Roboto Slab'
  mono: 'Roboto Mono'

# persist drawings in exports and build
drawings:
  persist: false
# page transition
transition: slide-left
# use UnoCSS
# css: unocss
layout: cover
src: ./pages/cover.md
---

---
src: ./pages/intro/what.md
---

---
src: ./pages/intro/history.md
---

---
src: ./pages/requirements.md
transition: slide-left
---

---
src: ./pages/intro/features.md
---

---
src: ./pages/intro/why.md
---

---
src: ./pages/compare/cover.md
---

---
transition: slide-up
src: ./pages/compare/vanilla-html.md
---

---
transition: slide-left
src: ./pages/compare/vanilla-code.md
---

---
transition: slide-up
src: ./pages/compare/lit-html.md
---

---
transition: slide-left
src: ./pages/compare/lit-code.md
---

---
transition: slide-left
src: ./pages/compare/vanilla-constructable-stylesheets.md
---

---
src: ./pages/component/define.md
---

---
transition: slide-up
src: ./pages/component/inheritance.md
---

---
transition: slide-left
src: ./pages/component/types.md
---

---
transition: slide-up
src: ./pages/render/base.md
---

---
src: ./pages/render/results.md
---

---
transition: slide-up
src: ./pages/render/composition.md
---

---
src: ./pages/render/child-component.md
---

---
src: ./pages/props/desc.md
transition: slide-up
---

---
src: ./pages/props/manage.md
transition: slide-up
---

---
src: ./pages/props/states.md
transition: slide-up
---

---
src: ./pages/props/options/cover.md
transition: slide-up
---

---
src: ./pages/props/options/attribute.md
transition: slide-up
---

---
src: ./pages/props/attribute-boolean.md
transition: slide-left
---

---
src: ./pages/props/options/type.md
transition: slide-up
---

---
src: ./pages/props/options/converter-default-from-attr.md
transition: slide-up
---

---
src: ./pages/props/options/converter-default-to-attr.md
transition: slide-up
---

---
src: ./pages/props/options/converter-custom.md
transition: slide-up
---

---
src: ./pages/props/options/state.md
transition: slide-up
---

---
src: ./pages/props/options/reflect.md
transition: slide-up
---

---
src: ./pages/props/options/сustom-state-pseudo-class.md
transition: slide-up
---

---
src: ./pages/props/options/noAccessor.md
transition: slide-up
---

---
src: ./pages/props/custom-accesors.md
transition: slide-left
---

---
src: ./pages/props/options/hasChanged.md
transition: slide-left
---

---
src: ./pages/props/change.md
transition: slide-up
---

---
src: ./pages/props/mutation-object-array-types.md
transition: slide-left
---

---
src: ./pages/reactive-update-cycle/intro.md
transition: slide-up
---

---
src: ./pages/reactive-update-cycle/pre-update.md
transition: slide-up
---

---
src: ./pages/reactive-update-cycle/update.md
transition: slide-up
---

---
src: ./pages/reactive-update-cycle/post-update.md
transition: slide-up
---

---
src: ./pages/reactive-update-cycle/changedProperties.md
transition: slide-up
---

---
src: ./pages/reactive-update-cycle/requestUpdate.md
transition: slide-up
---

---
src: ./pages/reactive-update-cycle/scheduleUpdate.md
transition: slide-up
---

---
src: ./pages/reactive-update-cycle/performUpdate.md
transition: slide-up
---

---
src: ./pages/reactive-update-cycle/shouldUpdate.md
transition: slide-up
---

---
src: ./pages/reactive-update-cycle/willUpdate.md
transition: slide-up
---

---
src: ./pages/reactive-update-cycle/udpate.md
transition: slide-up
---

---
src: ./pages/reactive-update-cycle/render.md
transition: slide-up
---

---
src: ./pages/reactive-update-cycle/completing-update.md
transition: slide-up
---

---
src: ./pages/reactive-update-cycle/updateComplete.md
transition: slide-up
---

---
src: ./pages/reactive-update-cycle/getUpdateComplete.md
transition: slide-up
---

---
src: ./pages/reactive-update-cycle/hasUpdated.md
transition: slide-up
---

---
src: ./pages/reactive-update-cycle/errors.md
transition: slide-up
---

---
src: ./pages/reactive-update-cycle/external-lifecycle-hooks.md
transition: slide-up
---

---
src: ./pages/reactive-update-cycle/addInitializer.md
transition: slide-left
---

---
src: ./pages/controllers/intro.md
transition: slide-up
---

---
src: ./pages/controllers/lifecycle.md
transition: slide-up
---

---
src: ./pages/controllers/host-api.md
transition: slide-up
---

---
src: ./pages/controllers/example.md
transition: slide-up
---

---
src: ./pages/controllers/child-controllers.md
transition: slide-left
---

---
src: ./pages/shadow-dom/intro.md
transition: slide-left
---

---
src: ./pages/shadow-dom/accessing-nodes/base.md
transition: slide-up
---

---
src: ./pages/shadow-dom/accessing-nodes/decorators.md
transition: slide-up
---

---
src: ./pages/shadow-dom/accessing-nodes/@queryAll.md
transition: slide-up
---

---
src: ./pages/shadow-dom/accessing-nodes/@queryAsync.md
transition: slide-up
---

---
src: ./pages/shadow-dom/slots/intro.md
transition: slide-up
---

---
src: ./pages/shadow-dom/slots/named-slot.md
transition: slide-up
---

---
src: ./pages/shadow-dom/slots/fallback-content.md
transition: slide-up
---

---
src: ./pages/shadow-dom/slots/accessing-slotted-children.md
transition: slide-up
---

---
src: ./pages/shadow-dom/slots/decorators.md
transition: slide-up
---

---
src: ./pages/shadow-dom/customizing-render-root.md
transition: slide-left
---

---
src: ./pages/styles/intro.md
transition: slide-up
---

---
src: ./pages/styles/sharing.md
transition: slide-up
---

---
src: ./pages/styles/webpack.md
transition: slide-up
---

---
src: ./pages/styles/expressions.md
transition: slide-up
---

---
src: ./pages/styles/inheriting.md
transition: slide-up
---

---
src: ./pages/styles/unicode.md
transition: slide-up
---

---
src: ./pages/styles/styling-itself.md
transition: slide-up
---

---
src: ./pages/styles/styling-children.md
transition: slide-up
---

---
src: ./pages/styles/styling-children-notes.md
transition: slide-up
---

---
src: ./pages/styles/dynamic-classes.md
transition: slide-left
---

---
src: ./pages/styles/dynamic-styles.md
transition: slide-left
---

---
src: ./pages/styles/css-inheritance.md
transition: slide-left
---

---
src: ./pages/styles/css-custom-properties.md
transition: slide-left
---

---
src: ./pages/events/intro.md
transition: slide-left
---

---
src: ./pages/events/customization-event-listener-options.md
transition: slide-left
---

---
src: ./pages/events/event-delegation.md
transition: slide-left
---

---
src: ./pages/events/adding-listeners-component-shadow-root.md
transition: slide-left
---

---
src: ./pages/events/adding-listeners-other-elements.md
transition: slide-left
---

---
src: ./pages/events/asynchronously-adding-event-listeners.md
transition: slide-left
---

---
src: ./pages/events/this.md
transition: slide-left
---

---
src: ./pages/events/repeated-templates.md
transition: slide-left
---

---
src: ./pages/events/dispatching-events/base.md
transition: slide-up
---

---
src: ./pages/events/dispatching-events/composed.md
transition: slide-up
---

---
src: ./pages/events/dispatching-events/retargeting.md
transition: slide-left
---

---
src: ./pages/decorators.md
transition: slide-left
---

---
src: ./pages/templates/intro.md
transition: slide-left
---

---
src: ./pages/templates/expressions/child-expressions/base.md
transition: slide-up
---

---
src: ./pages/templates/expressions/child-expressions/primitive.md
transition: slide-up
---

---
src: ./pages/templates/expressions/child-expressions/sentinel.md
transition: slide-up
---

---
src: ./pages/templates/expressions/child-expressions/templates.md
transition: slide-up
---

---
src: ./pages/templates/expressions/child-expressions/dom-nodes.md
transition: slide-up
---

---
src: ./pages/templates/expressions/child-expressions/arrays-iterables.md
transition: slide-up
---

---
src: ./pages/templates/lists.md
transition: slide-left
---

---
src: ./pages/templates/expressions/attribute-expressions/base.md
transition: slide-up
---

---
src: ./pages/templates/expressions/attribute-expressions/boolean.md
transition: slide-up
---

---
src: ./pages/templates/expressions/attribute-expressions/remove.md
transition: slide-left
---

---
src: ./pages/templates/expressions/property-expressions.md
transition: slide-left
---

---
src: ./pages/templates/expressions/event-listener-expressions.md
transition: slide-left
---

---
src: ./pages/templates/expressions/element-expressions.md
transition: slide-left
---

---
src: ./pages/templates/expressions/well-formed-html.md
transition: slide-left
---

---
src: ./pages/templates/expressions/valid-expression-locations.md
transition: slide-left
---

---
src: ./pages/templates/expressions/invalid-expression-locations.md
transition: slide-left
---

---
src: ./pages/templates/expressions/static-expressions/base.md
transition: slide-left
---

---
src: ./pages/templates/expressions/static-expressions/example.md
transition: slide-left
---

---
src: ./pages/templates/expressions/static-expressions/non-literal-statics.md
transition: slide-left
---

---
src: ./pages/templates/conditionals/base.md
transition: slide-left
---

---
src: ./pages/templates/conditionals/cache.md
transition: slide-left
---

---
src: ./pages/templates/directives/base.md
transition: slide-up
---

---
src: ./pages/templates/directives/loops-conditionals/when-choose.md
transition: slide-up
---

---
src: ./pages/templates/directives/loops-conditionals/map.md
transition: slide-up
---

---
src: ./pages/templates/directives/loops-conditionals/repeat.md
transition: slide-up
---

---
src: ./pages/templates/directives/loops-conditionals/join.md
transition: slide-up
---

---
src: ./pages/templates/directives/loops-conditionals/ifDefined.md
transition: slide-up
---

---
src: ./pages/templates/directives/caching-change-detection/cache.md
transition: slide-up
---

---
src: ./pages/templates/directives/caching-change-detection/keyed.md
transition: slide-up
---

---
src: ./pages/templates/directives/caching-change-detection/guard.md
transition: slide-up
---

---
src: ./pages/templates/directives/caching-change-detection/live.md
transition: slide-up
---

---
src: ./pages/templates/directives/rendering-special-values/templateContent.md
transition: slide-up
---

---
src: ./pages/templates/directives/rendering-special-values/unsafeHTML.md
transition: slide-up
---

---
src: ./pages/templates/directives/rendering-special-values/unsafeSVG.md
transition: slide-up
---

---
src: ./pages/templates/directives/referencing-rendered-dom/base.md
transition: slide-up
---

---
src: ./pages/templates/directives/referencing-rendered-dom/createRef.md
transition: slide-up
---

---
src: ./pages/templates/directives/referencing-rendered-dom/ref.md
transition: slide-up
---

---
src: ./pages/templates/directives/asynchronous-rendering/until.md
transition: slide-up
---

---
src: ./pages/templates/directives/asynchronous-rendering/asyncAppend.md
transition: slide-up
---

---
src: ./pages/templates/directives/asynchronous-rendering/asyncReplace.md
transition: slide-up
---

---
src: ./pages/not-all.md
transition: slide-left
---

---
src: ./pages/end.md
transition: slide-left
---
