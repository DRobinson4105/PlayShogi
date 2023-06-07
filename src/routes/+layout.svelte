<script>
	import '@skeletonlabs/skeleton/themes/theme-crimson.css';
	import '@skeletonlabs/skeleton/styles/skeleton.css';
	import '../app.postcss';
	import { AppShell } from '@skeletonlabs/skeleton';
	import { page } from '$app/stores';
	import { getAppBar } from '../utils/appbar.js';
	</script>

<AppShell>
	<svelte:fragment slot="header">
		<svelte:component this={getAppBar($page.url)} />
	</svelte:fragment>
	<!-- (sidebarLeft) -->
	<!-- (sidebarRight) -->
	<!-- (pageHeader) -->
	<!-- Router Slot -->
	<slot />
	<!-- ---- / ---- -->
	<!-- (pageFooter) -->
	<svelte:fragment slot="footer">Footer</svelte:fragment>
</AppShell>