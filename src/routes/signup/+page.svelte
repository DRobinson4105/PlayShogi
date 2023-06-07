<script lang='ts'>
    import { PrismaClient, User } from '@prisma/client'
    const prisma = new PrismaClient()

    async function createUser() {
    const emailInput = document.querySelector('input[type="email"]') as HTMLInputElement
    const passwordInput = document.querySelector('input[type="password"]') as HTMLInputElement

    if (!emailInput || !passwordInput) {
        console.log('Email or password input is missing')
        return
    }
    
    const newUser = await prisma.user.create({
        data: {
        email: emailInput.value,
        password: passwordInput.value,
        ip: '1',
        username: '5',
        rank: 9,
        wins: 1,
        losses: 1,
        draws: 1,

        }
    })

    console.log(`Created user with email: ${newUser.email}`)
    }

    let users: User[] = []

    async function getUsers() {
        users = await prisma.user.findMany()
  }
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
            {#each users as user}
                <p>{user.username}</p>
            {/each}
        </div>
    </div>

</div>