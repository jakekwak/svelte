---
title: Declaring props
---

지금까지 우리는 내부 상태만을 다루었습니다. 즉, 주어진 구성 요소 내에서만 값에 액세스할 수 있습니다.

실제 응용 프로그램에서는 한 구성 요소에서 하위 항목으로 데이터를 전달해야 합니다. 이를 위해서는 일반적으로 'props'로 축약되는 *properties*를 선언해야 합니다. Svelte에서는 `export` 키워드를 사용하여 이를 수행합니다. `Nested.svelte` 구성요소를 편집합니다.

```svelte
<script>
	export let answer;
</script>
```

> `$:`와 마찬가지로 처음에는 약간 이상하게 느껴질 수 있습니다. 그것은 JavaScript 모듈에서 `export`가 일반적으로 작동하는 방식이 아닙니다! 지금은 그냥 사용해 보세요. 곧 제2의 천성이 될 것입니다.
