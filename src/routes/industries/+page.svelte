<script>
    import { fade, slide, fly } from 'svelte/transition';
    import { onMount } from 'svelte';
    import HeroGrid from '$lib/components/HeroGrid.svelte';
    import BrutalShape from '$lib/components/BrutalShape.svelte';

    let mounted = false;

    onMount(() => {
        mounted = true;
    });

    function reveal(node) {
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    node.classList.add('visible');
                    observer.unobserve(node);
                }
            });
        }, { threshold: 0.1 });
        
        observer.observe(node);
        
        return {
            destroy() {
                observer.disconnect();
            }
        };
    }
</script>

<svelte:head>
    <title>Industries | AHMZ Agency</title>
</svelte:head>

<section class="hero section">
    <HeroGrid />
    <div class="container hero-container">
        <div class="hero-content" in:fly={{ y: 30, duration: 800, delay: 200 }}>
            <div class="badge">Who We Help</div>
            <h1>Industries We <span class="text-highlight">Power.</span></h1>
            <p class="lead">We don't work with everyone. We work with those who need to build fast, scale right, and operate without friction.</p>
        </div>
    </div>
</section>

<section class="industry-section section">
    <div class="container">
        
        <!-- Startups -->
        <div class="industry-block" use:reveal>
            <div class="content">
                <span class="number">01</span>
                <h2>Startups</h2>
                <p class="sub">Pre-Seed to Series B</p>
                <p>
                    You have a runway and a roadmap. You don't have time to recruit, vet, and manage a full engineering team.
                    We act as your <strong>fractional TechOps & DesignOps department.</strong>
                </p>
                <ul class="benefits">
                    <li>MVP Development in weeks, not months</li>
                    <li>Scalable architecture from Day 1</li>
                    <li>Fractional leadership included</li>
                </ul>
            </div>
            <div class="visual">
                <div class="shape-wrapper">
                    <BrutalShape type="square" color="var(--accent-primary)" size="150px" duration="40s" />
                </div>
            </div>
        </div>

        <!-- Agencies -->
        <div class="industry-block reverse" use:reveal>
            <div class="content">
                <span class="number">02</span>
                <h2>Agencies</h2>
                <p class="sub">Design & Marketing Agencies</p>
                <p>
                    You sell beautiful brands and campaigns. But when clients ask for complex web apps or integrations, you get stuck.
                    We are your <strong>white-label technical partner.</strong>
                </p>
                <ul class="benefits">
                    <li>Invisible partnership (White-label)</li>
                    <li>Technical feasibility consulting</li>
                    <li>Reliable execution for high-ticket clients</li>
                </ul>
            </div>
            <div class="visual">
                <div class="shape-wrapper">
                    <BrutalShape type="circle" color="var(--accent-secondary)" size="150px" duration="40s" />
                </div>
            </div>
        </div>

        <!-- Enterprise -->
        <div class="industry-block" use:reveal>
            <div class="content">
                <span class="number">03</span>
                <h2>Enterprise</h2>
                <p class="sub">Innovation Units & R&D</p>
                <p>
                    Internal IT is too slow. You need to prototype a new idea or build a satellite product without the red tape.
                    We are your <strong>speed boat attached to the cruise ship.</strong>
                </p>
                <ul class="benefits">
                    <li>Rapid Prototyping & PoCs</li>
                    <li>Modern Tech Stack (SvelteKit, Go, Rust)</li>
                    <li>Security & Compliance aware (ISO/GDPR)</li>
                </ul>
            </div>
            <div class="visual">
                <div class="shape-wrapper">
                    <BrutalShape type="triangle" color="var(--accent-tertiary)" size="150px" duration="40s" />
                </div>
            </div>
        </div>

    </div>
</section>

<section class="cta-section section">
    <div class="container text-center">
        <div class="cta-content" use:reveal>
            <h2>Do you fit the profile?</h2>
            <p>If you value speed, quality, and transparency, we should talk.</p>
            <a href="/contact" class="btn">Request Quote</a>
        </div>
    </div>
</section>

