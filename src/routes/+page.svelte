<script>
    import { fade, slide, fly } from 'svelte/transition';
    import { onMount } from 'svelte';
    import HeroGrid from '$lib/components/HeroGrid.svelte';
    import BrutalShape from '$lib/components/BrutalShape.svelte';

    
    let showFaq = null;
    let mounted = false;
    
    function toggleFaq(index) {
        showFaq = showFaq === index ? null : index;
    }

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
    <title>AHMZ Agency | Managed Specialist Network</title>
    <meta name="description" content="Stop gambling on freelancers. AHMZ is your managed intermediary for top-tier software, cloud, and design talent." />
</svelte:head>

<section class="hero section">
    <HeroGrid />
    <div class="container hero-container">
        <div class="hero-content" in:fly={{ y: 30, duration: 800, delay: 200 }}>
            <div class="badge">Beta Access Open</div>
            <h1>Scale Your Operations.<br><span class="text-highlight">Without the Headcount.</span></h1>
            <p class="subtext">
                Access specialized operational support for Tech, Design, and Business. 
                Fixed-price projects. Guaranteed results. No management overhead.
            </p>
            <div class="cta-group">
                <a href="/contact" class="btn">Request Quote</a>
                <a href="/services" class="btn btn-outline">View Solutions</a>
            </div>
        </div>
        <div class="hero-visual" in:fly={{ x: 30, duration: 1000, delay: 400 }}>
            <div class="shape-cluster">
                <div class="shape-wrapper s1"><BrutalShape type="square" color="var(--accent-primary)" size="120px" duration="40s" /></div>
                <div class="shape-wrapper s2"><BrutalShape type="cross" color="var(--accent-secondary)" size="80px" delay="1s" duration="35s" /></div>
                <div class="shape-wrapper s3"><BrutalShape type="triangle" color="var(--accent-tertiary)" size="100px" delay="2s" duration="50s" /></div>
                <div class="shape-wrapper s4"><BrutalShape type="circle" color="#fff" size="60px" delay="0.5s" duration="30s" /></div>
            </div>
        </div>
    </div>
</section>


<section class="problem section">
    <div class="container">
        <div class="split-layout">
            <div class="section-header" use:reveal>
                <div class="badge-outline">The Bottleneck</div>
                <h2>Operations Are <span class="text-highlight">Stalling</span> Your Growth.</h2>
                <p class="lead">You have the vision, but you lack the specialized hands to build it. Hiring full-time is slow. Agencies are opaque. You're stuck.</p>
            </div>
            <div class="problem-visual" use:reveal>
                 <div class="shape-wrapper s-problem"><BrutalShape type="cross" color="var(--accent-secondary)" size="180px" duration="45s" /></div>
            </div>
        </div>
        
        <div class="grid three-col">
            <div class="card problem-card reveal-item" use:reveal style="transition-delay: 100ms">
                <div class="card-icon">
                    <BrutalShape type="cross" color="var(--accent-primary)" size="50px" duration="0s" />
                </div>
                <h3>The Hiring Trap</h3>
                <p>Recruiting a senior engineer takes 3+ months. Can you afford to wait that long for a critical fix?</p>
            </div>
            <div class="card problem-card reveal-item" use:reveal style="transition-delay: 200ms">
                <div class="card-icon">
                    <BrutalShape type="triangle" color="var(--accent-tertiary)" size="50px" duration="0s" />
                </div>
                <h3>The Freelance Gamble</h3>
                <p>Upwork is a lottery. Zero accountability. You end up managing the person you hired to save you time.</p>
            </div>
            <div class="card problem-card reveal-item" use:reveal style="transition-delay: 300ms">
                <div class="card-icon">
                    <BrutalShape type="square" color="#fff" size="50px" duration="0s" />
                </div>
                <h3>The Agency Bloat</h3>
                <p>Traditional agencies bill by the hour, not the outcome. They profit from inefficiency.</p>
            </div>
        </div>
    </div>
</section>

