<script>
	import Project from '../components/Project.svelte';
	import { projects } from '../projects';
</script>

<ul class="grid grid-cols-1 gap-2 md:justify-items-center md:gap-8 md:grid-cols-2" role="list">
	{#each projects as project}
		<Project title={project.title}>
			{@html project.display}
		</Project>
	{/each}
</ul>
