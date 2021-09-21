<script>
	import Nav from '../components/Nav.svelte';
	import Footer from '../components/Footer.svelte';

	import '../app.css';
	import '../tailwind.css';
</script>

<Nav />

<main class="flex flex-col flex-shrink-0 px-8">
	<slot />
</main>

<Footer />
