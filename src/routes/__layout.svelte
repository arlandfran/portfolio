<script>
	import Nav from '../components/Nav.svelte';
	import Footer from '../components/Footer.svelte';

	import '@fontsource/poppins/600.css';
	import '../app.css';
	import '../tailwind.css';
</script>

<Nav />

<main class="flex flex-col flex-grow px-8 my-0 max-w-4xl md:mx-auto">
	<slot />
</main>

<Footer />
