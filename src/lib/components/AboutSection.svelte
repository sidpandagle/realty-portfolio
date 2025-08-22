<script lang="ts">
	// Modern About section with clean design
</script>

<section class="py-32 bg-white relative overflow-hidden">
	<!-- Background Pattern -->
	<div class="absolute inset-0 opacity-5">
		<svg class="w-full h-full" viewBox="0 0 100 100" fill="none">
			<defs>
				<pattern id="aboutGrid" width="8" height="8" patternUnits="userSpaceOnUse">
					<circle cx="4" cy="4" r="0.5" fill="#dc2626"/>
				</pattern>
			</defs>
			<rect width="100%" height="100%" fill="url(#aboutGrid)" />
		</svg>
	</div>

	<!-- Floating Elements -->
	<div class="absolute top-40 left-20 w-32 h-32 bg-blue-500/10 rounded-full blur-3xl"></div>
	<div class="absolute bottom-20 right-16 w-24 h-24 bg-aoraki-red/10 rounded-full blur-2xl"></div>

	<div class="container mx-auto px-6 lg:px-8">
		<div class="grid lg:grid-cols-2 gap-20 items-center">
			<!-- Left Content -->
			<div class="space-y-10">
				<!-- Section Header -->
				<div class="space-y-6">
					<div class="flex items-center space-x-4">
						<div class="w-16 h-1 bg-gradient-to-r from-aoraki-red to-red-700 rounded-full"></div>
						<span class="text-sm font-semibold text-aoraki-red uppercase tracking-wider">About Our Company</span>
					</div>
					
					<h2 class="text-4xl lg:text-5xl font-black text-slate-800 leading-tight">
						Building Excellence<br/>
						<span class="text-aoraki-red">Since 2002</span>
					</h2>
				</div>

				<!-- Company Description -->
				<div class="space-y-6">
					<p class="text-xl text-slate-600 leading-relaxed">
						At Aoraki Realty, we don't just build properties – we craft communities. With over two decades of experience in New Zealand's real estate landscape, we've established ourselves as pioneers in innovative development and design.
					</p>
					
					<p class="text-lg text-slate-600 leading-relaxed">
						Our commitment to excellence extends beyond construction. We create spaces where families thrive, businesses flourish, and communities come together. Every project reflects our dedication to quality, sustainability, and architectural innovation.
					</p>
				</div>

				<!-- Key Values -->
				<div class="grid grid-cols-2 gap-6">
					<div class="flex items-start space-x-3">
						<div class="w-3 h-3 bg-aoraki-red rounded-full mt-2 flex-shrink-0"></div>
						<div>
							<h3 class="font-semibold text-slate-800 mb-1">Innovation</h3>
							<p class="text-sm text-slate-600">Cutting-edge design meets practical functionality</p>
						</div>
					</div>
					<div class="flex items-start space-x-3">
						<div class="w-3 h-3 bg-aoraki-red rounded-full mt-2 flex-shrink-0"></div>
						<div>
							<h3 class="font-semibold text-slate-800 mb-1">Quality</h3>
							<p class="text-sm text-slate-600">Premium materials and expert craftsmanship</p>
						</div>
					</div>
					<div class="flex items-start space-x-3">
						<div class="w-3 h-3 bg-aoraki-red rounded-full mt-2 flex-shrink-0"></div>
						<div>
							<h3 class="font-semibold text-slate-800 mb-1">Sustainability</h3>
							<p class="text-sm text-slate-600">Eco-friendly solutions for the future</p>
						</div>
					</div>
					<div class="flex items-start space-x-3">
						<div class="w-3 h-3 bg-aoraki-red rounded-full mt-2 flex-shrink-0"></div>
						<div>
							<h3 class="font-semibold text-slate-800 mb-1">Community</h3>
							<p class="text-sm text-slate-600">Building connections that last</p>
						</div>
					</div>
				</div>

				<!-- CTA Button -->
				<div class="pt-4">
					<button class="bg-gradient-to-r from-aoraki-red to-red-700 text-white px-8 py-4 rounded-lg font-semibold hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1">
						Learn More About Us
					</button>
				</div>
			</div>

			<!-- Right Content - Visual Elements -->
			<div class="relative">
				<!-- Brand Showcase -->
				<div class="relative z-10 bg-gradient-to-br from-slate-50 to-gray-100 rounded-3xl p-12 shadow-xl">
					<!-- Large Brand Logo -->
					<div class="text-center mb-12">
						<div class="flex justify-center mb-8">
							<div class="relative">
								<div class="w-24 h-24 bg-gradient-to-br from-aoraki-red to-red-700 transform rotate-45 rounded-xl shadow-lg"></div>
								<div class="absolute inset-4 bg-white transform rotate-45 rounded-lg"></div>
								<div class="absolute inset-6 bg-gradient-to-br from-aoraki-red to-red-700 transform rotate-45 rounded-lg"></div>
							</div>
						</div>
						
						<h1 class="text-5xl font-black text-slate-800 tracking-wider mb-3">AORAKI</h1>
						<p class="text-2xl font-light text-slate-600 tracking-[0.3em] mb-8">REALTY</p>
						
						<div class="w-24 h-1 bg-gradient-to-r from-aoraki-red to-red-700 mx-auto rounded-full"></div>
					</div>

					<!-- Company Stats -->
					<div class="space-y-8">
						<div class="text-center">
							<div class="text-lg font-semibold text-slate-800 mb-4">Trusted by New Zealand</div>
							<div class="grid grid-cols-3 gap-6">
								<div class="text-center">
									<div class="text-2xl font-black text-aoraki-red">2002</div>
									<div class="text-xs text-slate-600">Founded</div>
								</div>
								<div class="text-center">
									<div class="text-2xl font-black text-aoraki-red">150+</div>
									<div class="text-xs text-slate-600">Projects</div>
								</div>
								<div class="text-center">
									<div class="text-2xl font-black text-aoraki-red">5★</div>
									<div class="text-xs text-slate-600">Rating</div>
								</div>
							</div>
						</div>

						<!-- Contact Badge -->
						<div class="bg-white rounded-2xl p-6 shadow-lg">
							<div class="flex items-center justify-between">
								<div>
									<h3 class="font-bold text-slate-800 mb-1">Get in Touch</h3>
									<p class="text-sm text-slate-600">Ready to start your project?</p>
								</div>
								<div class="w-12 h-12 bg-aoraki-red rounded-full flex items-center justify-center">
									<svg class="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 20 20">
										<path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z"></path>
										<path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z"></path>
									</svg>
								</div>
							</div>
						</div>
					</div>
				</div>
				
				<!-- Decorative Elements -->
				<div class="absolute -top-8 -right-8 w-32 h-32 bg-aoraki-red/20 rounded-full blur-3xl"></div>
				<div class="absolute -bottom-8 -left-8 w-24 h-24 bg-blue-500/20 rounded-full blur-2xl"></div>
			</div>
		</div>
	</div>
</section>