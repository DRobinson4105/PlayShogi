
import { fail, redirect } from '@sveltejs/kit';
import type { Actions } from './$types';
import prisma from '../../lib/prisma';
import { Box } from '@steeze-ui/tabler-icons';
import { error } from '@sveltejs/kit';

const validateEmail = (email: string) => {
    return (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email))
}

export const actions = {
    // 1.
    default: async ({ request }) => {
        const data = await request.formData();

        let userPassword = data.get("userPassword")
        let userEmail = data.get("userEmail")

        // 2.
        if (!userPassword || !userEmail) {
            return fail(400, { userPassword, userEmail, missing: true });
        }
                // 3.
        if (typeof userPassword != "string" || typeof userEmail != "string") {
            return fail(400, { incorrect: true })
        }
                // 4.
        if (!validateEmail(userEmail)) {
            return fail(400, { incorrect: true });
        }

        // 5.
        const user = await prisma.user.findUnique({
            where: {
              email: userEmail,
            },
          })
        
        if (user?.password == userPassword) {
            throw redirect(303, `/dashboard`)
        }
        else {
            return fail(422, {
                height: "h-1",
                error: "Incorrect username or password dumbass"
            });
            // value = true;
            // const text = document.getElementById('incorrect');

            // if (text != null) {
            //     text.classList.remove('hidden');
            // }
        }
    }
} satisfies Actions;