<script>
	import '../app.postcss';
	import '@skeletonlabs/skeleton/styles/skeleton.css';
	import '../app.postcss';
	import { AppShell } from '@skeletonlabs/skeleton';
	import { page } from '$app/stores';
	import { getAppBar } from '../utils/appbar.js';
	import { getFooter } from '../utils/footer.js';
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
	<svelte:fragment slot="footer">
		<svelte:component this={getFooter($page.url)} />
	</svelte:fragment>
</AppShell>
