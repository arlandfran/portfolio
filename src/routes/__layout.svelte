<script>
	import Nav from '../components/Nav.svelte';

	import '../app.css';
	import '../tailwind.css';
</script>

<Nav />

<main class="flex flex-shrink-0 px-8">
	<slot />
</main>
