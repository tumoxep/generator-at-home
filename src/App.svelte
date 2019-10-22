<script>
	import { writable } from 'svelte/store';
	
	import PictureUpload from './PictureUpload.svelte';
	
	let miniUploader;
	let uploaderAtHome;
	
	export const source = writable(null);
	export const sourceAtHome = writable(null);
	
	function handleUpload(e) {
    const fileName = e.target.files[0].name;
    const reader = new FileReader();
    reader.readAsDataURL(e.target.files[0]);
    reader.onload = event => {
			const store = e.target.getAttribute('class').indexOf('at-home') !== -1 ? sourceAtHome : source;
			store.update(n => event.target.result);
		}
	}
	
	function handleClick(e) {
		const uploader = e.detail.target.getAttribute('class').indexOf('at-home') !== -1 ? uploaderAtHome : miniUploader;
		uploader.click(e);
	}
</script>

<style>
	p {
		font-size: 48px;
	}
	input {
		opacity: 0.0;
		position: absolute;
		top: 0;
		left: 0;
	}
</style>

<p>
	Me: Can I have <PictureUpload src={source} width="100" on:click="{handleClick}" /> 
</p>
<p>
	Mom: "No, we have already <PictureUpload src={source} width="100" on:click="{handleClick}" /> at home" 
</p>
<p>
	<PictureUpload src={source} width="100" on:click="{handleClick}" /> at home:  
</p>
<PictureUpload atHome="{true}" src={sourceAtHome} width="500" on:click="{handleClick}" />

<input on:change={handleUpload} bind:this={uploaderAtHome} type="file" accept="image/*" class:at-home="{true}" />
<input on:change={handleUpload} bind:this={miniUploader} type="file" accept="image/*" />

