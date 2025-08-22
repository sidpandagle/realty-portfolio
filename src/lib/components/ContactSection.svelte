<script lang="ts">
	let form = {
		name: '',
		email: '',
		subject: '',
		message: ''
	};

	let isSubmitting = false;

	async function handleSubmit(event: Event) {
		event.preventDefault();
		isSubmitting = true;
		
		// Simulate form submission
		await new Promise(resolve => setTimeout(resolve, 1000));
		
		alert('Thank you for your message! We will get back to you soon.');
		form = { name: '', email: '', subject: '', message: '' };
		isSubmitting = false;
	}
</script>

<section id="contact" class="py-20 bg-gradient-to-br from-slate-800 to-slate-900">
	<div class="container mx-auto px-6 lg:px-8">
		<div class="grid lg:grid-cols-2 gap-16 items-start">
			<!-- Contact Information -->
			<div class="text-white">
				<div class="flex items-center mb-6">
					<div class="w-3 h-16 bg-aoraki-red mr-4 rounded-full"></div>
					<h2 class="text-4xl lg:text-5xl font-bold">
						GET IN <span class="text-aoraki-red">TOUCH</span>
					</h2>
				</div>
				
				<p class="text-xl text-gray-300 mb-12 leading-relaxed">
					Ready to start your next project? Contact us today to discuss how we can bring your vision to life.
				</p>

				<div class="space-y-8">
					<div class="flex items-start space-x-4">
						<div class="w-12 h-12 bg-aoraki-red rounded-full flex items-center justify-center flex-shrink-0">
							<svg class="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
								<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"></path>
								<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"></path>
							</svg>
						</div>
						<div>
							<h3 class="text-lg font-semibold mb-2">Office Location</h3>
							<p class="text-gray-300">123 Business District<br />Auckland, New Zealand</p>
						</div>
					</div>

					<div class="flex items-start space-x-4">
						<div class="w-12 h-12 bg-aoraki-red rounded-full flex items-center justify-center flex-shrink-0">
							<svg class="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
								<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"></path>
							</svg>
						</div>
						<div>
							<h3 class="text-lg font-semibold mb-2">Phone Number</h3>
							<p class="text-gray-300">+64 9 123 4567</p>
						</div>
					</div>

					<div class="flex items-start space-x-4">
						<div class="w-12 h-12 bg-aoraki-red rounded-full flex items-center justify-center flex-shrink-0">
							<svg class="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 20 20">
								<path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z"></path>
								<path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z"></path>
							</svg>
						</div>
						<div>
							<h3 class="text-lg font-semibold mb-2">Email Address</h3>
							<a href="mailto:aorakirealty@gmail.com" class="text-aoraki-red hover:text-red-300 transition-colors">
								aorakirealty@gmail.com
							</a>
						</div>
					</div>
				</div>
			</div>

			<!-- Contact Form -->
			<div class="bg-white rounded-2xl p-8 shadow-2xl">
				<h3 class="text-2xl font-bold text-slate-800 mb-6">Send us a Message</h3>
				
				<form onsubmit={handleSubmit} class="space-y-6">
					<div class="grid md:grid-cols-2 gap-6">
						<div>
							<label for="name" class="block text-sm font-medium text-gray-700 mb-2">Full Name</label>
							<input 
								type="text" 
								id="name" 
								bind:value={form.name}
								required
								class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-aoraki-red focus:border-transparent transition-colors"
								placeholder="Your full name"
							/>
						</div>
						<div>
							<label for="email" class="block text-sm font-medium text-gray-700 mb-2">Email Address</label>
							<input 
								type="email" 
								id="email" 
								bind:value={form.email}
								required
								class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-aoraki-red focus:border-transparent transition-colors"
								placeholder="your.email@example.com"
							/>
						</div>
					</div>

					<div>
						<label for="subject" class="block text-sm font-medium text-gray-700 mb-2">Subject</label>
						<input 
							type="text" 
							id="subject" 
							bind:value={form.subject}
							required
							class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-aoraki-red focus:border-transparent transition-colors"
							placeholder="Project inquiry, consultation, etc."
						/>
					</div>

					<div>
						<label for="message" class="block text-sm font-medium text-gray-700 mb-2">Message</label>
						<textarea 
							id="message" 
							bind:value={form.message}
							required
							rows="5"
							class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-aoraki-red focus:border-transparent transition-colors resize-none"
							placeholder="Tell us about your project requirements..."
						></textarea>
					</div>

					<button 
						type="submit" 
						disabled={isSubmitting}
						class="w-full bg-aoraki-red text-white py-4 px-6 rounded-lg font-semibold hover:bg-red-700 transition-colors disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center"
					>
						{#if isSubmitting}
							<svg class="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
								<circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle>
								<path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
							</svg>
							Sending...
						{:else}
							Send Message
						{/if}
					</button>
				</form>
			</div>
		</div>
	</div>
</section>