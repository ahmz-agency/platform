<script>
    export let type = 'square'; // square, circle, triangle, cross
    export let color = 'var(--accent-primary)';
    export let size = '50px';
    export let delay = '0s';
    export let duration = '4s';
</script>

<div 
    class="brutal-shape {type}" 
    style="
        --color: {color}; 
        --size: {size}; 
        --delay: {delay}; 
        --duration: {duration};
    "
>
    {#if type === 'square'}
        <svg width="100%" height="100%" viewBox="0 0 100 100">
            <rect x="5" y="5" width="90" height="90" stroke="var(--color)" stroke-width="4" fill="none" />
            <rect x="12" y="12" width="90" height="90" fill="black" opacity="0.3" />
        </svg>
    {:else if type === 'circle'}
        <svg width="100%" height="100%" viewBox="0 0 100 100">
            <circle cx="50" cy="50" r="45" stroke="var(--color)" stroke-width="4" fill="none" />
        </svg>
    {:else if type === 'triangle'}
        <svg width="100%" height="100%" viewBox="0 0 100 100">
            <polygon points="50,5 95,95 5,95" stroke="var(--color)" stroke-width="4" fill="none" />
        </svg>
    {:else if type === 'cross'}
        <svg width="100%" height="100%" viewBox="0 0 100 100">
            <line x1="10" y1="10" x2="90" y2="90" stroke="var(--color)" stroke-width="8" />
            <line x1="90" y1="10" x2="10" y2="90" stroke="var(--color)" stroke-width="8" />
        </svg>
    {/if}
</div>

<style>
    .brutal-shape {
        width: var(--size);
        height: var(--size);
        animation: float var(--duration) ease-in-out infinite;
        animation-delay: var(--delay);
    }

    @keyframes float {
        0%, 100% { transform: translateY(0) rotate(0deg); }
        50% { transform: translateY(-20px) rotate(5deg); }
    }
</style>
