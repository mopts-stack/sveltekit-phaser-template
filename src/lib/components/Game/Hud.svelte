<script lang="ts">
	import { logoCount } from '$lib/stores';
</script>

<div>
	<p>some sort of hud stuff goes here</p>
</div>
<h2>Logo count: {$logoCount}</h2>
<input type="range" min="0" max="40" bind:value={$logoCount} />
<div>
	<button on:click={() => ($logoCount -= 1)}>-</button>
	<button on:click={() => ($logoCount += 1)}>+</button>
</div>
