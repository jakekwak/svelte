import { sveltekit } from '@sveltejs/kit/vite';
import * as fs from 'fs';
import { imagetools } from 'vite-imagetools';

process.env.VITE_API_BASE = process.env.DOCS_PREVIEW
	? 'http://localhost:8787'
	: 'https://api.svelte.dev';

function raw(ext) {
	return {
		name: 'vite-plugin-raw',
		transform(_, id) {
			if (ext.some((e) => id.endsWith(e))) {
				const buffer = fs.readFileSync(id);
				return { code: `export default ${JSON.stringify(buffer)}`, map: null };
			}
		}
	};
}

/** @type {import('vite').UserConfig} */
const config = {
	logLevel: 'info',
	plugins: [raw(['.ttf']), imagetools(), sveltekit()],
	optimizeDeps: {
		include: [
			'codemirror',
			'codemirror/mode/javascript/javascript.js',
			'codemirror/mode/handlebars/handlebars.js',
			'codemirror/mode/htmlmixed/htmlmixed.js',
			'codemirror/mode/xml/xml.js',
			'codemirror/mode/css/css.js',
			'codemirror/mode/markdown/markdown.js',
			'codemirror/addon/edit/closebrackets.js',
			'codemirror/addon/edit/closetag.js',
			'codemirror/addon/edit/continuelist.js',
			'codemirror/addon/comment/comment.js',
			'codemirror/addon/fold/foldcode.js',
			'codemirror/addon/fold/foldgutter.js',
			'codemirror/addon/fold/brace-fold.js',
			'codemirror/addon/fold/xml-fold.js',
			'codemirror/addon/fold/indent-fold.js',
			'codemirror/addon/fold/markdown-fold.js',
			'codemirror/addon/fold/comment-fold.js'
		],
		exclude: ['@sveltejs/repl', '@sveltejs/site-kit']
	},
	ssr: { noExternal: ['@sveltejs/site-kit'] },
	server: {
		fs: {
			strict: false
		}
	},
	// !HACK: Remove once vite 4.3 is out
	worker: {
		plugins: [
			{
				name: 'remove-manifest',
				configResolved(c) {
					const manifestPlugin = c.worker.plugins.findIndex((p) => p.name === 'vite:manifest');
					c.worker.plugins.splice(manifestPlugin, 1);
					const ssrManifestPlugin = c.worker.plugins.findIndex(
						(p) => p.name === 'vite:ssr-manifest'
					);
					c.plugins.splice(ssrManifestPlugin, 1);
				}
			}
		]
	}
};

export default config;
