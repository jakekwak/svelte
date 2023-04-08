---
title: Exports
---

`context="module"` 스크립트 블록에서 내보낸 모든 항목은 모듈 자체에서 내보낸 것이 됩니다. `AudioPlayer.svelte`에서 `stopAll` 함수를 내보내면...

```svelte
<script context="module">
	const elements = new Set();

	export function stopAll() {
		elements.forEach((element) => {
			element.pause();
		});
	}
</script>
```

...그런 다음 `App.svelte`에서 가져올 수 있습니다...

```svelte
<script>
	import AudioPlayer, { stopAll } from './AudioPlayer.svelte';
</script>
```

...이벤트 핸들러에서 사용하십시오:

```svelte
<button on:click={stopAll}> stop all audio </button>
```

<<<<<<< Updated upstream
> You can't have a default export, because the component _is_ the default export.
=======
> 구성 요소가 기본 내보내기 *이므로* 기본 내보내기를 가질 수 없습니다.
>>>>>>> Stashed changes
