<script lang="ts">
	import type { ActionData } from './$types';
	let experience = 'New';
	export let form: ActionData;
	import { page } from '$app/stores';
</script>

<div
	class="card rounded-none w-full h-full bg-gradient-to-br variant-gradient-primary-secondary flex justify-center"
>
	<div
		class="card p-4 hero-containers justify-center text-center w-1/3 {form != null && form.error != null ? 'h-[70%]' : 'h-2/3'} my-auto variant-filled-secondary" id='box'
	>
		<form method="post">
			<div class="Form-Heading mb-0.5">
				<h1 class="mt-2 mx-2 mb-10 text-4xl"> the Poggin' Poros</h1>
			</div>
			<div class="Email-and-Password">
				<input
					class="input m-1"
					title="Input (email)"
					name="userEmail"
					type="email"
					placeholder="Email"
					autocomplete="email"
					value={form?.userEmail ?? ''}
				/>
				<input
					class="input m-1"
					title="Input (password)"
					name="userPassword"
					type="password"
					placeholder="Password"
					value={form?.userPassword ?? ''}
				/>
			</div>

			{#if form?.error}
			<p class="error text-base block mt-2.5 text-red-400">{form.error}</p>
			{/if}

			<div class="Confirm-Button">
				<button type="submit" class="btn m-1 variant-filled-error my-4">Log In</button>
			</div>
		</form>
		<div class="divider flex flex-row justify-center mb-4">
			<div class="divider border-black rounded-sm w-44 h-1 border my-6" />
			<div class="text mx-2 my-3.5">OR</div>
			<div class="divider border-black rounded-sm w-44 h-1 border my-6" />
		</div>
		<div class="logo-cloud gap-1">
			<a class="logo-item h-10 !bg-[#FFF] !hover:black" href="/">
				<img src="/src/assets/google-logo.svg" class="w-8" alt="Google Logo" />
				<span
					class="drop-shadow-[0_1.2px_1.2px_rgba(0,0,0,0.8)]
">Google</span
				>
			</a>
			<a class="logo-item h-10 !bg-[#333]" href="/">
				<img src="/src/assets/github-logo.svg" class="w-8" alt="GitHub Logo" />
				<span
					class="drop-shadow-[0_1.2px_1.2px_rgba(0,0,0,0.8)]
">GitHub</span
				>
			</a>
			<a class="logo-item h-10 !bg-[#738ADB]" href="/">
				<img src="/src/assets/discord-logo.svg" class="w-8" alt="Discord Logo" />
				<span
					class="drop-shadow-[0_1.2px_1.2px_rgba(0,0,0,0.8)]
">Discord</span
				>
			</a>
		</div>
		<span class="text-base block mt-2.5"
			>Don't have an account? <a class="text-blue-400 hover:text-blue-500" href="/signup">Sign Up</a>
		</span>
	</div>
</div>