<section class="solution section">
    <div class="container solution-container">
        <div class="solution-content" use:reveal>
            <div class="badge-outline">The Fix</div>
            <h2>Operational Excellence.<br><span class="text-highlight">On Demand.</span></h2>
            <p class="lead">AHMZ is your fractional operations partner. We deploy specialized capabilities to solve specific business problems. Fixed price. Managed delivery.</p>
            
            <div class="pillars-list">
                <div class="pillar-item reveal-item" use:reveal>
                    <span class="pillar-num">01</span>
                    <div class="pillar-text">
                        <h3>Project-Based</h3>
                        <p>Fixed scope. Fixed price. You know exactly what you get.</p>
                    </div>
                </div>
                <div class="pillar-item reveal-item" use:reveal>
                    <span class="pillar-num">02</span>
                    <div class="pillar-text">
                        <h3>Managed Delivery</h3>
                        <p>We manage the execution. You get the deliverables.</p>
                    </div>
                </div>
                <div class="pillar-item reveal-item" use:reveal>
                    <span class="pillar-num">03</span>
                    <div class="pillar-text">
                        <h3>Multi-Disciplinary</h3>
                        <p>One partner for Tech, Design, and Business Operations.</p>
                    </div>
                </div>
            </div>
        </div>
        <div class="solution-visual reveal-item" use:reveal>
             <div class="shape-cluster">
                <div class="shape-wrapper s5"><BrutalShape type="square" color="var(--accent-primary)" size="200px" duration="50s" /></div>
                <div class="shape-wrapper s6"><BrutalShape type="circle" color="#fff" size="100px" delay="1.5s" duration="30s" /></div>
                <div class="shape-wrapper s7"><BrutalShape type="triangle" color="var(--accent-tertiary)" size="120px" delay="0.5s" duration="40s" /></div>
            </div>
        </div>
    </div>
</section>

<section class="who-we-help section">
    <div class="container">
        <div class="section-header text-center" use:reveal>
            <h2>Solutions for Every Stage</h2>
            <p>Whether you're scaling up or optimizing, we handle the operational heavy lifting.</p>
        </div>
        <div class="grid three-col">
            <div class="card highlight-card reveal-item" use:reveal>
                <div class="card-tag">Growth</div>
                <h3>Scale-Ups</h3>
                <p>Need a specific capability (e.g., DevOps, Design System) without adding headcount.</p>
            </div>
            <div class="card highlight-card reveal-item" use:reveal style="transition-delay: 100ms">
                <div class="card-tag">Stability</div>
                <h3>SME Owners</h3>
                <p>Need professionalizing operations (Accounting, Tech Audit) to prepare for growth.</p>
            </div>
            <div class="card highlight-card reveal-item" use:reveal style="transition-delay: 200ms">
                <div class="card-tag">Innovation</div>
                <h3>Enterprise Teams</h3>
                <p>Need an agile partner to execute specific innovation projects outside core IT.</p>
            </div>
        </div>
    </div>
</section>

<section class="process section">
    <div class="container">
        <div class="section-header text-center" use:reveal>
            <h2>The Engagement Process</h2>
            <p>Simple. Transparent. Efficient.</p>
        </div>
        <div class="process-grid">
            <div class="process-step reveal-item" use:reveal>
                <div class="step-header">
                    <span class="step-num">01</span>
                    <h3>Request</h3>
                </div>
                <p>Submit your specific operational need or project brief.</p>
            </div>
            <div class="process-arrow">→</div>
            <div class="process-step reveal-item" use:reveal style="transition-delay: 100ms">
                <div class="step-header">
                    <span class="step-num">02</span>
                    <h3>Quote</h3>
                </div>
                <p>Receive a fixed-price proposal with clear deliverables.</p>
            </div>
            <div class="process-arrow">→</div>
            <div class="process-step reveal-item" use:reveal style="transition-delay: 200ms">
                <div class="step-header">
                    <span class="step-num">03</span>
                    <h3>Execution</h3>
                </div>
                <p>Our managed specialists execute the work. You track progress.</p>
            </div>
            <div class="process-arrow">→</div>
            <div class="process-step reveal-item" use:reveal style="transition-delay: 300ms">
                <div class="step-header">
                    <span class="step-num">04</span>
                    <h3>Handover</h3>
                </div>
                <p>Receive final artifacts, documentation, and invoice.</p>
            </div>
        </div>
    </div>
