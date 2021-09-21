<script>
	import Card from '../components/Card.svelte';

	const projects = [
		{ title: 'the beginners gambit' },
		{ title: 'anime corner rankings' },
		{ title: 'personal portfolio' }
	];
</script>

<svelte:head>
	<title>Arland Fran Torres</title>
</svelte:head>

<section>
	<h1 class="mb-4 text-3xl font-bold tracking-tight md:text-5xl">Hello, I'm Arland</h1>

	<p class="mb-16 text-base tracking-tight leading-loose md:text-xl">
		and this is my portfolio site. I'm currently studying software development with @code institute,
		but when I'm not coding I work as a web sales & support advisor for @microsoft.
	</p>
</section>

<section>
	<h2 class="mb-4 text-2xl font-bold tracking-tight md:text-4xl">Check out my projects:</h2>

	<div class="grid grid-cols-1 gap-4 md:grid-cols-2">
		{#each projects as { title }}
			<Card {title} />
		{/each}
	</div>
</section>
