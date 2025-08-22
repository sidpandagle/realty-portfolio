<script lang="ts">
	const currentYear = new Date().getFullYear();
</script>

<footer class="bg-slate-900 text-white py-16">
	<div class="container mx-auto px-6 lg:px-8">
		<div class="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
			<!-- Company Info -->
			<div class="lg:col-span-2">
				<div class="flex items-center space-x-3 mb-6">
					<div class="relative">
						<div class="w-12 h-12 bg-aoraki-red transform rotate-45"></div>
						<div class="absolute inset-2 bg-white transform rotate-45"></div>
						<div class="absolute inset-3 bg-aoraki-red transform rotate-45"></div>
					</div>
					<div>
						<div class="text-xl font-bold tracking-wider">AORAKI</div>
						<div class="text-sm tracking-widest text-gray-300">R E A L T Y</div>
					</div>
				</div>
				<p class="text-gray-300 leading-relaxed max-w-md mb-6">
					Creating innovative and high-quality office spaces, commercial complexes, and residential housing flats since 2002. Building communities where businesses and families thrive.
				</p>
				<div class="flex space-x-4">
					<a href="https://facebook.com" aria-label="Facebook" class="w-10 h-10 bg-aoraki-red rounded-full flex items-center justify-center hover:bg-red-700 transition-colors">
						<svg class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
							<path fill-rule="evenodd" d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" clip-rule="evenodd" />
						</svg>
					</a>
					<a href="https://twitter.com" aria-label="Twitter" class="w-10 h-10 bg-aoraki-red rounded-full flex items-center justify-center hover:bg-red-700 transition-colors">
						<svg class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
							<path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
						</svg>
					</a>
					<a href="https://pinterest.com" aria-label="Pinterest" class="w-10 h-10 bg-aoraki-red rounded-full flex items-center justify-center hover:bg-red-700 transition-colors">
						<svg class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
							<path fill-rule="evenodd" d="M12.017 0C5.396 0 .029 5.367.029 11.987c0 5.079 3.158 9.417 7.618 11.174-.105-.949-.199-2.403.041-3.439.219-.937 1.406-5.957 1.406-5.957s-.359-.72-.359-1.781c0-1.663.967-2.911 2.168-2.911 1.024 0 1.518.769 1.518 1.688 0 1.029-.653 2.567-.992 3.992-.285 1.193.6 2.165 1.775 2.165 2.128 0 3.768-2.245 3.768-5.487 0-2.861-2.063-4.869-5.008-4.869-3.41 0-5.409 2.562-5.409 5.199 0 1.033.394 2.143.889 2.741.099.12.112.225.085.346-.09.375-.294 1.194-.334 1.363-.053.225-.172.271-.402.165-1.495-.69-2.433-2.878-2.433-4.646 0-3.776 2.748-7.252 7.92-7.252 4.158 0 7.392 2.967 7.392 6.923 0 4.135-2.607 7.462-6.233 7.462-1.214 0-2.357-.629-2.758-1.378l-.749 2.848c-.269 1.045-1.004 2.352-1.498 3.146 1.123.345 2.306.535 3.55.535 6.624 0 11.99-5.367 11.99-11.988C24.007 5.367 18.641.001 12.017.001z" clip-rule="evenodd" />
						</svg>
					</a>
					<a href="https://linkedin.com" aria-label="LinkedIn" class="w-10 h-10 bg-aoraki-red rounded-full flex items-center justify-center hover:bg-red-700 transition-colors">
						<svg class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
							<path fill-rule="evenodd" d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" clip-rule="evenodd" />
						</svg>
					</a>
				</div>
			</div>

			<!-- Quick Links -->
			<div>
				<h3 class="text-lg font-semibold mb-6">Quick Links</h3>
				<ul class="space-y-4">
					<li><a href="#home" class="text-gray-300 hover:text-white transition-colors">Home</a></li>
					<li><a href="#about" class="text-gray-300 hover:text-white transition-colors">About Us</a></li>
					<li><a href="#services" class="text-gray-300 hover:text-white transition-colors">Services</a></li>
					<li><a href="#projects" class="text-gray-300 hover:text-white transition-colors">Projects</a></li>
					<li><a href="#contact" class="text-gray-300 hover:text-white transition-colors">Contact</a></li>
				</ul>
			</div>

			<!-- Services -->
			<div>
				<h3 class="text-lg font-semibold mb-6">Our Services</h3>
				<ul class="space-y-4">
					<li><span class="text-gray-300">Office Spaces</span></li>
					<li><span class="text-gray-300">Commercial Complexes</span></li>
					<li><span class="text-gray-300">Residential Housing</span></li>
					<li><span class="text-gray-300">Project Management</span></li>
					<li><span class="text-gray-300">Architecture Consulting</span></li>
				</ul>
			</div>
		</div>

		<!-- Bottom Section -->
		<div class="border-t border-gray-700 pt-8">
			<div class="flex flex-col md:flex-row justify-between items-center">
				<p class="text-gray-300 text-sm mb-4 md:mb-0">
					© {currentYear} Aoraki Realty. All rights reserved.
				</p>
				<div class="flex space-x-6 text-sm">
					<a href="/privacy" class="text-gray-300 hover:text-white transition-colors">Privacy Policy</a>
					<a href="/terms" class="text-gray-300 hover:text-white transition-colors">Terms of Service</a>
					<a href="/cookies" class="text-gray-300 hover:text-white transition-colors">Cookie Policy</a>
				</div>
			</div>
		</div>
	</div>
</footer>