<style>
    .hero {
        position: relative;
        overflow: hidden;
        padding: 8rem 0 4rem;
        min-height: 50vh;
        display: flex;
        align-items: center;
    }
    
    .hero-container {
        position: relative;
        z-index: 2;
        max-width: 900px;
        margin: 0 auto;
        text-align: center;
    }
    
    .hero-content h1 {
        font-size: 4rem;
        line-height: 1.1;
        margin-bottom: 1.5rem;
        text-transform: uppercase;
    }
    
    .badge {
        display: inline-block;
        background: var(--accent-secondary);
        color: #000;
        padding: 0.5rem 1rem;
        font-weight: 700;
        margin-bottom: 2rem;
        border: 2px solid #000;
        text-transform: uppercase;
        font-size: 0.9rem;
        letter-spacing: 0.05em;
        box-shadow: 4px 4px 0 #000;
    }
    
    .text-highlight {
        color: var(--accent-primary);
    }
    
    .lead {
        font-size: 1.5rem;
        color: var(--text-muted);
        max-width: 700px;
        margin: 0 auto;
        line-height: 1.6;
    }

    .industry-block {
        display: flex;
        align-items: center;
        gap: 6rem;
        padding: 6rem 0;
        border-bottom: 1px solid var(--border-color);
    }
    
    .industry-block:last-child {
        border-bottom: none;
    }
    
    .industry-block.reverse {
        flex-direction: row-reverse;
    }
    
    .content {
        flex: 1;
        position: relative;
    }
    
    .number {
        font-family: var(--font-display);
        font-size: 8rem;
        color: var(--bg-secondary);
        position: absolute;
        top: -5rem;
        left: -3rem;
        z-index: -1;
        font-weight: 900;
        opacity: 0.5;
        -webkit-text-stroke: 1px var(--border-color);
    }
    
    h2 {
        font-size: 3rem;
        margin-bottom: 0.5rem;
        text-transform: uppercase;
    }
    
    .sub {
        font-family: monospace;
        color: var(--accent-primary);
        font-size: 1.1rem;
        margin-bottom: 1.5rem;
        text-transform: uppercase;
        letter-spacing: 0.05em;
        display: block;
    }
    
    .content p {
        font-size: 1.1rem;
        line-height: 1.6;
        color: var(--text-muted);
        margin-bottom: 1.5rem;
    }
    
    .content strong {
        color: var(--text-color);
        font-weight: 700;
    }
    
    .benefits {
        list-style: none;
        padding: 0;
        margin-top: 2rem;
    }
    
    .benefits li {
        padding: 0.75rem 0;
        border-bottom: 1px solid var(--border-color);
        display: flex;
        align-items: center;
        color: var(--text-color);
        font-size: 1.05rem;
    }
    
    .benefits li:before {
        content: "→";
        color: var(--accent-secondary);
        margin-right: 1rem;
        font-weight: 900;
    }
    
    .visual {
        flex: 1;
        height: 400px;
        display: flex;
        align-items: center;
        justify-content: center;
        background: var(--bg-secondary);
        border: var(--border-width) solid var(--border-color);
        position: relative;
    }
    
    .shape-wrapper {
        filter: drop-shadow(0 0 20px rgba(59, 130, 246, 0.2));
    }

    .cta-section {
        border-top: var(--border-width) solid var(--border-color);
        padding: 6rem 0;
        background: var(--bg-secondary);
    }
    
    .cta-content h2 {
        font-size: 3rem;
        margin-bottom: 1rem;
    }
    
    .cta-content p {
        font-size: 1.25rem;
        color: var(--text-muted);
        margin-bottom: 2rem;
    }

    /* Reveal Animation Classes */
    :global(.reveal-item) {
        opacity: 0;
        transform: translateY(30px);
        transition: all 0.6s cubic-bezier(0.2, 0.8, 0.2, 1);
    }
    
    :global(.reveal-item.visible) {
        opacity: 1;
        transform: translateY(0);
    }

    @media (max-width: 900px) {
        .hero-content h1 {
            font-size: 2.5rem;
        }

        .industry-block {
            flex-direction: column;
            text-align: center;
            gap: 3rem;
            padding: 4rem 0;
        }
        
        .industry-block.reverse {
            flex-direction: column;
        }
        
        .visual {
            width: 100%;
            height: 300px;
            order: -1;
        }
        
        .number {
            display: none;
        }
        
        .benefits li {
            justify-content: center;
            text-align: left;
        }
    }
</style>
