<script lang="ts">
	import { onMount, onDestroy } from 'svelte';

	let isScrolled = true;
	let mobileMenuOpen = false;

	let menuRef: HTMLElement | null = null;
	let buttonRef: HTMLElement | null = null;

	function closeMenu() {
		mobileMenuOpen = false;
	}

	function handleDocumentClick(e: MouseEvent) {
		if (!mobileMenuOpen) return;
		const target = e.target as Node | null;
		if (!target) return;
		// If click is outside the menu and outside the toggle button, close
		if (menuRef && !menuRef.contains(target) && buttonRef && !buttonRef.contains(target)) {
			closeMenu();
		}
	}

	onMount(() => {
		if (typeof document === 'undefined') return;
		document.addEventListener('click', handleDocumentClick);
	});

	onDestroy(() => {
		if (typeof document === 'undefined') return;
		document.removeEventListener('click', handleDocumentClick);
	});
</script>

<nav class="fixed top-0 left-0 right-0 z-50 transition-all duration-300 {isScrolled ? 'bg-white/95 backdrop-blur-md shadow-lg' : 'bg-transparent'}">
	<div class="container mx-auto px-6 lg:px-8">
		<div class="flex items-center justify-between h-20">
			<!-- Logo -->
			<div class="flex items-center space-x-3">
				<div class="relative">
					<div class="w-10 h-10 bg-aoraki-red transform rotate-45"></div>
					<div class="absolute inset-2 bg-white transform rotate-45"></div>
					<div class="absolute inset-3 bg-aoraki-red transform rotate-45"></div>
				</div>
				<div>
					<div class="text-lg font-bold tracking-wider {isScrolled ? 'text-slate-800' : 'text-white'}">AORAKI</div>
					<div class="text-xs tracking-widest {isScrolled ? 'text-slate-600' : 'text-gray-300'}">R E A L T Y</div>
				</div>
			</div>

			<!-- Desktop Navigation -->
			<div class="hidden md:flex items-center space-x-8">
				<a href="#home" class="nav-link {isScrolled ? 'text-slate-700 hover:text-aoraki-red' : 'text-white hover:text-red-300'} font-medium transition-colors">Home</a>
				<a href="#about" class="nav-link {isScrolled ? 'text-slate-700 hover:text-aoraki-red' : 'text-white hover:text-red-300'} font-medium transition-colors">About</a>
				<a href="#services" class="nav-link {isScrolled ? 'text-slate-700 hover:text-aoraki-red' : 'text-white hover:text-red-300'} font-medium transition-colors">Services</a>
				<a href="#projects" class="nav-link {isScrolled ? 'text-slate-700 hover:text-aoraki-red' : 'text-white hover:text-red-300'} font-medium transition-colors">Projects</a>
				<a href="#contact" class="nav-link {isScrolled ? 'text-slate-700 hover:text-aoraki-red' : 'text-white hover:text-red-300'} font-medium transition-colors">Contact</a>
				<a href="mailto:aorakirealty@gmail.com" class="bg-aoraki-red text-white px-6 py-2 rounded-full hover:bg-red-700 transition-colors font-medium">
					Get Quote
				</a>
			</div>

			<!-- Mobile menu button -->
			<button
				bind:this={buttonRef}
				class="md:hidden {isScrolled ? 'text-slate-800' : 'text-white'}"
				on:click={() => (mobileMenuOpen = !mobileMenuOpen)}
				aria-label="Toggle mobile menu"
			>
				<svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
					<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16"></path>
				</svg>
			</button>
		</div>

		<!-- Mobile Navigation -->
		{#if mobileMenuOpen}
			<div class="md:hidden bg-white border-t" bind:this={menuRef}>
				<div class="px-2 pt-2 pb-3 space-y-1">
					<a href="#home" on:click={closeMenu} class="block px-3 py-2 text-slate-700 hover:bg-gray-100 rounded-md">Home</a>
					<a href="#about" on:click={closeMenu} class="block px-3 py-2 text-slate-700 hover:bg-gray-100 rounded-md">About</a>
					<a href="#services" on:click={closeMenu} class="block px-3 py-2 text-slate-700 hover:bg-gray-100 rounded-md">Services</a>
					<a href="#projects" on:click={closeMenu} class="block px-3 py-2 text-slate-700 hover:bg-gray-100 rounded-md">Projects</a>
					<a href="#contact" on:click={closeMenu} class="block px-3 py-2 text-slate-700 hover:bg-gray-100 rounded-md">Contact</a>
					<a href="mailto:aorakirealty@gmail.com" on:click={closeMenu} class="block mx-3 mt-4 bg-aoraki-red text-white px-4 py-2 rounded-full text-center">
						Get Quote
					</a>
				</div>
			</div>
		{/if}
	</div>
</nav>