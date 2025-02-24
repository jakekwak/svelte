<script>
	import { afterNavigate } from '$app/navigation';
	import { base } from '$app/paths';
	import { page } from '$app/stores';
	import { afterUpdate, onMount } from 'svelte';

	/** @type {import('./$types').PageData['page']} */
	export let details;

	/** @type {string} */
	let hash = '';

	/** @type {number} */
	let height = 0;

	/** @type {HTMLElement} */
	let content;

	/** @type {NodeListOf<HTMLElement>} */
	let headings;

	/** @type {number[]} */
	let positions = [];

	/** @type {HTMLElement} */
	let containerEl;

	let show_contents = false;

	onMount(async () => {
		await document.fonts.ready;
		update();
		highlight();
	});

	afterNavigate(() => {
		update();
		highlight();
	});

	function update() {
		content = document.querySelector('.content');
		const { top } = content.getBoundingClientRect();
		headings = content.querySelectorAll('h2[id]');
		positions = Array.from(headings).map((heading) => {
			const style = getComputedStyle(heading);
			return heading.getBoundingClientRect().top - parseFloat(style.scrollMarginTop) - top;
		});
		height = window.innerHeight;
	}

	function highlight() {
		const { top, bottom } = content.getBoundingClientRect();
		let i = headings.length;
		while (i--) {
			if (bottom - height < 50 || positions[i] + top < 100) {
				const heading = headings[i];
				hash = `#${heading.id}`;
				return;
			}
		}
		hash = '';
	}

	/** @param {URL} url */
	function select(url) {
		// belt...
		setTimeout(() => {
			hash = url.hash;
		});
		// ...and braces
		window.addEventListener(
			'scroll',
			() => {
				hash = url.hash;
			},
			{ once: true }
		);
	}

	afterUpdate(() => {
		// bit of a hack — prevent sidebar scrolling if
		// TOC is open on mobile, or scroll came from within sidebar
		if (show_contents && window.innerWidth < 832) return;
		const active = containerEl.querySelector('.active');
		if (active) {
			const { top, bottom } = active.getBoundingClientRect();
			const min = 100;
			const max = window.innerHeight - 100;

			if (top > max) {
				containerEl.scrollBy({
					top: top - max,
					left: 0,
					behavior: 'smooth',
				});
			} else if (bottom < min) {
				containerEl.scrollBy({
					top: bottom - min,
					left: 0,
					behavior: 'smooth',
				});
			}
		}
	});
</script>

<svelte:window on:scroll={highlight} on:resize={update} on:hashchange={() => select($page.url)} />

<aside class="on-this-page" bind:this={containerEl}>
	<h2>On this page</h2>
	<nav>
		<ul>
			<li><a href="{base}/docs/{details.slug}" class:active={hash === ''}>{details.title}</a></li>
			{#each details.sections as { title, slug }}
				<li><a href={`#${slug}`} class:active={`#${slug}` === hash}>{title}</a></li>
			{/each}
		</ul>
	</nav>
</aside>

<style>
	.on-this-page {
		display: var(--on-this-page-display);
		position: fixed;
		padding: var(--sk-page-padding-top) var(--sk-page-padding-side) 0 0;
		width: min(280px, calc(var(--sidebar-width) - var(--sk-page-padding-side)));
		height: calc(100vh - var(--sk-nav-height) - var(--sk-page-padding-top));
		top: var(--sk-nav-height);
		left: calc(100vw - (var(--sidebar-width)));
		overflow-y: auto;
	}

	h2 {
		text-transform: uppercase;
		font-size: 1.4rem !important;
		font-weight: 400;
		margin: 0 0 1rem 0 !important;
		padding: 0 0 0 0.6rem;
		color: var(--sk-text-3);
	}

	ul {
		list-style: none;
	}

	a {
		display: block;
		padding: 0.3rem 0.5rem;
		color: var(--sk-text-3);
		border-left: 2px solid transparent;
	}

	a:hover {
		text-decoration: none;
		background: var(--sk-back-3);
	}

	a.active {
		background: var(--sk-back-3);
		border-left-color: var(--sk-theme-1);
	}
</style>
