<script context="module">
	import { projects } from '../../projects';

	export function load({ page }) {
		const title = page.params.title;

		for (let i = 0; i < projects.length; i++) {
			if (projects[i].title === title) {
				const display = projects[i].display;
				return { props: { title, display } };
			}
		}
	}
</script>

<script>
	export let title;
	export let display;
</script>

<h1 class="mb-2 text-3xl font-bold tracking-tight md:text-5xl md:mb-4" id="{title}-page">
	{@html display}
</h1>
