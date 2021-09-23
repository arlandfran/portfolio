<script>
	export let title;
</script>

<li class="text-2xl font-bold lg:text-3xl" id={title}>
	<a href="/projects/{title}">
		<slot />
	</a>
</li>
