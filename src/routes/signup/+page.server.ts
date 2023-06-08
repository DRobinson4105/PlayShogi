// import { fail } from '@sveltejs/kit';
// import prisma from '$lib/prisma';
// import { redirect } from '@sveltejs/kit';

// /** @type {import('./$types').Actions} */
// export const actions = {
// 	default: async ({ request }) => {
// 		const data = await request.formData();

// 		const email = data.get('email');
// 		const password = data.get('password');

// 		if (!email || !password) {
// 			return fail(400, { email, password, missing: true });
// 		}

// 		if (!/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email)) {
// 			return fail(400, { email, incorrect: true });
// 		}

// 		await prisma.user.create({
// 			data: {
// 				email: email,
// 				password: password
// 			}
// 		});

// 		throw redirect(303, `/drafts`);
// 	}
// };

import { fail } from '@sveltejs/kit';
import prisma from '$lib/prisma';
import { redirect } from '@sveltejs/kit';

/** @type {import('./$types').Actions} */
export const actions = {
	default: async ({ request }) => {
		const data = await request.formData();

		const email = data.get('email');
		const password = data.get('password');

		if (!email || !password) {
			return fail(400, { email, password, missing: true });
		}

		if (!/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email)) {
			return fail(400, { email, incorrect: true });
		}

		await prisma.user.create({
			data: {
				email: email,
				password: password
			}
		});

		throw redirect(303, `/drafts`);
	}
};
