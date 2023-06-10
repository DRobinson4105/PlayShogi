<script>
	import { AppBar } from '@skeletonlabs/skeleton';
</script>

<AppBar
	gridColumns="grid-cols-3"
	slotDefault="place-self-center"
	slotTrail="place-content-end"
	background="bg-gradient-to-br variant-gradient-tertiary-secondary"
>
	<svelte:fragment slot="lead">
		<a href="/">
			<img src="/src/assets/shogi-icon.svg" alt="PlayShogi Logo" />
		</a>
	</svelte:fragment>
	<svelte:fragment slot="trail">
		<div class="flex flex-row space-x-2">
			<a href="/signup" class="btn variant-filled-primary navBarButton w-32">Signup</a>
			<a href="/login" class="btn variant-filled-secondary navBarButton w-32">Login</a>
		</div>
	</svelte:fragment>
</AppBar>
