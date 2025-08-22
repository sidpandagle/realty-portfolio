<script lang="ts">
	// Modern Hero section with clean design
</script>

<section class="relative py-32 bg-gradient-to-br from-slate-50 to-gray-100 overflow-hidden">
	<!-- Background Pattern -->
	<div class="absolute inset-0 opacity-5">
		<svg class="w-full h-full" viewBox="0 0 100 100" fill="none">
			<defs>
				<pattern id="heroGrid" width="10" height="10" patternUnits="userSpaceOnUse">
					<path d="M 10 0 L 0 0 0 10" fill="none" stroke="#dc2626" stroke-width="0.5"/>
				</pattern>
			</defs>
			<rect width="100%" height="100%" fill="url(#heroGrid)" />
		</svg>
	</div>
	
	<!-- Floating Elements -->
	<div class="absolute top-20 right-20 w-32 h-32 bg-aoraki-red/10 rounded-full blur-3xl"></div>
	<div class="absolute bottom-32 left-16 w-24 h-24 bg-blue-500/10 rounded-full blur-2xl"></div>

	<div class="container mx-auto px-6 lg:px-8">
		<div class="grid lg:grid-cols-2 gap-16 items-center">
			<!-- Left Content -->
			<div class="space-y-8">
				<!-- Brand Logo -->
				<div class="flex items-center space-x-4">
					<div class="relative">
						<div class="w-16 h-16 bg-gradient-to-br from-aoraki-red to-red-700 transform rotate-45 rounded-lg shadow-lg"></div>
						<div class="absolute inset-3 bg-white transform rotate-45 rounded-sm"></div>
						<div class="absolute inset-4 bg-gradient-to-br from-aoraki-red to-red-700 transform rotate-45 rounded-sm"></div>
					</div>
					<div>
						<h1 class="text-3xl font-black text-slate-800 tracking-wider">AORAKI</h1>
						<p class="text-lg font-light text-slate-600 tracking-[0.3em]">REALTY</p>
					</div>
				</div>

				<!-- Main Heading -->
				<div class="space-y-6">
					<div class="flex items-center space-x-4">
						<div class="w-1 h-16 bg-gradient-to-b from-aoraki-red to-red-700 rounded-full"></div>
						<div>
							<h2 class="text-5xl lg:text-6xl font-black text-slate-800 leading-tight">
								COMPANY<br/>
								<span class="text-aoraki-red">PROFILE</span>
							</h2>
						</div>
					</div>
					<p class="text-xl text-slate-600 leading-relaxed max-w-lg">
						Crafting innovative real estate solutions since 2002. We transform spaces into thriving communities where businesses and families flourish.
					</p>
				</div>

				<!-- Key Stats -->
				<div class="grid grid-cols-3 gap-8 pt-8">
					<div class="text-center">
						<div class="text-3xl font-black text-aoraki-red">22+</div>
						<div class="text-sm text-slate-600 font-medium">Years Experience</div>
					</div>
					<div class="text-center">
						<div class="text-3xl font-black text-aoraki-red">150+</div>
						<div class="text-sm text-slate-600 font-medium">Projects Delivered</div>
					</div>
					<div class="text-center">
						<div class="text-3xl font-black text-aoraki-red">98%</div>
						<div class="text-sm text-slate-600 font-medium">Client Satisfaction</div>
					</div>
				</div>

				<!-- Contact CTA -->
				<div class="flex items-center space-x-4 pt-8">
					<div class="w-12 h-12 bg-aoraki-red rounded-full flex items-center justify-center shadow-lg">
						<svg class="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 20 20">
							<path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z"></path>
							<path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z"></path>
						</svg>
					</div>
					<div>
						<a href="mailto:aorakirealty@gmail.com" class="text-lg font-semibold text-slate-800 hover:text-aoraki-red transition-colors">
							aorakirealty@gmail.com
						</a>
						<p class="text-sm text-slate-500">Get in touch for your next project</p>
					</div>
				</div>
			</div>

			<!-- Right Content - Modern Building Image -->
			<div class="relative">
				<div class="relative z-10">
					<!-- Main Image Container -->
					<div class="relative overflow-hidden rounded-3xl shadow-2xl">
						<img 
							src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=400&h=300&fit=crop" 
							alt="Modern architectural building"
							class="w-full h-[600px] object-cover"
						/>
						<!-- Overlay Gradient -->
						<div class="absolute inset-0 bg-gradient-to-t from-slate-900/20 via-transparent to-transparent"></div>
						
						<!-- Floating Card -->
						<div class="absolute bottom-8 left-8 right-8 bg-white/95 backdrop-blur-sm rounded-2xl p-6 shadow-lg">
							<div class="flex items-center justify-between">
								<div>
									<h3 class="font-bold text-slate-800">Premium Developments</h3>
									<p class="text-sm text-slate-600">Excellence in every detail</p>
								</div>
								<div class="w-12 h-12 bg-aoraki-red/10 rounded-full flex items-center justify-center">
									<svg class="w-6 h-6 text-aoraki-red" fill="none" stroke="currentColor" viewBox="0 0 24 24">
										<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"></path>
									</svg>
								</div>
							</div>
						</div>
					</div>
				</div>
				
				<!-- Decorative Elements -->
				<div class="absolute -top-6 -right-6 w-24 h-24 bg-aoraki-red/20 rounded-full blur-2xl"></div>
				<div class="absolute -bottom-6 -left-6 w-32 h-32 bg-blue-500/20 rounded-full blur-3xl"></div>
			</div>
		</div>
	</div>
</section>