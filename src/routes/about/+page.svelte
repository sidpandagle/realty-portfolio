<script lang="ts">
	import Navigation from '$lib/components/Navigation.svelte';
	import AboutSection from '$lib/components/AboutSection.svelte';
	import Footer from '$lib/components/Footer.svelte';
</script>

<svelte:head>
	<title>About Us - AORAKI REALTY</title>
	<meta name="description" content="Learn about Aoraki Realty's history, mission, and commitment to excellence in real estate development since 2002." />
</svelte:head>

<Navigation />

<main class="pt-20">
	<AboutSection />
	
	<!-- Additional detailed about content -->
	<section class="py-20 bg-white">
		<div class="container mx-auto px-6 lg:px-8">
			<div class="max-w-4xl mx-auto">
				<h2 class="text-3xl font-bold text-slate-800 mb-8">Our Journey</h2>
				<div class="prose prose-lg max-w-none text-gray-600">
					<p class="mb-6">
						Founded in 2002, Aoraki Realty began as a vision to transform the real estate landscape through innovative design and sustainable development practices. Named after Mount Aoraki/Mount Cook, New Zealand's highest peak, our company embodies the principles of reaching new heights and maintaining unwavering standards of excellence.
					</p>
					<p class="mb-6">
						Over two decades, we have successfully completed numerous landmark projects across New Zealand, establishing ourselves as a trusted partner for businesses, families, and communities. Our portfolio spans from cutting-edge office complexes that foster innovation to comfortable residential developments that families call home.
					</p>
					<p>
						Today, Aoraki Realty continues to push boundaries in real estate development, incorporating the latest technologies, sustainable practices, and design innovations to create spaces that not only meet today's needs but anticipate tomorrow's requirements.
					</p>
				</div>
			</div>
		</div>
	</section>
</main>

<Footer />