</section>


<section class="disciplines section">
    <div class="container">
        <div class="section-header text-center" use:reveal>
            <h2>Operational Verticals</h2>
            <p>Specialized expertise, deployed on demand.</p>
        </div>
        <div class="grid three-col">
            <div class="card vertical-card reveal-item" use:reveal>
                <div class="vertical-icon">
                    <BrutalShape type="square" color="var(--accent-primary)" size="60px" duration="0s" />
                </div>
                <h3>TechOps</h3>
                <ul class="vertical-list">
                    <li>Architecture Audits</li>
                    <li>DevOps Optimization</li>
                    <li>Cloud Migration</li>
                    <li>Security Compliance</li>
                </ul>
                <a href="/services#techops" class="btn-sm">View TechOps</a>
            </div>
            <div class="card vertical-card reveal-item" use:reveal style="transition-delay: 100ms">
                <div class="vertical-icon">
                    <BrutalShape type="circle" color="var(--accent-secondary)" size="60px" duration="0s" />
                </div>
                <h3>DesignOps</h3>
                <ul class="vertical-list">
                    <li>Landing Page Sprints</li>
                    <li>UI/UX Audits</li>
                    <li>Design Systems</li>
                    <li>Brand Identity</li>
                </ul>
                <a href="/services#designops" class="btn-sm">View DesignOps</a>
            </div>
            <div class="card vertical-card reveal-item" use:reveal style="transition-delay: 200ms">
                <div class="vertical-icon">
                    <BrutalShape type="triangle" color="var(--accent-tertiary)" size="60px" duration="0s" />
                </div>
                <h3>BizOps</h3>
                <ul class="vertical-list">
                    <li>Specialized Accounting</li>
                    <li>Legal Compliance</li>
                    <li>Process Automation</li>
                    <li>Financial Modeling</li>
                </ul>
                <a href="/services#bizops" class="btn-sm">View BizOps</a>
            </div>
        </div>
    </div>
</section>

<section class="trust section">
    <div class="container">
        <div class="trust-content" use:reveal>
            <h2>Reliable. Accountable. Netherlands-Based.</h2>
            <p>We are a registered Dutch B.V. entity. We adhere to strict EU regulations (GDPR) and commit to straightforward business ethics.</p>
            <div class="badges">
                <span class="trust-badge">GDPR Compliant</span>
                <span class="trust-badge">Dutch B.V.</span>
                <span class="trust-badge">Strict NDA</span>
            </div>
        </div>
    </div>
</section>

