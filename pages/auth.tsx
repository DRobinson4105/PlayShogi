import React, { useState } from "react";
import Image from "next/image";

import Logo from "../public/images/shogi-icon.svg";
import Input from "@/components/Input";

const auth = () => {
	const [name, setName] = useState("");
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");

	return (
		<div className="flex flex-col items-center relative min-h-screen w-100% bg-zinc-700 bg-cover bg-fixed bg-center">
			<nav className="px-12 py-5">
				<Image priority src={Logo} alt="Logo" />
			</nav>
			<div className="card mt-10 w-80  bg-base-100 shadow-xl">
				<h1 className="text-white text-4xl my-4 ml-8 font-semibold">Sign Up</h1>

				<div className="flex flex-col gap-4 mb-8">
					<Input
						id="name"
						type="text"
						label="Username"
						value={name}
						onChange={(e: any) => setName(e.target.value)}
					/>
					<Input
						id="email"
						type="email"
						label="Email Address"
						value={email}
						onChange={(e: any) => setEmail(e.target.value)}
					/>
					<Input
						id="password"
						type="password"
						label="Password"
						value={password}
						onChange={(e: any) => setPassword(e.target.value)}
					/>
				</div>
				<button className="btn btn-secondary ml-4 w-3/4 mb-8">Signup</button>
			</div>
		</div>
	);
};

export default auth;
