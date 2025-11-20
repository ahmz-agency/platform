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
    <title>About AHMZ | Operational Excellence Partner</title>
</svelte:head>

<section class="hero section">
    <HeroGrid />
    <div class="container hero-container">
        <div class="hero-content" in:fly={{ y: 30, duration: 800, delay: 200 }}>
            <div class="badge">Our Mission</div>
            <h1>We Build The <span class="text-highlight">Engines</span> That Scale Business.</h1>
            <p class="lead">AHMZ is not just a talent network. We are an operational partner. We deploy specialized teams to fix bottlenecks in Tech, Design, and Business.</p>
        </div>
    </div>
</section>

<section class="story section">
    <div class="container">
        <div class="split-layout">
            <div class="story-content" use:reveal>
                <h2>From "Hiring" to "Solving"</h2>
                <p>We started as a recruitment agency, but we saw a flaw: <strong>Hiring doesn't solve problems. Execution does.</strong></p>
                <p>Companies don't want "a developer" for 12 months. They want a "scalable cloud architecture" in 3 months. They don't want "a designer." They want a "high-converting landing page."</p>
                <p>So we pivoted. We stopped selling hours and resumes. We started selling <strong>Operational Excellence on Demand.</strong></p>
            </div>
            <div class="story-visual" use:reveal>
                <div class="shape-wrapper s-story">
                    <BrutalShape type="cross" color="var(--accent-primary)" size="200px" duration="60s" />
                </div>
            </div>
        </div>
    </div>
</section>

<section class="values section">
    <div class="container">
        <div class="section-header text-center" use:reveal>
            <h2>The AHMZ Standard</h2>
            <p>How we guarantee quality in an unregulated industry.</p>
        </div>
        <div class="grid three-col">
            <div class="card value-card reveal-item" use:reveal>
                <div class="card-icon">
                    <BrutalShape type="square" color="var(--accent-secondary)" size="50px" duration="0s" />
                </div>
                <h3>Dutch B.V. Reliability</h3>
                <p>We are a registered Dutch entity (KVK: 98277553). We adhere to strict EU laws, GDPR compliance, and transparent business ethics. No shady offshore entities.</p>
            </div>
            <div class="card value-card reveal-item" use:reveal style="transition-delay: 100ms">
                <div class="card-icon">
                    <BrutalShape type="circle" color="var(--accent-tertiary)" size="50px" duration="0s" />
                </div>
                <h3>Quote-to-Cash</h3>
                <p>We operate on fixed-price quotes for defined scopes. You know exactly what you're paying for, and you only pay for results, not hours.</p>
            </div>
            <div class="card value-card reveal-item" use:reveal style="transition-delay: 200ms">
                <div class="card-icon">
                    <BrutalShape type="triangle" color="#fff" size="50px" duration="0s" />
                </div>
                <h3>Vetted Specialists</h3>
                <p>Our network isn't open to everyone. We manually vet every TechOps, DesignOps, and BizOps specialist for senior-level capability.</p>
            </div>
        </div>
    </div>
</section>

<section class="cta-section section">
    <div class="container text-center">
        <div class="cta-content" use:reveal>
            <h2>Ready to Scale?</h2>
            <p>Stop managing freelancers. Start managing outcomes.</p>
            <a href="/contact" class="btn">Request a Briefing</a>
        </div>
    </div>
</section>

<style>
    .hero {
        position: relative;
        overflow: hidden;
        padding: 8rem 0 4rem;
        min-height: 60vh;
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
    
    .split-layout {
        display: grid;
        grid-template-columns: 1fr 1fr;
        gap: 4rem;
        align-items: center;
        margin: 4rem 0;
    }
    
    .story-content h2 {
        font-size: 2.5rem;
        margin-bottom: 1.5rem;
    }
    
    .story-content p {
        font-size: 1.1rem;
        line-height: 1.7;
        color: var(--text-muted);
        margin-bottom: 1.5rem;
    }
    
    .story-content strong {
        color: var(--text-color);
        font-weight: 700;
    }
    
    .story-visual {
        display: flex;
        justify-content: center;
        align-items: center;
        height: 400px;
    }
    
    .section-header {
        margin-bottom: 4rem;
        max-width: 700px;
        margin-left: auto;
        margin-right: auto;
    }
    
    .section-header p {
        font-size: 1.2rem;
        color: var(--text-muted);
        margin-top: 1rem;
        line-height: 1.6;
    }

    .grid {
        display: grid;
        gap: 2rem;
    }
    
    .three-col {
        grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
    }
    
    .card-icon {
        margin-bottom: 2rem;
        height: 60px;
        display: flex;
        align-items: center;
    }
    
    .value-card {
        padding: 3rem;
        height: 100%;
        display: flex;
        flex-direction: column;
        justify-content: flex-start;
    }
    
    .value-card h3 {
        font-size: 1.75rem;
        margin-bottom: 1.5rem;
        line-height: 1.2;
        min-height: 4.2rem; /* Align titles */
    }
    
    .value-card p {
        font-size: 1.1rem;
        line-height: 1.6;
        color: var(--text-muted);
        margin: 0;
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
        
        .split-layout {
            grid-template-columns: 1fr;
            text-align: center;
            gap: 3rem;
        }
        
        .story-visual {
            order: -1;
            height: 400px; /* Increased height */
            margin-bottom: 3rem;
            width: 100%;
        }

        .three-col {
            grid-template-columns: 1fr;
        }

        .value-card {
            padding: 2rem;
            min-height: auto;
        }

        .value-card h3 {
            min-height: auto;
            font-size: 1.5rem;
        }
    }
</style>
