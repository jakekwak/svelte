---
title: Default values
---

Nested.svelte에서 소품의 기본값을 쉽게 지정할 수 있습니다.

```svelte
<script>
	export let answer = 'a mystery';
</script>
```

<<<<<<< Updated upstream
If we now add a second component _without_ an `answer` prop, it will fall back to the default:
=======
이제 `answer` 소품 *없이* 두 번째 구성 요소를 추가하면 기본값으로 돌아갑니다.
>>>>>>> Stashed changes

```svelte
<Nested answer={42} />
<Nested />
```
