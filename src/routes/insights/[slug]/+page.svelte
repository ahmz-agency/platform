<script>
    import { fade, fly } from 'svelte/transition';
    import BrutalShape from '$lib/components/BrutalShape.svelte';

    export let data;
</script>

<svelte:head>
    <title>{data.title} | AHMZ Agency</title>
</svelte:head>

<article class="blog-post section">
    <div class="container">
        <div class="post-header" in:fly={{ y: 20, duration: 800 }}>
            <a href="/insights" class="back-link">&larr; Back to Insights</a>
            <div class="meta">
                <span class="category">{data.category}</span>
                <span class="date">{data.date}</span>
            </div>
            <h1>{data.title}</h1>
            <div class="author">
                <BrutalShape type="circle" color="var(--accent-primary)" size="30px" duration="0s" />
                <span>By {data.author}</span>
            </div>
        </div>

        <div class="post-content" in:fly={{ y: 30, duration: 800, delay: 200 }}>
            {@html data.content}
        </div>
        
        <div class="post-footer">
            <h3>Ready to optimize your operations?</h3>
            <a href="/contact" class="btn">Request a Briefing</a>
        </div>
    </div>
</article>

<style>
    .blog-post {
        padding-top: 8rem;
    }

    .post-header {
        max-width: 800px;
        margin: 0 auto 4rem;
        text-align: center;
    }

    .back-link {
        display: inline-block;
        margin-bottom: 2rem;
        color: var(--text-muted);
        text-decoration: none;
        font-weight: 600;
        text-transform: uppercase;
        font-size: 0.9rem;
        letter-spacing: 0.05em;
    }

    .back-link:hover {
        color: var(--accent-primary);
    }

    .meta {
        display: flex;
        justify-content: center;
        gap: 1.5rem;
        margin-bottom: 1.5rem;
        font-family: monospace;
        font-size: 1rem;
    }

    .category {
        color: var(--accent-secondary);
        font-weight: 700;
        text-transform: uppercase;
    }

    .date {
        color: var(--text-muted);
    }

    h1 {
        font-size: 3.5rem;
        line-height: 1.1;
        margin-bottom: 2rem;
    }

    .author {
        display: flex;
        align-items: center;
        justify-content: center;
        gap: 1rem;
        font-weight: 600;
        color: var(--text-color);
    }

    .post-content {
        max-width: 700px;
        margin: 0 auto;
        font-size: 1.15rem;
        line-height: 1.8;
        color: var(--text-color);
    }

    /* Markdown Styles */
    :global(.post-content h2) {
        font-size: 2rem;
        margin-top: 3rem;
        margin-bottom: 1.5rem;
        color: var(--text-color);
        font-family: var(--font-display);
    }

    :global(.post-content h3) {
        font-size: 1.5rem;
        margin-top: 2.5rem;
        margin-bottom: 1rem;
        color: var(--text-color);
        font-family: var(--font-display);
    }

    :global(.post-content p) {
        margin-bottom: 1.5rem;
    }

    :global(.post-content ul, .post-content ol) {
        margin-bottom: 2rem;
        padding-left: 1.5rem;
    }

    :global(.post-content li) {
        margin-bottom: 0.5rem;
    }
    
    :global(.post-content strong) {
        color: var(--accent-primary);
        font-weight: 700;
    }

    :global(.post-content a) {
        color: var(--accent-primary);
        text-decoration: underline;
        text-underline-offset: 4px;
    }

    :global(.post-content blockquote) {
        border-left: 4px solid var(--accent-secondary);
        padding-left: 1.5rem;
        margin: 2rem 0;
        font-style: italic;
        color: var(--text-muted);
    }

    .post-footer {
        max-width: 700px;
        margin: 6rem auto 0;
        padding: 3rem;
        background: var(--bg-secondary);
        border: var(--border-width) solid var(--border-color);
        text-align: center;
    }

    .post-footer h3 {
        font-size: 1.5rem;
        margin-bottom: 2rem;
    }

    @media (max-width: 768px) {
        h1 {
            font-size: 2.5rem;
        }
        
        .post-content {
            font-size: 1.05rem;
        }
    }
</style>
