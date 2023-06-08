
import { fail, redirect } from '@sveltejs/kit';
import type { Actions } from './$types';
import prisma from '../../lib/prisma';

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
        await prisma.user.create({
            data: {
                password: userPassword,
                email: userEmail
            },
        });

        throw redirect(303, `/signup`)
    }
} satisfies Actions;