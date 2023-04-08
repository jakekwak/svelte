---
title: Derived stores
---

<<<<<<< Updated upstream
You can create a store whose value is based on the value of one or more _other_ stores with `derived`. Building on our previous example, we can create a store that derives the time the page has been open:
=======
`derived`를 사용하여 하나 이상의 *기타* 저장소의 가치를 기반으로 가치가 있는 저장소을 만들 수 있습니다. 이전 예제를 기반으로 페이지가 열린 시간을 파생하는 저장소를 만들 수 있습니다.
>>>>>>> Stashed changes

```js
export const elapsed = derived(time, ($time) => Math.round(($time - start) / 1000));
```

<<<<<<< Updated upstream
> It's possible to derive a store from multiple inputs, and to explicitly `set` a value instead of returning it (which is useful for deriving values asynchronously). Consult the [API reference](/docs/svelte-store#derived) for more information.
=======
> 여러 입력에서 저장소를 파생하고 값을 반환하는 대신 명시적으로 `set`할 수 있습니다(비동기적으로 값을 파생하는 데 유용함). 자세한 내용은 [API 참조](/docs#run-time-svelte-store-derived)를 참조하세요.
>>>>>>> Stashed changes
