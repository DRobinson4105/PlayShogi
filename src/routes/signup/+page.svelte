<script lang="ts">
	import type { ActionData } from './$types';

	export let form: ActionData;
</script>

<div class="card rounded-none w-full h-full bg-gradient-to-br variant-gradient-success-warning">
	<div class="pt-2">
		<div class="card p-4 hero-containers justify-center text-center">
			<form method="post">
				<div class="Form-Heading">
					<h1 class="m-2">Test Sign Up Form</h1>
				</div>
				<div class="Email-and-Password">
					<p class="text-left">Email</p>
					<input
						class="input m-1"
						title="Input (email)"
						name="userEmail"
						type="email"
						placeholder="john@example.com"
						autocomplete="email"
						value={form?.userEmail ?? ''}
					/>
					<p class="text-left">Password</p>
					<input
						class="input m-1"
						title="Input (password)"
						name="userPassword"
						type="password"
						placeholder="password"
						value={form?.userPassword ?? ''}
					/>
				</div>
				<div class="Confirm-Button">
					<button type="submit" class="btn variant-filled-secondary m-1">Sign Up</button>
				</div>
			</form>
		</div>

		<div class="card p-4 hero-containers justify-center text-center">
			<div>
				<h1>Current Database Users</h1>
				<button type="button" class="btn variant-filled-secondary m-1">Get Users</button>
			</div>
			<div class="user-list" />
		</div>
	</div>
</div>
