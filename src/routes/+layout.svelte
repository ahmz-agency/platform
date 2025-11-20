<script lang="ts">
	import '../app.css';
    import { slide, fly } from 'svelte/transition';
    import { page } from '$app/stores';
    
    let isMenuOpen = false;

    function toggleMenu() {
        isMenuOpen = !isMenuOpen;
    }

    function closeMenu() {
        isMenuOpen = false;
    }

    // Close menu on route change
    $: if ($page.url.pathname) {
        closeMenu();
    }
</script>

<div class="app">
	<header class="site-header">
		<div class="container header-content">
			<a href="/" class="logo" on:click={closeMenu}>AHMZ<span class="dot">.</span></a>
			
            <!-- Desktop Nav -->
            <nav class="desktop-nav">
				<a href="/">Home</a>
				<a href="/about">About</a>
				<a href="/services">Services</a>
                <a href="/industries">Industries</a>
                <a href="/insights">Insights</a>
                <a href="/contact">Contact</a>
				<button class="btn-header" disabled>Coming Soon</button>
			</nav>

            <!-- Mobile Menu Button -->
            <button class="mobile-menu-btn" on:click={toggleMenu} aria-label="Toggle Menu">
                <div class="hamburger" class:open={isMenuOpen}>
                    <span></span>
                    <span></span>
                    <span></span>
                </div>
            </button>
		</div>

        <!-- Mobile Nav -->
        {#if isMenuOpen}
            <nav class="mobile-nav" transition:slide={{ duration: 300 }}>
                <div class="container mobile-nav-content">
                    <a href="/" on:click={closeMenu}>Home</a>
                    <a href="/about" on:click={closeMenu}>About</a>
                    <a href="/services" on:click={closeMenu}>Services</a>
                    <a href="/industries" on:click={closeMenu}>Industries</a>
                    <a href="/insights" on:click={closeMenu}>Insights</a>
                    <a href="/contact" on:click={closeMenu}>Contact</a>
                    <button class="btn-header mobile-btn" disabled>Coming Soon</button>
                </div>
            </nav>
        {/if}
	</header>

	<main>
		<slot />
	</main>

	<footer class="site-footer">
		<div class="container">
			<div class="footer-grid">
				<div class="footer-col">
					<h3>AHMZ Agency</h3>
					<p>Managed Network of Specialists.</p>
                    <p class="tagline">Quality without the chaos.</p>
                    <div class="company-details">
                        <p>AHMZ Agency B.V.</p>
                        <p>Prins Hendrikkade 21 E, 1012TL Amsterdam</p>
                        <p>KVK: 98277553</p>
                        <p>VAT: NL868426696B01</p>
                    </div>
				</div>
				<div class="footer-col">
					<h4>Legal</h4>
					<a href="/terms">Terms & Conditions</a>
					<a href="/privacy">Privacy Policy</a>
				</div>
				<div class="footer-col">
					<h4>Connect</h4>
					<a href="mailto:hello@ahmz.agency">hello@ahmz.agency</a>
                    <a href="tel:+31627916439">+31 6 27 91 64 39</a>
                    <div class="socials">
                        <!-- Social icons placeholder -->
                    </div>
				</div>
			</div>
			<div class="copyright">
				&copy; {new Date().getFullYear()} AHMZ Agency B.V. All rights reserved.
			</div>
		</div>
	</footer>
</div>

<style>
	.site-header {
		padding: 1.25rem 0;
		background: rgba(2, 6, 23, 0.9); /* Darker glass effect */
        backdrop-filter: blur(12px);
		position: sticky;
		top: 0;
		z-index: 100;
        border-bottom: 1px solid var(--border-color);
        transition: all 0.3s ease;
	}

	.header-content {
		display: flex;
		justify-content: space-between;
		align-items: center;
	}

    .logo {
        font-family: var(--font-display);
        font-size: 1.75rem;
        font-weight: 800;
        letter-spacing: -0.03em;
        color: var(--text-color);
        display: flex;
        align-items: center;
        gap: 2px;
        padding: 0.2rem 0.5rem;
        margin-left: -0.5rem;
        position: relative;
        z-index: 102; /* Above mobile menu */
        transition: color 0.2s;
    }
    
    .logo::before {
        content: '';
        position: absolute;
        inset: 0;
        background: var(--accent-primary);
        z-index: -1;
        transform: scaleY(0);
        transform-origin: bottom;
        transition: transform 0.2s cubic-bezier(0.4, 0, 0.2, 1);
    }
    
    .logo:hover {
        color: #fff;
    }
    
    .logo:hover::before {
        transform: scaleY(1);
    }
    
    .logo .dot {
        color: var(--accent-primary);
        font-size: 2rem;
        line-height: 1;
        transition: color 0.2s;
    }
    
    .logo:hover .dot {
        color: #fff;
    }

    /* Desktop Nav */
    .desktop-nav {
        display: flex;
        align-items: center;
        gap: 1.5rem;
    }

    .desktop-nav a {
        font-weight: 600;
        font-size: 0.95rem;
        color: var(--text-muted);
        text-transform: uppercase;
        letter-spacing: 0.05em;
        padding: 0.5rem 0.75rem;
        position: relative;
        z-index: 1;
        transition: color 0.2s;
    }
    
    .desktop-nav a::before {
        content: '';
        position: absolute;
        inset: 0;
        background: var(--accent-secondary);
        z-index: -1;
        transform: scaleX(0);
        transform-origin: right;
        transition: transform 0.2s cubic-bezier(0.4, 0, 0.2, 1);
    }

    .desktop-nav a:not(.btn-header):hover {
        color: #000;
    }
    
    .desktop-nav a:not(.btn-header):hover::before {
        transform: scaleX(1);
        transform-origin: left;
    }
    
    .btn-header {
        background: var(--accent-primary);
        color: #fff;
        padding: 0.6rem 1.2rem;
        border-radius: var(--border-radius);
        font-weight: 600;
        transition: all 0.2s;
        border: none;
        cursor: pointer;
        font-family: var(--font-main);
        font-size: 0.95rem;
        white-space: nowrap;
    }
    
    .btn-header:hover:not(:disabled) {
        background: var(--accent-primary-hover);
        transform: translateY(-1px);
        box-shadow: 0 4px 12px rgba(59, 130, 246, 0.3);
    }

    .btn-header:disabled {
        background: var(--accent-secondary);
        color: #000;
        cursor: not-allowed;
        opacity: 1;
        box-shadow: none;
    }

    /* Mobile Menu Button */
    .mobile-menu-btn {
        display: none;
        background: none;
        border: none;
        cursor: pointer;
        z-index: 102;
        padding: 0.5rem;
    }

    .hamburger {
        width: 30px;
        height: 20px;
        position: relative;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
    }

    .hamburger span {
        display: block;
        width: 100%;
        height: 2px;
        background-color: var(--text-color);
        transition: all 0.3s ease;
    }

    .hamburger.open span:nth-child(1) {
        transform: translateY(9px) rotate(45deg);
    }

    .hamburger.open span:nth-child(2) {
        opacity: 0;
    }

    .hamburger.open span:nth-child(3) {
        transform: translateY(-9px) rotate(-45deg);
    }

    /* Mobile Nav */
    .mobile-nav {
        position: absolute;
        top: 100%;
        left: 0;
        width: 100%;
        background: var(--bg-secondary);
        border-bottom: 1px solid var(--border-color);
        padding: 2rem 0;
        box-shadow: var(--shadow-lg);
    }

    .mobile-nav-content {
        display: flex;
        flex-direction: column;
        gap: 1.5rem;
        text-align: center;
    }

    .mobile-nav a {
        font-size: 1.2rem;
        font-weight: 700;
        text-transform: uppercase;
        color: var(--text-color);
        padding: 0.5rem;
    }

    .mobile-nav a:hover {
        color: var(--accent-primary);
    }

    .mobile-btn {
        margin-top: 1rem;
        width: 100%;
    }

	.site-footer {
		padding: 6rem 0 2rem;
		background: var(--bg-color);
        border-top: 2px solid var(--border-color);
        position: relative;
	}

    .site-footer a {
        display: block;
        margin-bottom: 0.75rem;
        color: var(--text-muted);
        font-size: 1rem;
        transition: all 0.2s;
        width: fit-content;
    }
    
    .site-footer a:hover {
        color: var(--accent-primary);
        transform: translateX(5px);
    }

	.footer-grid {
		display: grid;
		grid-template-columns: 2fr 1fr 1fr;
		gap: 4rem;
		margin-bottom: 5rem;
	}

	.footer-col h3 {
        font-size: 2rem;
        margin-bottom: 1rem;
        color: var(--text-color);
        font-family: var(--font-display);
        letter-spacing: -0.02em;
	}
    
    .footer-col h4 {
        font-size: 0.9rem;
        font-weight: 700;
        text-transform: uppercase;
        letter-spacing: 0.1em;
        margin-bottom: 1.5rem;
        color: var(--text-color);
        border-bottom: 2px solid var(--accent-secondary);
        padding-bottom: 0.5rem;
        display: inline-block;
    }
    
    .tagline {
        color: var(--text-muted);
        margin-top: 1rem;
        font-size: 1.1rem;
        max-width: 300px;
        line-height: 1.6;
    }

    .company-details {
        margin-top: 2rem;
        font-size: 0.9rem;
        color: var(--text-muted);
        line-height: 1.6;
    }
    
    .company-details p {
        margin: 0;
    }
    
    .copyright {
        display: flex;
        justify-content: space-between;
        align-items: center;
        font-size: 0.875rem;
        color: var(--text-muted);
        padding-top: 2rem;
        border-top: 1px solid var(--border-color);
    }

    @media (max-width: 900px) {
        .desktop-nav {
            display: none;
        }

        .mobile-menu-btn {
            display: block;
        }
    }

    @media (max-width: 768px) {
        .footer-grid {
            grid-template-columns: 1fr;
            gap: 3rem;
        }
        
        .copyright {
            flex-direction: column;
            gap: 1rem;
            text-align: center;
        }
    }
</style>
