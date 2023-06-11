<script lang="ts">
	import type { ActionData } from './$types';
	let experience = 'New';
	export let form: ActionData;
</script>

<div
	class="card rounded-none w-full h-full bg-gradient-to-br variant-gradient-primary-secondary flex justify-center"
>
	<div
		class="card p-4 hero-containers justify-center text-center w-1/3 h-5/6 mt-16 variant-filled-secondary"
	>
		<form method="post">
			<div class="Form-Heading mb-0.5">
				<h1 class="m-2 text-4xl">Join the Poggin' Poros</h1>
				<p>or don't idrk /shrug</p>
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
			<p class="text-xs my-2">How dogwater are you ???</p>
			<div class="experienceCards flex flex-row justify-center space-x-2">
				{#each ['New', 'Beginner', 'Advance', 'Expert'] as c}
					<span
						class="card p-2 w-20 h-20 {experience === c ? 'variant-filled' : 'variant-soft'}"
						on:click={() => {
							experience = c;
						}}
						on:keypress
					>
						<span class="text-4xl">☖</span>
						<span class="inline-block">{c}</span>
					</span>
				{/each}
			</div>

			<div class="Confirm-Button">
				<button type="submit" class="btn m-1 variant-filled-error my-4">Sign Up</button>
			</div>
		</form>
		<div class="divider flex flex-row justify-center mb-4">
			<div class="divider border-black rounded-sm w-44 mt-2.5 h-1 border" />
			<div class="text mx-2">OR</div>
			<div class="divider border-black rounded-sm w-44 mt-2.5 h-1 border" />
		</div>
		<div class="logo-cloud gap-1">
			<a class="logo-item h-10 !bg-[#FFF]" href="/">
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
			>Already have an account? <a class="text-blue-600 hover:text-blue-800" href="/login">Log In</a
			></span
		>
		<span class="text-xs"
			>I accept the site <a class="text-blue-600 hover:text-blue-800" href="/">Terms of Service</a>
			and agree to the
			<a class="text-blue-600 hover:text-blue-800" href="/">Privacy Policy</a>.</span
		>
	</div>
</div>
