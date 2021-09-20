<script>
	const links = [
		{ title: 'Home', url: '/' },
		{ title: 'About', url: './about' }
	];
</script>

<header>
	<nav
		class="flex items-center justify-between w-full max-w-4xl p-8 mx-auto my-0 text-gray-900 bg-white sticky-nav md:my-8"
	>
		<div>Logo</div>
		<div>
			{#each links as { title, url }}
				<a class="p-1 text-gray-900 sm:p-4" href={url}>{title}</a>
			{/each}
		</div>
	</nav>
</header>
