<!-- <script lang="ts">
    import type { PageData } from './$types';

    export let data: PageData;
</script>

<div class= "pt-2">
    <div class="card p-4 hero-containers justify-center text-center">
        <div class="Form-Heading">
            <h1 class="m-2">Test Sign Up Form</h1>
        </div>
        <div class="Email-and-Password">
            <p class="text-left">Email</p>
            <input class="input m-1" title="Input (email)" type="email" placeholder="john@example.com" autocomplete="email" />
            <p class="text-left">Password</p>
            <input class="input m-1" title="Input (password)" type="password" placeholder="password" />
        </div>
        <div class="Confirm-Button">
            <button type="button" class="btn variant-filled-secondary m-1" on:click={createUser}>Sign Up</button>  
        </div>
    </div>
    
    <div class="card p-4 hero-containers justify-center text-center">
        <div>
            <h1>Current Database Users</h1>
            <button type="button" class="btn variant-filled-secondary m-1" on:click={getUsers}>Get Users</button>
        </div>
        <div class="user-list">
            {#each data.user as user}
                <div class="user">
                    <p>{user.email}</p>
                </div>
            {/each}
        </div>
    </div>

</div> -->

<script lang="ts">
	import type { ActionData } from './$types';

	export let form: ActionData;
</script>

<div class="page">
	<form method="post">
		<h1>Signup user</h1>
		{#if form?.missing}<p class="error">Missing field required!</p>{/if}
		{#if form?.incorrect}<p class="error">Invalid e-mail address!</p>{/if}
		<input placeholder="Email" type="text" name="email" value={form?.email ?? ''} />
		<input placeholder="Password" type="text" name="password" value={form?.email ?? ''} />
		<button type="submit">Signup</button>

		<a class="back" href="/"> or Cancel </a>
	</form>
</div>

<style scoped>
	.page {
		background: white;
		padding: 3rem;
		display: flex;
		justify-content: center;
	}

	input[type='text'] {
		width: 100%;
		padding: 0.5rem;
		margin: 0.5rem 0;
		border-radius: 0.25rem;
		border: 0.125rem solid rgba(0, 0, 0, 0.2);
	}

	button[type='submit'] {
		background: #ececec;
		border: 0;
		padding: 1rem 2rem;
	}

	.back {
		margin-left: 1rem;
	}
	.error {
		color: red;
	}
</style>
