---
title: <svelte:window> bindings
---

`scrollY`와 같은 `window`의 특정 속성에 바인딩할 수도 있습니다. 업데이트 라인 7:

```svelte
<svelte:window bind:scrollY={y} />
```

바인딩할 수 있는 속성 목록은 다음과 같습니다.

<<<<<<< Updated upstream
- `innerWidth`
- `innerHeight`
- `outerWidth`
- `outerHeight`
- `scrollX`
- `scrollY`
- `online` — an alias for `window.navigator.onLine`

All except `scrollX` and `scrollY` are readonly.
=======
* `innerWidth`
* `innerHeight`
* `outerWidth`
* `outerHeight`
* `scrollX`
* `scrollY`
* `online` — `window.navigator.onLine`의 별칭

`scrollX` 및 `scrollY`를 제외한 모든 항목은 읽기 전용입니다.
>>>>>>> Stashed changes
