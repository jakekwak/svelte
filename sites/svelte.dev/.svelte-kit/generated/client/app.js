export { matchers } from './matchers.js';

export const nodes = [
	() => import('./nodes/0'),
	() => import('./nodes/1'),
	() => import('./nodes/2'),
	() => import('./nodes/3'),
	() => import('./nodes/4'),
	() => import('./nodes/5'),
	() => import('./nodes/6'),
	() => import('./nodes/7'),
	() => import('./nodes/8'),
	() => import('./nodes/9'),
	() => import('./nodes/10'),
	() => import('./nodes/11'),
	() => import('./nodes/12'),
	() => import('./nodes/13'),
	() => import('./nodes/14'),
	() => import('./nodes/15'),
	() => import('./nodes/16'),
	() => import('./nodes/17'),
	() => import('./nodes/18'),
	() => import('./nodes/19'),
	() => import('./nodes/20')
];

export const server_loads = [2,3];

export const dictionary = {
		"/": [~4],
		"/(authed)/apps": [~5,[2]],
		"/blog": [~9],
		"/blog/the-easiest-way-to-get-started": [11],
		"/blog/[slug]": [~10],
		"/docs": [12,[3]],
		"/docs/[slug]": [~13,[3]],
		"/examples": [14],
		"/examples/[slug]": [~15],
		"/faq": [~16],
		"/(authed)/repl": [6,[2]],
		"/(authed)/repl/embed": [8,[2]],
		"/(authed)/repl/[id]": [~7,[2]],
		"/roadmap": [17],
		"/search": [~18],
		"/tutorial": [~19],
		"/tutorial/[slug]": [~20]
	};

export const hooks = {
	handleError: (({ error }) => { console.error(error) }),
};

export { default as root } from '../root.svelte';