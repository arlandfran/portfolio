<script>
	const links = [
		{ title: 'Home', url: '/' },
		{ title: 'About', url: './about' }
	];
</script>

<header>
	<nav
		class="flex justify-between items-center p-8 mx-auto my-0 max-w-4xl text-gray-900 bg-white md:my-8"
	>
		<div>Logo</div>
		<div>
			{#each links as { title, url }}
				<a class="p-1 sm:p-4" href={url}>{title}</a>
			{/each}
		</div>
	</nav>
</header>
