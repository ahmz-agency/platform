<script>
    import { fade, fly } from 'svelte/transition';
    import BrutalShape from '$lib/components/BrutalShape.svelte';
</script>

<svelte:head>
    <title>Contact AHMZ | Operational Excellence</title>
    <meta name="description" content="Start your managed engagement. Get a fixed-price quote for TechOps, DesignOps, or BizOps." />
</svelte:head>

<section class="contact-hero section">
    <div class="container">
        <div class="content-wrapper" in:fly={{ y: 20, duration: 800 }}>
            <h1>Start Your <span class="text-highlight">Engagement.</span></h1>
            <p class="subtext">
                Tell us about your operational bottleneck. We'll analyze your requirements and provide a fixed-price quote within 48 hours.
            </p>
        </div>
    </div>
</section>

<section class="contact-form-section section">
    <div class="container">
        <div class="form-container" in:fly={{ y: 30, duration: 800, delay: 200 }}>
            <form class="brutal-form">
                <div class="form-group">
                    <label for="name">Name</label>
                    <input type="text" id="name" placeholder="Jane Doe" required />
                </div>
                
                <div class="form-group">
                    <label for="email">Work Email</label>
                    <input type="email" id="email" placeholder="jane@company.com" required />
                </div>

                <div class="form-group">
                    <label for="company">Company</label>
                    <input type="text" id="company" placeholder="Acme Corp" />
                </div>

                <div class="form-group">
                    <label for="type">Operational Vertical</label>
                    <div class="select-wrapper">
                        <select id="type">
                            <option value="" disabled selected>Select a vertical...</option>
                            <option value="techops">TechOps (Dev & Infra)</option>
                            <option value="designops">DesignOps (UI/UX & Brand)</option>
                            <option value="bizops">BizOps (Finance & Legal)</option>
                            <option value="mixed">Mixed / Other</option>
                        </select>
                    </div>
                </div>

                <div class="form-group full-width">
                    <label for="message">Project Brief</label>
                    <textarea id="message" rows="5" placeholder="Describe your bottleneck, desired outcome, and timeline..."></textarea>
                </div>

                <div class="form-actions full-width">
                    <button type="submit" class="btn">Request Quote</button>
                </div>
            </form>
            
            <div class="contact-info">
                <div class="info-header">
                    <BrutalShape type="circle" color="var(--accent-primary)" size="40px" duration="0s" />
                    <h3>Direct Contact</h3>
                </div>
                <p>Prefer email? Reach us directly.</p>
                <a href="mailto:hello@ahmz.agency" class="email-link">hello@ahmz.agency</a>
                <p class="phone-link"><a href="tel:+31627916439">+31 6 27 91 64 39</a></p>
                
                <p>AHMZ Agency B.V.<br>Prins Hendrikkade 21 E<br>1012TL Amsterdam</p>
                
                <div class="info-block">
                    <h4>Chamber of Commerce</h4>
                    <p>KVK: 98277553</p>
                </div>
            </div>
        </div>
    </div>
</section>

<style>
    .contact-hero {
        padding-top: 8rem;
        padding-bottom: 4rem;
        border-bottom: none;
    }

    .subtext {
        font-size: 1.25rem;
        color: var(--text-muted);
        max-width: 600px;
        margin-top: 1.5rem;
        line-height: 1.6;
    }

    .form-container {
        display: grid;
        grid-template-columns: 2fr 1fr;
        gap: 4rem;
        align-items: start;
    }

    .brutal-form {
        display: grid;
        grid-template-columns: 1fr 1fr;
        gap: 2rem;
        background: rgba(255, 255, 255, 0.03);
        padding: 3rem;
        border: var(--border-width) solid var(--border-color);
        box-shadow: var(--shadow-md);
    }

    .form-group {
        display: flex;
        flex-direction: column;
        gap: 0.75rem;
    }

    .full-width {
        grid-column: 1 / -1;
    }

    label {
        font-family: var(--font-display);
        font-weight: 700;
        text-transform: uppercase;
        font-size: 0.85rem;
        letter-spacing: 0.05em;
        color: var(--text-muted);
    }

    input, select, textarea {
        width: 100%;
        background: var(--bg-color);
        border: var(--border-width) solid var(--border-color);
        padding: 1.2rem;
        color: var(--text-color);
        font-family: var(--font-main);
        font-size: 1rem;
        border-radius: 0;
        outline: none;
        transition: all 0.2s;
        appearance: none;
    }

    input:focus, select:focus, textarea:focus {
        border-color: var(--accent-primary);
        box-shadow: 4px 4px 0 0 var(--accent-primary);
        transform: translate(-2px, -2px);
    }

    .select-wrapper {
        position: relative;
    }
    
    .select-wrapper::after {
        content: '↓';
        position: absolute;
        right: 1.2rem;
        top: 50%;
        transform: translateY(-50%);
        color: var(--text-muted);
        pointer-events: none;
        font-weight: bold;
    }

    .form-actions {
        margin-top: 1rem;
    }
    
    .form-actions .btn {
        width: 100%;
        justify-content: center;
        font-size: 1.1rem;
        padding: 1.2rem;
    }

    .contact-info {
        padding: 2rem;
        border: var(--border-width) solid var(--border-color);
        background: var(--bg-secondary);
    }

    .info-header {
        display: flex;
        align-items: center;
        gap: 1rem;
        margin-bottom: 1rem;
    }

    .contact-info h3 {
        font-size: 1.5rem;
        margin: 0;
    }

    .email-link {
        display: inline-block;
        font-size: 1.25rem;
        color: var(--accent-primary);
        font-weight: 700;
        margin: 1rem 0 2rem;
        text-decoration: underline;
        text-decoration-thickness: 2px;
        text-underline-offset: 4px;
    }

    .email-link:hover {
        color: var(--accent-primary-hover);
    }

    .info-block {
        margin-top: 2rem;
    }

    .info-block h4 {
        font-size: 1rem;
        color: var(--text-muted);
        margin-bottom: 0.5rem;
        text-transform: uppercase;
        letter-spacing: 0.05em;
    }
    
    .info-block p {
        color: var(--text-color);
        line-height: 1.5;
    }

    @media (max-width: 900px) {
        .contact-hero {
            padding-top: 6rem;
            padding-bottom: 2rem;
        }

        .form-container {
            grid-template-columns: 1fr;
            gap: 3rem;
        }

        .brutal-form {
            grid-template-columns: 1fr;
            padding: 1.5rem;
        }
        
        .content-wrapper h1 {
            font-size: 2.5rem;
        }
    }
</style>
