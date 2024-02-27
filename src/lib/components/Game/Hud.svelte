<script lang="ts">
	import { logoCount } from '$lib/stores';
	let count = 0;
</script>

<div>
	<p>some sort of hud stuff goes here</p>
</div>

<div>
	<div>
		<h2>Logo count: {$logoCount}</h2>
		<div>
			<input type="range" min="0" max="40" bind:value={$logoCount} />
			<div>
				<button on:click={() => ($logoCount -= 1)}>-</button>
				<button on:click={() => ($logoCount += 1)}>+</button>
			</div>
		</div>
	</div>
</div>

<div />
