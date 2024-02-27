<script lang="ts">
	import Phaser from 'phaser';

	import { onMount } from 'svelte';
	import Hud from './Hud.svelte';
	import { config } from '$lib/phaser';

	let gameContainer: HTMLCanvasElement;

	onMount(async () => {
		config.canvas = gameContainer;
		const game = new Phaser.Game(config);

		window.addEventListener('resize', () => {
			game.scale.resize(window.innerWidth, window.innerHeight);
		});
	});
</script>

<div>
	<canvas bind:this={gameContainer} width={window.innerWidth} height={window.innerHeight} />
</div>

<Hud />
