import { get_blog_data } from '$lib/server/blog/get-blog-data';
import { get_processed_blog_post } from '$lib/server/blog/index.js';
import { Resvg } from '@resvg/resvg-js';
import { error } from '@sveltejs/kit';
import satori from 'satori';
import { html as toReactNode } from 'satori-html';
import Card from './Card.svelte';
import OverpassRegular from './Overpass-Regular.ttf';

const height = 630;
const width = 1200;

export const prerender = true;

/** @type {import('./$types').RequestHandler} */
export const GET = async ({ params, url }) => {
	const post = get_processed_blog_post(get_blog_data(), params.slug);

	if (!post) {
		throw error(404);
	}

	// @ts-ignore
	const result = Card.render({ post });
	const element = toReactNode(`${result.html}<style>${result.css.code}</style>`);

	const svg = await satori(element, {
		fonts: [
			{
				name: 'Overpass',
				data: Buffer.from(OverpassRegular),
				style: 'normal',
				weight: 400
			}
		],
		height,
		width
	});

	const resvg = new Resvg(svg, {
		fitTo: {
			mode: 'width',
			value: width
		}
	});

	const image = resvg.render();

	return new Response(image.asPng(), {
		headers: {
			'content-type': 'image/png',
			'cache-control': 'public, max-age=600' // cache for 10 minutes
		}
	});
};
