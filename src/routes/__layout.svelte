<script>
	import Nav from '../components/Nav.svelte';

	import '../app.css';
	import '../tailwind.css';
</script>

<Nav />

<main class="px-8 flex flex-shrink-0">
	<slot />
</main>
