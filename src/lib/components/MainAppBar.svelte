<script>
	import { AppBar, Avatar } from '@skeletonlabs/skeleton';
	import { Inbox, Users } from '@steeze-ui/tabler-icons';
	import { Icon } from '@steeze-ui/svelte-icon';
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
		<span>Play</span>
		<span>Learn</span>
	</svelte:fragment>
	<svelte:fragment slot="trail">
		<Icon src={Users} size="36px" />
		<Icon src={Inbox} size="36px" />
		<span>[Username]</span>
		<Avatar
			src="https://wallpapers-clan.com/wp-content/uploads/2022/08/default-pfp-1.jpg"
			width="w-14"
			rounded="rounded-full"
		/>
	</svelte:fragment>
</AppBar>
