---
title: onDestroy
---

구성 요소가 소멸될 때 코드를 실행하려면 `onDestroy`를 사용하십시오.

예를 들어 구성 요소가 초기화될 때 `setInterval` 함수를 추가하고 더 이상 관련이 없을 때 정리할 수 있습니다. 이렇게 하면 메모리 누수를 방지할 수 있습니다.

```svelte
<script>
	import { onDestroy } from 'svelte';

	let counter = 0;
	const interval = setInterval(() => (counter += 1), 1000);

	onDestroy(() => clearInterval(interval));
</script>
```

<<<<<<< Updated upstream
While it's important to call lifecycle functions during the component's initialisation, it doesn't matter _where_ you call them from. So if we wanted, we could abstract the interval logic into a helper function in `utils.js`...
=======
구성 요소를 초기화하는 동안 수명 주기 함수를 호출하는 것이 중요하지만 함수를 호출하는 *어디서*는 중요하지 않습니다. 그래서 원한다면 `utils.js`의 도우미 함수로 간격 논리를 추상화할 수 있습니다...
>>>>>>> Stashed changes

```js
import { onDestroy } from 'svelte';

export function onInterval(callback, milliseconds) {
	const interval = setInterval(callback, milliseconds);

	onDestroy(() => {
		clearInterval(interval);
	});
}
```

...구성 요소로 가져옵니다.

```svelte
<script>
	import { onInterval } from './utils.js';

	let counter = 0;
	onInterval(() => (counter += 1), 1000);
</script>
```

<<<<<<< Updated upstream
Open and close the timer a few times and make sure the counter keeps ticking and the CPU load increases. This is due to a memory leak as the previous timers are not deleted. Don't forget to refresh the page before solving the example.
=======
타이머를 몇 번 열고 닫고 카운터가 계속 작동하고 CPU 부하가 증가하는지 확인합니다. 이것은 이전 타이머가 삭제되지 않았기 때문에 메모리 누수 때문입니다. 예제를 풀기 전에 페이지를 새로 고치는 것을 잊지 마십시오.
>>>>>>> Stashed changes
