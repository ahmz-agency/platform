<script>
    import { fade, fly } from 'svelte/transition';
    import HeroGrid from '$lib/components/HeroGrid.svelte';
    import BrutalShape from '$lib/components/BrutalShape.svelte';

    export let data;

    let searchQuery = '';
    
    $: filteredPosts = data.posts.filter(post => {
        const query = searchQuery.toLowerCase();
        return post.title.toLowerCase().includes(query) || 
               post.excerpt.toLowerCase().includes(query) ||
               post.category.toLowerCase().includes(query);
    });
</script>

<svelte:head>
    <title>Insights | AHMZ Agency</title>
    <meta name="description" content="Insights on Operational Excellence, TechOps, DesignOps, and BizOps." />
</svelte:head>

<section class="hero section">
    <HeroGrid />
    <div class="container hero-container">
        <div class="hero-content" in:fly={{ y: 30, duration: 800, delay: 200 }}>
            <div class="badge">Insights</div>
            <h1>Operational <span class="text-highlight">Thinking.</span></h1>
            <p class="lead">No fluff. Just strategies for scaling your operations and engineering.</p>
            
            <div class="search-wrapper">
                <input 
                    type="text" 
                    placeholder="Search articles..." 
                    bind:value={searchQuery}
                    class="search-input"
                />
                <div class="search-icon">
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="11" cy="11" r="8"></circle><line x1="21" y1="21" x2="16.65" y2="16.65"></line></svg>
                </div>
            </div>
        </div>
    </div>
</section>

<section class="blog-list section">
    <div class="container">
        {#if filteredPosts.length === 0}
            <div class="no-results" in:fade>
                <p>No articles found matching "{searchQuery}"</p>
            </div>
        {:else}
            <div class="grid">
                {#each filteredPosts as post, i (post.slug)}
                    <a href="/insights/{post.slug}" class="card blog-card" in:fly={{ y: 20, duration: 600, delay: 300 + (i * 100) }}>
                        <div class="card-header">
                            <span class="category">{post.category}</span>
                            <span class="date">{post.date}</span>
                        </div>
                        <h3>{post.title}</h3>
                        <p>{post.excerpt}</p>
                        <div class="read-more">Read Article &rarr;</div>
                    </a>
                {/each}
            </div>
        {/if}
    </div>
</section>

<style>
    /* ... existing styles ... */
    
    .search-wrapper {
        position: relative;
        max-width: 500px;
        margin: 3rem auto 0;
    }
    
    .search-input {
        width: 100%;
        padding: 1rem 1rem 1rem 3rem;
        background: var(--bg-secondary);
        border: var(--border-width) solid var(--border-color);
        color: var(--text-color);
        font-family: var(--font-main);
        font-size: 1.1rem;
        outline: none;
        transition: all 0.2s;
    }
    
    .search-input:focus {
        border-color: var(--accent-primary);
        box-shadow: 4px 4px 0 0 var(--accent-primary);
        transform: translate(-2px, -2px);
    }
    
    .search-icon {
        position: absolute;
        left: 1rem;
        top: 50%;
        transform: translateY(-50%);
        color: var(--text-muted);
        pointer-events: none;
    }
    
    .no-results {
        text-align: center;
        padding: 4rem;
        color: var(--text-muted);
        font-size: 1.2rem;
        border: 1px dashed var(--border-color);
    }

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

    .grid {
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
        gap: 2rem;
    }

    .blog-card {
        display: flex;
        flex-direction: column;
        height: 100%;
        padding: 2.5rem;
        text-decoration: none;
        color: inherit;
        transition: all 0.3s ease;
    }

    .blog-card:hover {
        border-color: var(--accent-primary);
        transform: translate(-4px, -4px);
        box-shadow: 8px 8px 0 0 var(--accent-primary);
    }

    .card-header {
        display: flex;
        justify-content: space-between;
        margin-bottom: 1.5rem;
        font-size: 0.9rem;
        font-family: monospace;
    }

    .category {
        color: var(--accent-secondary);
        text-transform: uppercase;
        font-weight: 700;
    }

    .date {
        color: var(--text-muted);
    }

    .blog-card h3 {
        font-size: 1.75rem;
        margin-bottom: 1rem;
        line-height: 1.3;
    }

    .blog-card p {
        color: var(--text-muted);
        line-height: 1.6;
        margin-bottom: 2rem;
        flex-grow: 1;
    }

    .read-more {
        font-weight: 700;
        color: var(--accent-primary);
        text-transform: uppercase;
        font-size: 0.9rem;
        letter-spacing: 0.05em;
    }

    @media (max-width: 900px) {
        .hero-content h1 {
            font-size: 2.5rem;
        }
        
        .grid {
            grid-template-columns: 1fr;
        }

        .search-wrapper {
            width: 100%;
            padding: 0 1rem;
        }
    }
</style>
