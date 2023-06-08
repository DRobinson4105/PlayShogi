<script>
	import { AppBar, LightSwitch } from "@skeletonlabs/skeleton";
    
</script>


<AppBar gridColumns="grid-cols-3" slotDefault="place-self-center" slotTrail="place-content-end">
    <svelte:fragment slot="lead">
        <img src='/src/assets/shogi-icon.svg' alt='PlayShogi Logo' />
    </svelte:fragment>
    <svelte:fragment slot="trail">
        <a href="/signup" class="btn variant-filled-primary">signup</a>
        <button type="button" class="btn variant-filled-primary">Login</button>
        <LightSwitch />
    </svelte:fragment>
</AppBar>


