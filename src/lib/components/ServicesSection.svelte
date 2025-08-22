<script lang="ts">
	const services = [
		{
			icon: '🏢',
			title: 'Office Spaces',
			description: 'Modern, functional office spaces designed to enhance productivity and create inspiring work environments.'
		},
		{
			icon: '🏬',
			title: 'Commercial Complexes',
			description: 'Strategic commercial developments that blend retail, dining, and business spaces for maximum foot traffic.'
		},
		{
			icon: '🏠',
			title: 'Residential Housing',
			description: 'Quality residential flats and housing projects that provide comfortable, modern living spaces for families.'
		},
		{
			icon: '🏗️',
			title: 'Project Management',
			description: 'End-to-end project management ensuring timely delivery and quality construction standards.'
		},
		{
			icon: '🌱',
			title: 'Sustainable Design',
			description: 'Eco-friendly and sustainable building practices that reduce environmental impact and energy costs.'
		},
		{
			icon: '📐',
			title: 'Architecture Consulting',
			description: 'Expert architectural consultation to optimize space utilization and aesthetic appeal.'
		}
	];
</script>

<section id="services" class="py-24 bg-gray-50">
	<div class="container mx-auto px-6 lg:px-8">
		<!-- Section Header -->
		<div class="text-center mb-16">
			<div class="flex items-center justify-center mb-6">
				<div class="w-3 h-16 bg-aoraki-red mr-4 rounded-full"></div>
				<h2 class="text-4xl lg:text-5xl font-bold text-slate-800">
					OUR <span class="text-aoraki-red">SERVICES</span>
				</h2>
			</div>
			<p class="text-xl text-gray-600 max-w-3xl mx-auto">
				We specialize in creating innovative spaces that blend functionality with aesthetic appeal, delivering projects that exceed expectations.
			</p>
		</div>

		<!-- Services Grid -->
		<div class="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
			{#each services as service}
				<div class="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300 group">
					<div class="text-4xl mb-6 group-hover:scale-110 transition-transform duration-300">
						{service.icon}
					</div>
					<h3 class="text-xl font-bold text-slate-800 mb-4">{service.title}</h3>
					<p class="text-gray-600 leading-relaxed">{service.description}</p>
					<div class="mt-6 flex items-center text-aoraki-red font-medium">
						Learn more
						<svg class="w-4 h-4 ml-2 group-hover:translate-x-2 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
							<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 8l4 4m0 0l-4 4m4-4H3"></path>
						</svg>
					</div>
				</div>
			{/each}
		</div>
	</div>
</section>