<section class="faq section">
    <div class="container">
        <div class="section-header text-center" use:reveal>
            <h2>Frequently Asked Questions</h2>
            <p>Everything you need to know about our operational model.</p>
        </div>
        <div class="faq-grid">
            <div class="faq-item reveal-item" class:active={showFaq === 0} use:reveal>
                <button class="faq-question" on:click={() => toggleFaq(0)} aria-expanded={showFaq === 0}>
                    <h3>How is this different from a traditional agency?</h3>
                    <span class="toggle-icon">{showFaq === 0 ? '−' : '+'}</span>
                </button>
                {#if showFaq === 0}
                    <div class="faq-answer" transition:slide>
                        <p>Traditional agencies sell "hours" and profit from inefficiency. We sell "outcomes." You get a fixed price for a specific deliverable (e.g., an audit, a design system, a compliance check). No surprise bills, no dragging timelines.</p>
                    </div>
                {/if}
            </div>
            <div class="faq-item reveal-item" class:active={showFaq === 1} use:reveal>
                <button class="faq-question" on:click={() => toggleFaq(1)} aria-expanded={showFaq === 1}>
                    <h3>Do I own the Intellectual Property (IP)?</h3>
                    <span class="toggle-icon">{showFaq === 1 ? '−' : '+'}</span>
                </button>
                {#if showFaq === 1}
                    <div class="faq-answer" transition:slide>
                        <p>Yes, 100%. Once the project is paid for and handed over, you own all code, designs, and documentation. We sign strict NDAs and IP assignment agreements before starting any work.</p>
                    </div>
                {/if}
            </div>
            <div class="faq-item reveal-item" class:active={showFaq === 2} use:reveal>
                <button class="faq-question" on:click={() => toggleFaq(2)} aria-expanded={showFaq === 2}>
                    <h3>How quickly can you start?</h3>
                    <span class="toggle-icon">{showFaq === 2 ? '−' : '+'}</span>
                </button>
                {#if showFaq === 2}
                    <div class="faq-answer" transition:slide>
                        <p>Because we maintain a curated network of pre-vetted specialists, we can typically assemble a team and start a project within 48-72 hours of quote approval.</p>
                    </div>
                {/if}
            </div>
            <div class="faq-item reveal-item" class:active={showFaq === 3} use:reveal>
                <button class="faq-question" on:click={() => toggleFaq(3)} aria-expanded={showFaq === 3}>
                    <h3>What if I'm not satisfied with the result?</h3>
                    <span class="toggle-icon">{showFaq === 3 ? '−' : '+'}</span>
                </button>
                {#if showFaq === 3}
                    <div class="faq-answer" transition:slide>
                        <p>Our "Quote-to-Cash" model includes clear acceptance criteria. We don't invoice the final tranche until you sign off on the deliverables. If it doesn't meet the spec, we fix it at our cost.</p>
                    </div>
                {/if}
            </div>
            <div class="faq-item reveal-item" class:active={showFaq === 4} use:reveal>
                <button class="faq-question" on:click={() => toggleFaq(4)} aria-expanded={showFaq === 4}>
                    <h3>Can you handle ongoing maintenance?</h3>
                    <span class="toggle-icon">{showFaq === 4 ? '−' : '+'}</span>
                </button>
                {#if showFaq === 4}
                    <div class="faq-answer" transition:slide>
                        <p>Absolutely. While we specialize in project-based work, we offer "Operational Retainers" for clients who need guaranteed availability for maintenance, small tweaks, or ongoing advisory.</p>
                    </div>
                {/if}
            </div>
        </div>
    </div>
</section>

<style>
    .hero {
        position: relative;
        overflow: hidden;
        padding: 8rem 0;
        min-height: 90vh;
        display: flex;
        align-items: center;
        background: transparent;
    }
    
    .hero-container {
        display: grid;
        grid-template-columns: 1fr 1fr;
        gap: 4rem;
        align-items: center;
        position: relative;
        z-index: 2;
    }
    
    .hero-content {
        position: relative;
        z-index: 2;
    }
    
    .hero-visual {
        position: relative;
        z-index: 1;
        display: flex;
        justify-content: center;
        align-items: center;
        height: 400px;
    }
    
    .shape-cluster {
        position: relative;
        width: 100%;
        height: 100%;
    }
    
    .shape-wrapper {
        position: absolute;
    }
    
    .s1 { top: 10%; right: 10%; }
    .s2 { bottom: 20%; left: 10%; }
    .s3 { top: 40%; left: 40%; }
    .s4 { bottom: 10%; right: 30%; }
    .s5 { top: 20%; left: 20%; }
    .s6 { bottom: 30%; right: 20%; }
    
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
    
    .hero-content h1 {
        font-size: 4.5rem;
        line-height: 1.1;
        margin-bottom: 1.5rem;
        letter-spacing: -0.02em;
        text-transform: uppercase;
    }

    .text-highlight {
        color: var(--accent-secondary);
        display: inline-block;
        position: relative;
    }
    
    .subtext {
        font-size: 1.25rem;
        margin: 2rem 0 3rem;
        color: var(--text-muted);
        max-width: 600px;
        line-height: 1.6;
        font-weight: 400;
        border-left: 2px solid var(--border-color);
        padding-left: 1.5rem;
    }
    
    .cta-group {
        display: flex;
        gap: 1rem;
    }
    
    .section-header {
        margin-bottom: 4rem;
        max-width: 700px;
    }
    
    .section-header p {
        font-size: 1.2rem;
        color: var(--text-muted);
        margin-top: 1rem;
        line-height: 1.6;
    }
    
    .problem-card {
        border-left: 6px solid var(--accent-tertiary);
    }
    
    .solution-container {
        display: grid;
        grid-template-columns: 1.2fr 0.8fr;
        gap: 4rem;
        align-items: center;
    }
    
    .solution-visual {
        height: 400px;
        position: relative;
    }
    
    .pillars-grid {
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
        gap: 2rem;
        margin-top: 3rem;
    }
    
    .pillar {
        padding: 2rem;
        border: var(--border-width) solid var(--border-color);
        background: var(--bg-secondary);
        position: relative;
        transition: all 0.2s ease;
        box-shadow: var(--shadow-md);
    }
    
    .pillar:hover {
        transform: translate(-4px, -4px);
        border-color: var(--accent-primary);
        box-shadow: 8px 8px 0 0 var(--accent-primary);
    }
    
    .pillar-num {
        font-family: var(--font-display);
        font-size: 3rem;
        color: rgba(255,255,255,0.1);
        position: absolute;
        top: 1rem;
        right: 1.5rem;
        font-weight: 900;
    }
    
    .link-arrow {
        display: inline-block;
        margin-top: 1.5rem;
        font-weight: 700;
        color: var(--accent-primary);
        text-transform: uppercase;
        border-bottom: 2px solid transparent;
        transition: all 0.2s;
    }
    
    .link-arrow:hover {
        border-bottom-color: var(--accent-primary);
    }
    
    .trust {
        background: var(--bg-secondary);
        text-align: center;
        border-top: var(--border-width) solid var(--border-color);
        border-bottom: var(--border-width) solid var(--border-color);
    }
    
    .trust-content {
        max-width: 800px;
        margin: 0 auto;
    }
    
    .badges {
        display: flex;
        justify-content: center;
        gap: 2rem;
        margin-top: 3rem;
        flex-wrap: wrap;
    }
    
    .trust-badge {
        padding: 0.75rem 1.5rem;
        background: transparent;
        border: 2px solid var(--border-color);
        font-weight: 700;
        color: var(--text-color);
        text-transform: uppercase;
    }
    
    /* FAQ */
    .faq-grid {
        max-width: 800px;
        margin: 0 auto;
        display: flex;
        flex-direction: column;
        gap: 1.5rem;
    }
    
    .faq-item {
        border: var(--border-width) solid var(--border-color);
        background: var(--bg-secondary);
        transition: all 0.3s ease;
    }
    
    .faq-item:hover {
        border-color: var(--accent-primary);
        transform: translateY(-2px);
    }
    
    .faq-item.active {
        border-color: var(--accent-primary);
        background: #000;
    }
    
    .faq-question {
        padding: 2rem;
        display: flex;
        justify-content: space-between;
        align-items: center;
        width: 100%;
        background: none;
        border: none;
        color: var(--text-color);
        cursor: pointer;
        text-align: left;
    }
    
    .faq-question h3 {
        margin: 0;
        font-size: 1.25rem;
        font-weight: 700;
        font-family: var(--font-display);
        padding-right: 2rem;
    }
    
    .toggle-icon {
        font-size: 2rem;
        font-weight: 300;
        color: var(--accent-primary);
        line-height: 1;
    }
    
    .faq-answer {
        padding: 0 2rem 2rem;
        color: var(--text-muted);
        line-height: 1.7;
        font-size: 1.1rem;
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
    
    .split-layout {
        display: grid;
        grid-template-columns: 1.5fr 1fr;
        gap: 4rem;
        align-items: center;
        margin-bottom: 4rem;
    }
    
    .badge-outline {
        display: inline-block;
        padding: 0.5rem 1rem;
        border: 1px solid var(--accent-primary);
        color: var(--accent-primary);
        font-family: var(--font-display);
        font-weight: 700;
        text-transform: uppercase;
        letter-spacing: 0.05em;
        margin-bottom: 1.5rem;
        font-size: 0.85rem;
    }
    
    .lead {
        font-size: 1.25rem;
        color: var(--text-muted);
        line-height: 1.6;
        max-width: 600px;
    }
    
    .card-icon, .vertical-icon {
        margin-bottom: 1.5rem;
        height: 60px;
        display: flex;
        align-items: center;
    }

    .process-grid {
        display: flex;
        justify-content: space-between;
        align-items: stretch;
        gap: 1rem;
        margin-top: 4rem;
        flex-wrap: wrap;
    }
    
    .process-step {
        flex: 1;
        min-width: 200px;
        background: var(--bg-secondary);
        padding: 2rem;
        border: var(--border-width) solid var(--border-color);
        position: relative;
        display: flex;
        flex-direction: column;
    }
    
    .step-header {
        display: flex;
        align-items: center;
        gap: 1rem;
        margin-bottom: 1rem;
        border-bottom: 1px solid var(--border-color);
        padding-bottom: 1rem;
    }
    
    .step-num {
        font-family: var(--font-display);
        font-size: 2rem;
        color: var(--accent-tertiary);
        font-weight: 900;
    }
    
    .process-arrow {
        font-size: 2rem;
        color: var(--text-muted);
        align-self: center;
        padding: 0 1rem;
    }
    
    .vertical-list {
        list-style: none;
        padding: 0;
        margin: 1.5rem 0;
        color: var(--text-muted);
    }
    
    .vertical-list li {
        margin-bottom: 0.5rem;
        padding-left: 1.2rem;
        position: relative;
    }
    
    .vertical-list li::before {
        content: '›';
        position: absolute;
        left: 0;
        color: var(--accent-primary);
        font-weight: bold;
    }
    
    .btn-sm {
        display: inline-block;
        padding: 0.5rem 1rem;
        border: 1px solid var(--border-color);
        color: var(--text-color);
        font-weight: 600;
        text-transform: uppercase;
        font-size: 0.85rem;
        transition: all 0.2s;
    }
    
    .btn-sm:hover {
        background: var(--text-color);
        color: var(--bg-color);
    }

    @media (max-width: 900px) {
        .hero-container, .solution-container, .split-layout {
            grid-template-columns: 1fr;
            text-align: center;
            gap: 3rem;
        }
        
        .hero {
            padding: 6rem 0;
            min-height: auto;
        }

        .hero-content h1 {
            font-size: 3rem;
        }

        .hero-visual, .solution-visual, .problem-visual {
            order: -1;
            margin-bottom: 2rem;
            height: 300px; /* Reduced height for mobile */
        }
        
        .cta-group {
            justify-content: center;
            flex-direction: column; /* Stack buttons on very small screens */
            max-width: 300px;
            margin: 0 auto;
        }
        
        .subtext, .lead {
            margin-left: auto;
            margin-right: auto;
            border-left: none; /* Remove border on centered text */
            padding-left: 0;
        }
        
        .process-grid {
            flex-direction: column;
            gap: 1.5rem;
        }
        
        .process-arrow {
            transform: rotate(90deg);
            padding: 0.5rem;
        }

        .section-header {
            margin-bottom: 3rem;
        }
    }

    @media (max-width: 480px) {
        .hero-content h1 {
            font-size: 2.5rem;
        }
        
        .pillar-num {
            font-size: 2rem;
        }

        .faq-question h3 {
            font-size: 1.1rem;
        }
    }
</style>
