---
title: Event modifiers
---

<<<<<<< Updated upstream
DOM event handlers can have _modifiers_ that alter their behaviour. For example, a handler with a `once` modifier will only run a single time:
=======
DOM 이벤트 핸들러는 동작을 변경하는 *수정자(modifiers)*를 가질 수 있습니다. 예를 들어 `once` 한정자가 있는 핸들러는 한 번만 실행됩니다.
>>>>>>> Stashed changes

```svelte
<script>
	function handleClick() {
		alert('no more alerts');
	}
</script>

<button on:click|once={handleClick}> Click me </button>
```

수정자의 전체 목록:

<<<<<<< Updated upstream
- `preventDefault` — calls `event.preventDefault()` before running the handler. Useful for client-side form handling, for example.
- `stopPropagation` — calls `event.stopPropagation()`, preventing the event reaching the next element
- `passive` — improves scrolling performance on touch/wheel events (Svelte will add it automatically where it's safe to do so)
- `nonpassive` — explicitly set `passive: false`
- `capture` — fires the handler during the _capture_ phase instead of the _bubbling_ phase ([MDN docs](https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Building_blocks/Events#Event_bubbling_and_capture))
- `once` — remove the handler after the first time it runs
- `self` — only trigger handler if event.target is the element itself
- `trusted` — only trigger handler if `event.isTrusted` is `true`. I.e. if the event is triggered by a user action.
=======
* `preventDefault` — 핸들러를 실행하기 전에 `event.preventDefault()`를 호출합니다. 예를 들어 클라이언트 측 양식 처리에 유용합니다.
* `stopPropagation` — `event.stopPropagation()`을 호출하여 이벤트가 다음 요소에 도달하는 것을 방지합니다.
* `passive` — 터치/휠 이벤트에서 스크롤 성능을 향상시킵니다(Svelte는 안전한 곳에 자동으로 추가합니다).
* `nonpassive` — `passive: false`를 명시적으로 설정
* `capture` — *bubbling* 단계 대신 *capture* 단계에서 처리기를 실행합니다([MDN 문서](https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Building_blocks/Events#Event_bubbling_and_capture))
* `once` — 핸들러가 처음 실행된 후 제거
* `self` — event.target이 요소 자체인 경우에만 핸들러를 트리거합니다.
* `trusted` — `event.isTrusted`가 `true`인 경우에만 핸들러를 트리거합니다. 즉. 이벤트가 사용자 작업에 의해 트리거된 경우.
>>>>>>> Stashed changes

수정자를 함께 연결할 수 있습니다. 예: `on:click|once|capture={...}`.
