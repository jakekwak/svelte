---
title: Contenteditable bindings
---

<<<<<<< Updated upstream
Elements with the `contenteditable` attribute support the following bindings:

- [`innerHTML`](https://developer.mozilla.org/en-US/docs/Web/API/Element/innerHTML)
- [`innerText`](https://developer.mozilla.org/en-US/docs/Web/API/HTMLElement/innerText)
- [`textContent`](https://developer.mozilla.org/en-US/docs/Web/API/Node/textContent)

There are slight differences between each of these, read more about them [here](https://developer.mozilla.org/en-US/docs/Web/API/Node/textContent#Differences_from_innerText).

```svelte
<div contenteditable="true" bind:innerHTML={html} />
```
=======
`contenteditable="true"` 속성이 있는 요소는 `textContent` 및 `innerHTML` 바인딩을 지원합니다.

```html
<div
	contenteditable="true"
	bind:innerHTML={html}
></div>
```
>>>>>>> Stashed changes
