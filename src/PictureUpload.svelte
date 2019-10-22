<script>
	import { createEventDispatcher } from 'svelte';
	
	export let src;
	export let width;
	export let atHome = false;
	
	const dispatch = createEventDispatcher();
	
	function handleClick(e) {
		dispatch('click', e);		
	}
</script>

<style>
	.container {
		background-size: contain;
		background-repeat: no-repeat;
		display: inline-block;
		vertical-align: middle;
		cursor: pointer;
	}
</style>

{#if $src}
<img class="container" class:at-home="{!!atHome}" src="{$src}" style="max-width: {width}px" alt="uploaded image" on:click={handleClick} />
{:else}
<img class="container" class:at-home="{!!atHome}" src="{`https://place-hold.it/${width}x${width})`}" alt="placeholder" on:click={handleClick}
>
{/if}