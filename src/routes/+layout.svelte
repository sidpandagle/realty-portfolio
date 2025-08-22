<script lang="ts">
	import '../app.css';
	import { page } from '$app/stores';
	import { onMount } from 'svelte';

	let { children } = $props();
</script>

<svelte:head>
	<title>AORAKI REALTY - Premium Real Estate Development</title>
	<meta name="description" content="Aoraki Realty - Crafting innovative office spaces, commercial complexes, and residential housing flats since 2002." />
</svelte:head>

{@render children()}