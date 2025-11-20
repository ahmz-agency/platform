<script>
    export let text = "TRUSTABLE • VETTED • MANAGED • SECURE • ";
    export let speed = 20;
    export let direction = 'left';
</script>

<div class="marquee-container">
    <div class="marquee-content" style="animation-duration: {speed}s; animation-direction: {direction === 'right' ? 'reverse' : 'normal'};">
        {#each Array(10) as _}
            <span class="marquee-item">{text}</span>
        {/each}
    </div>
</div>

<style>
    .marquee-container {
        width: 100%;
        overflow: hidden;
        background: var(--accent-primary);
        border-top: var(--border-width) solid #000;
        border-bottom: var(--border-width) solid #000;
        padding: 1rem 0;
        white-space: nowrap;
        position: relative;
        z-index: 10;
    }

    .marquee-content {
        display: inline-block;
        animation: scroll linear infinite;
    }

    .marquee-item {
        font-family: var(--font-display);
        font-weight: 900;
        font-size: 1.5rem;
        color: #fff;
        text-transform: uppercase;
        margin-right: 2rem;
        -webkit-text-stroke: 1px #000;
        text-shadow: 2px 2px 0 #000;
    }

    @keyframes scroll {
        0% { transform: translateX(0); }
        100% { transform: translateX(-50%); }
    }
</style>
