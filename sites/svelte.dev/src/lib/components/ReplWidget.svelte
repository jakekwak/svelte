<script>
	import { browser } from '$app/environment';
	import { process_example } from '$lib/utils/examples';
	import Repl from '@sveltejs/repl';
	import { onMount } from 'svelte';

	export let version = '3';
	export let gist = null;
	export let example = null;
	export let embedded = false;

	/** @type {import('@sveltejs/repl').default} */
	let repl;
	let name = 'loading...';

	let mounted = false;

	async function load(gist, example) {
		if (version !== 'local') {
			fetch(`https://unpkg.com/svelte@${version}/package.json`)
				.then((r) => r.json())
				.then((pkg) => {
					version = pkg.version;
				});
		}

		if (gist) {
			fetch(`/repl/${gist}.json`)
				.then((r) => r.json())
				.then((data) => {
					const { description, files } = data;

					name = description;

					const components = Object.keys(files)
						.map((file) => {
							const dot = file.lastIndexOf('.');
							if (!~dot) return;

							const source = files[file].content;

							return {
								name: file.slice(0, dot),
								type: file.slice(dot + 1),
								source,
							};
						})
						.filter((x) => x.type === 'svelte' || x.type === 'js')
						.sort((a, b) => {
							if (a.name === 'App' && a.type === 'svelte') return -1;
							if (b.name === 'App' && b.type === 'svelte') return 1;

							if (a.type !== b.type) return a.type === 'svelte' ? -1 : 1;

							return a.name < b.name ? -1 : 1;
						});

					repl.set({ components });
				});
		} else if (example) {
			const components = process_example(
				(await fetch(`/examples/api/${example}.json`).then((r) => r.json())).files
			);

			repl.set({
				components,
			});
		}
	}

	onMount(() => {
		mounted = true;
	});

	$: if (mounted) load(gist, example);

	$: if (embedded) document.title = `${name} • Svelte REPL`;

	$: svelteUrl =
		browser && version === 'local'
			? `${location.origin}/repl/local`
			: `https://unpkg.com/svelte@${version}`;

	const rollupUrl = `https://unpkg.com/rollup@1/dist/rollup.browser.js`;
</script>

{#if browser}
	<Repl bind:this={repl} {svelteUrl} {rollupUrl} embedded relaxed />
{/if}
