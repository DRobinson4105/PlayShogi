<script>
import { LightSwitch } from '@skeletonlabs/skeleton';

function doSomething() {
    console.log('doSomething');
}
</script>


<LightSwitch />

<h1>Welcome to SvelteKit</h1>
<p>Visit <a href="https://kit.svelte.dev">kit.svelte.dev</a> to read the documentation</p>
<button type="button" class="btn-icon variant-filled-primary">(icon)</button>
<span class="chip variant-filled">Chip</span>

<span class="chip variant-soft hover:variant-filled" on:click={doSomething} on:keypress={doSomething}>
	<span>(icon)</span>
	<span>Action</span>
</span>
