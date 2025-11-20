<script>
    import { onMount } from 'svelte';

    let canvas;
    let width;
    let height;
    let animationId;

    onMount(() => {
        const ctx = canvas.getContext('2d');
        let time = 0;

        const resize = () => {
            width = window.innerWidth;
            height = window.innerHeight;
            canvas.width = width;
            canvas.height = height;
        };

        window.addEventListener('resize', resize);
        resize();

        const draw = () => {
            ctx.fillStyle = '#020617'; // Match bg-color
            ctx.fillRect(0, 0, width, height);

            const gridSize = 60;
            const offset = (time * 0.005) % gridSize; // Reduced from 0.05 to 0.005

            ctx.strokeStyle = '#1E293B'; // Dark slate for subtle grid
            ctx.lineWidth = 1;

            // Draw vertical lines
            for (let x = offset; x < width; x += gridSize) {
                ctx.beginPath();
                ctx.moveTo(x, 0);
                ctx.lineTo(x, height);
                ctx.stroke();
            }

            // Draw horizontal lines
            for (let y = offset; y < height; y += gridSize) {
                ctx.beginPath();
                ctx.moveTo(0, y);
                ctx.lineTo(width, y);
                ctx.stroke();
            }

            // Draw floating squares
            const numSquares = 5;
            for (let i = 0; i < numSquares; i++) {
                const x = (Math.sin(time * 0.00002 + i) * width * 0.4) + width / 2; // Barely moving
                const y = (Math.cos(time * 0.00001 + i) * height * 0.4) + height / 2;
                const size = 40 + Math.sin(time * 0.00005 + i) * 20;

                ctx.strokeStyle = i % 2 === 0 ? '#3B82F6' : '#10B981'; // Blue or Green
                ctx.lineWidth = 2;
                ctx.strokeRect(x - size / 2, y - size / 2, size, size);
                
                // Hard shadow for squares
                ctx.fillStyle = 'rgba(0,0,0,0.5)';
                ctx.fillRect(x - size / 2 + 4, y - size / 2 + 4, size, size);
            }

            time += 16;
            animationId = requestAnimationFrame(draw);
        };

        draw();

        return () => {
            window.removeEventListener('resize', resize);
            cancelAnimationFrame(animationId);
        };
    });
</script>

<canvas bind:this={canvas} class="hero-grid"></canvas>

<style>
    .hero-grid {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        z-index: 0;
        pointer-events: none;
        opacity: 0.6;
    }
</style>
