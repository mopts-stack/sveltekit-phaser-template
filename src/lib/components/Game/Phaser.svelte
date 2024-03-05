<script lang="ts">
	import Phaser from 'phaser';

	import { onMount } from 'svelte';
	import Hud from './Hud.svelte';
	import { config } from '$lib/phaser';

	let gameContainer: HTMLCanvasElement;

	onMount(async () => {
		config.canvas = gameContainer;
		const game = new Phaser.Game(config);
	});
</script>

<!-- Parent container with relative positioning -->
<div class="container">
	<!-- Hud component with absolute positioning to overlay on top of the canvas -->
	<div class="hud">
		<Hud />
	</div>

	<!-- Canvas container -->
	<canvas bind:this={gameContainer} />
</div>

<style>
	.container {
		position: relative;
		width: 100%;
		height: 100%;
		user-select: none; /* Disable text selection */
	}

	.container .hud {
		position: absolute;
		z-index: 1;
		color: white;
		display: flex;
		justify-content: center;
		align-items: center;
		text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.5); /* Text shadow for contrast */
		background-color: rgba(0, 0, 0, 0.5); /* Semi-transparent background */
		padding: 0 10px; /* Padding for text */
	}
</style>
