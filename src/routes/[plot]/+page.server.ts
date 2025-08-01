import { error } from '@sveltejs/kit';
import { plots } from '../data';

export function load({ params }) {
	const plot = plots.find((plot) => plot.slug === params.plot);

	if (!plot) error(404);

	return {
		plot
	};
}
