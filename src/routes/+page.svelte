<script lang="ts">
	import Navigation from '$lib/components/Navigation.svelte';
	import HeroSection from '$lib/components/HeroSection.svelte';
	import AboutSection from '$lib/components/AboutSection.svelte';
	import ServicesSection from '$lib/components/ServicesSection.svelte';
	import ProjectsSection from '$lib/components/ProjectsSection.svelte';
	import ContactSection from '$lib/components/ContactSection.svelte';
	import Footer from '$lib/components/Footer.svelte';
</script>

<svelte:head>
	<title>AORAKI REALTY - Premium Real Estate Development</title>
	<meta name="description" content="Aoraki Realty - Crafting innovative office spaces, commercial complexes, and residential housing flats since 2002." />
</svelte:head>

<Navigation />

<main>
	<section id="home">
		<HeroSection />
	</section>
	
	<section id="about">
		<AboutSection />
	</section>
	
	<ServicesSection />
	
	<ProjectsSection />
	
	<ContactSection />
</main>

<Footer />