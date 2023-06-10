<script>
	import '../app.postcss';
	import '@skeletonlabs/skeleton/styles/skeleton.css';
	import '../app.postcss';
	import { AppShell } from '@skeletonlabs/skeleton';
	import { page } from '$app/stores';
	import { getAppBar } from '../utils/appbar.js';
	import { BrandGithub, BrandLinkedin, BrandSvelte } from '@steeze-ui/tabler-icons';
	import { Icon } from '@steeze-ui/svelte-icon';
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
		<div class="card variant-filled-warning rounded-none p-6 text-center">
			<div class="card-top-row mt-2">
				<div class="flex flex-row space-x-4 justify-center ml-5">
					<a href="/" class="mt-4">Shaco</a>
					<a href="/" class="mt-4">Mains</a>
					<a href="/" class="mt-4">are</a>
					<img src="/src/assets/shogi-icon.svg" alt="PlayShogi Logo" />
					<a href="/" class="mt-4">really</a>
					<a href="/" class="mt-4">really</a>
					<a href="/" class="mt-4">nasty</a>
				</div>
				<div class="divider border-black rounded-sm w-30 border my-4" />
				<div class="flex flex-row space-x-2 justify-center icon-row mb-2">
					<a
						href="https://github.com/DRobinson4105"
						target="_blank"
						class="w-12 h-12 bg-purple-50 rounded-full border border-black flex justify-center items-center"
					>
						<Icon src={BrandGithub} size="36px" />
					</a>
					<div
						class="w-12 h-12 bg-purple-50 rounded-full border border-black text-center flex justify-center items-center"
					>
						<Icon src={BrandLinkedin} size="36px" />
					</div>
					<a
						href="https://kit.svelte.dev/"
						target="_blank"
						class="w-12 h-12 bg-purple-50 rounded-full border border-black text-center flex justify-center items-center"
					>
						<Icon src={BrandSvelte} size="36px" />
					</a>
					<div
						class="w-12 h-12 bg-purple-50 rounded-full border border-black text-center flex justify-center items-center"
					>
						<Icon src={BrandLinkedin} size="36px" />
					</div>
					<a
						href="https://github.com/rbrito02"
						target="_blank"
						class="w-12 h-12 bg-purple-50 rounded-full border border-black text-center flex justify-center items-center"
					>
						<Icon src={BrandGithub} size="36px" />
					</a>
				</div>
				<div class="copyright">
					<span>© 2023 PlayShogi</span>
				</div>
			</div>
		</div>
	</svelte:fragment>
</AppShell>
