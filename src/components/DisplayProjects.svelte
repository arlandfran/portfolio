<script>
	import Project from '../components/Project.svelte';
	import { projects } from '../stores/projects';
</script>

{#each $projects as project}
	<Project title={project.title}>
		{@html project.display}
	</Project>
{/each}
