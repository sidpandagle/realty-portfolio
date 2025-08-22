<script lang="ts">
	const projects = [
		{
			title: 'Metropolitan Office Tower',
			category: 'Office Space',
			image: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=400&h=300&fit=crop',
			description: 'A 25-story modern office complex featuring sustainable design and state-of-the-art facilities.',
			status: 'Completed 2023'
		},
		{
			title: 'Riverside Commercial Plaza',
			category: 'Commercial Complex',
			image: 'https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=400&h=300&fit=crop',
			description: 'Mixed-use development combining retail, dining, and office spaces with panoramic river views.',
			status: 'Completed 2022'
		},
		{
			title: 'Garden View Residences',
			category: 'Residential',
			image: 'https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?w=400&h=300&fit=crop',
			description: 'Luxury residential apartments with landscaped gardens and family-friendly amenities.',
			status: 'Completed 2023'
		},
		{
			title: 'Tech Hub Innovation Center',
			category: 'Office Space',
			image: 'https://images.unsplash.com/photo-1497366754035-f200968a6e72?w=400&h=300&fit=crop',
			description: 'Cutting-edge workspace designed for technology companies and startups.',
			status: 'In Progress'
		},
		{
			title: 'Heritage Square Shopping',
			category: 'Commercial Complex',
			image: 'https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=400&h=300&fit=crop',
			description: 'Modern shopping complex blending contemporary design with historical architecture.',
			status: 'Planning Phase'
		},
		{
			title: 'Skyline Residential Tower',
			category: 'Residential',
			image: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=400&h=300&fit=crop',
			description: 'High-rise residential building offering premium living with city skyline views.',
			status: 'In Progress'
		}
	];

	let selectedCategory = 'All';
	const categories = ['All', 'Office Space', 'Commercial Complex', 'Residential'];

	$: filteredProjects = selectedCategory === 'All' 
		? projects 
		: projects.filter(project => project.category === selectedCategory);
</script>

<section id="projects" class="py-24 bg-white">
	<div class="container mx-auto px-6 lg:px-8">
		<!-- Section Header -->
		<div class="text-center mb-16">
			<div class="flex items-center justify-center mb-6">
				<div class="w-3 h-16 bg-aoraki-red mr-4 rounded-full"></div>
				<h2 class="text-4xl lg:text-5xl font-bold text-slate-800">
					OUR <span class="text-aoraki-red">PROJECTS</span>
				</h2>
			</div>
			<p class="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
				Explore our portfolio of successful developments that showcase our commitment to excellence and innovation.
			</p>

			<!-- Category Filter -->
			<div class="flex flex-wrap justify-center gap-4">
				{#each categories as category}
					<button 
						class="px-6 py-3 rounded-full font-medium transition-all duration-300 {selectedCategory === category ? 'bg-aoraki-red text-white shadow-lg' : 'bg-gray-100 text-gray-600 hover:bg-gray-200'}"
						onclick={() => selectedCategory = category}
					>
						{category}
					</button>
				{/each}
			</div>
		</div>

		<!-- Projects Grid -->
		<div class="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
			{#each filteredProjects as project}
				<div class="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300 group">
					<div class="relative overflow-hidden">
						<img 
							src={project.image} 
							alt={project.title}
							class="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500"
						/>
						<div class="absolute top-4 left-4">
							<span class="bg-aoraki-red text-white px-3 py-1 rounded-full text-sm font-medium">
								{project.category}
							</span>
						</div>
						<div class="absolute top-4 right-4">
							<span class="bg-white/90 text-slate-700 px-3 py-1 rounded-full text-sm font-medium">
								{project.status}
							</span>
						</div>
					</div>
					<div class="p-6">
						<h3 class="text-xl font-bold text-slate-800 mb-3">{project.title}</h3>
						<p class="text-gray-600 leading-relaxed mb-4">{project.description}</p>
						<button class="flex items-center text-aoraki-red font-medium hover:gap-3 transition-all duration-300">
							View Details
							<svg class="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
								<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 8l4 4m0 0l-4 4m4-4H3"></path>
							</svg>
						</button>
					</div>
				</div>
			{/each}
		</div>
	</div>
</section>