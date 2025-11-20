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
    <title>Services | AHMZ Agency</title>
</svelte:head>

<section class="hero section">
    <HeroGrid />
    <div class="container hero-container">
        <div class="hero-content" in:fly={{ y: 30, duration: 800, delay: 200 }}>
            <div class="badge">Our Capabilities</div>
            <h1>Operational <span class="text-highlight">Excellence.</span><br>Delivered.</h1>
            <p class="lead">
                We don't just "do tasks." We solve operational bottlenecks. 
                Three specialized verticals. One managed partner.
            </p>
        </div>
    </div>
</section>

<section class="verticals section">
    <div class="container">
        
        <!-- TechOps -->
        <div id="techops" class="vertical-block" use:reveal>
            <div class="vertical-header">
                <div class="icon-wrapper">
                    <BrutalShape type="square" color="var(--accent-primary)" size="80px" duration="0s" />
                </div>
                <div class="header-text">
                    <h2>TechOps</h2>
                    <p>Scalable infrastructure and code quality assurance.</p>
                </div>
            </div>
            <div class="service-grid">
                <div class="service-card">
                    <h3>Architecture Audits</h3>
                    <p>Deep-dive review of your codebase, database schema, and system design to identify bottlenecks and security risks.</p>
                </div>
                <div class="service-card">
                    <h3>DevOps Optimization</h3>
                    <p>CI/CD pipeline setup, Dockerization, Kubernetes orchestration, and cloud cost reduction (AWS/Azure/GCP).</p>
                </div>
                <div class="service-card">
                    <h3>Security Compliance</h3>
                    <p>Penetration testing, vulnerability assessments, and implementation of security best practices (OWASP).</p>
                </div>
                <div class="service-card">
                    <h3>Legacy Modernization</h3>
                    <p>Strategic refactoring of monolithic applications into microservices or modular monoliths.</p>
                </div>
            </div>
        </div>

        <!-- DesignOps -->
        <div id="designops" class="vertical-block" use:reveal>
            <div class="vertical-header">
                <div class="icon-wrapper">
                    <BrutalShape type="circle" color="var(--accent-secondary)" size="80px" duration="0s" />
                </div>
                <div class="header-text">
                    <h2>DesignOps</h2>
                    <p>User-centric design and brand consistency.</p>
                </div>
            </div>
            <div class="service-grid">
                <div class="service-card">
                    <h3>UI/UX Audits</h3>
                    <p>Heuristic evaluation of your product's usability, accessibility (WCAG), and conversion flow.</p>
                </div>
                <div class="service-card">
                    <h3>Design Systems</h3>
                    <p>Creation of a unified component library (Figma + Code) to ensure consistency and speed up development.</p>
                </div>
                <div class="service-card">
                    <h3>Landing Page Sprints</h3>
                    <p>High-conversion landing pages designed and built in one week. Optimized for speed and SEO.</p>
                </div>
                <div class="service-card">
                    <h3>Brand Identity</h3>
                    <p>Logo design, typography selection, and visual language development for startups and scale-ups.</p>
                </div>
            </div>
        </div>

        <!-- BizOps -->
        <div id="bizops" class="vertical-block" use:reveal>
            <div class="vertical-header">
                <div class="icon-wrapper">
                    <BrutalShape type="triangle" color="var(--accent-tertiary)" size="80px" duration="0s" />
                </div>
                <div class="header-text">
                    <h2>BizOps</h2>
                    <p>Streamlined processes and financial clarity.</p>
                </div>
            </div>
            <div class="service-grid">
                <div class="service-card">
                    <h3>Financial Modeling</h3>
                    <p>Cash flow forecasting, unit economics analysis, and investor-ready financial models.</p>
                </div>
                <div class="service-card">
                    <h3>Process Automation</h3>
                    <p>Automating repetitive tasks using Zapier, Make, or custom Python scripts to save hours per week.</p>
                </div>
                <div class="service-card">
                    <h3>Legal Compliance</h3>
                    <p>GDPR/CCPA compliance checks, contract template creation, and entity structuring advice.</p>
                </div>
                <div class="service-card">
                    <h3>Due Diligence</h3>
                    <p>Technical and operational due diligence for M&A or investment rounds.</p>
                </div>
            </div>
        </div>

    </div>
</section>

<section class="cta-section section">
    <div class="container text-center">
        <div class="cta-content" use:reveal>
            <h2>Get a Fixed-Price Quote</h2>
            <p>Tell us your operational bottleneck. We'll give you a solution and a price.</p>
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

    .vertical-block {
        margin-bottom: 8rem;
    }

    .vertical-header {
        display: flex;
        align-items: center;
        gap: 2rem;
        margin-bottom: 3rem;
        border-bottom: 2px solid var(--border-color);
        padding-bottom: 2rem;
    }

    .icon-wrapper {
        width: 80px;
        height: 80px;
        display: flex;
        align-items: center;
        justify-content: center;
    }

    .header-text h2 {
        font-size: 3rem;
        margin: 0 0 0.5rem;
        text-transform: uppercase;
    }

    .header-text p {
        font-size: 1.25rem;
        color: var(--text-muted);
        margin: 0;
    }

    .service-grid {
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
        gap: 2rem;
    }

    .service-card {
        background: var(--bg-secondary);
        border: var(--border-width) solid var(--border-color);
        padding: 2.5rem;
        transition: all 0.3s ease;
        height: 100%;
        display: flex;
        flex-direction: column;
    }

    .service-card:hover {
        border-color: var(--accent-primary);
        transform: translate(-4px, -4px);
        box-shadow: 8px 8px 0 0 var(--accent-primary);
    }

    .service-card h3 {
        font-size: 1.5rem;
        margin-bottom: 1rem;
        color: var(--text-color);
    }

    .service-card p {
        font-size: 1rem;
        color: var(--text-muted);
        line-height: 1.6;
        margin: 0;
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
        
        .vertical-header {
            flex-direction: column;
            align-items: flex-start;
            gap: 1rem;
            text-align: left;
        }
        
        .header-text h2 {
            font-size: 2.5rem;
        }

        .service-grid {
            grid-template-columns: 1fr;
        }

        .cta-content h2 {
            font-size: 2rem;
        }
    }
</style>
