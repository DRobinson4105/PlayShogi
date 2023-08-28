import React, { useState, useCallback } from "react";
import Image from "next/image";
import axios from "axios";
import { NextPageContext } from "next";
import { getSession, signIn } from "next-auth/react";
import { useRouter } from "next/router";
import { FcGoogle } from "react-icons/fc";
import { FaGithub } from "react-icons/fa";

import logo from "/public/images/Logo.svg";
import background from "../public/images/auth-background.jpeg";
import Input from "@/components/Input";

export async function getServerSideProps(context: NextPageContext) {
	const session = await getSession(context);

	if (session) {
		return {
			redirect: {
				destination: "/",
				permanent: false,
			},
		};
	}

	return {
		props: {},
	};
}

const auth = () => {
	const router = useRouter();

	const [name, setName] = useState("");
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");

	const [variant, setVariant] = useState("login");

	const toggleVariant = useCallback(() => {
		setVariant((currentVariant) =>
			currentVariant === "login" ? "register" : "login"
		);
	}, []);

	const login = useCallback(async () => {
		try {
			await signIn("credentials", {
				email,
				password,
				redirect: false,
				callbackUrl: "/",
			});

			router.push("/dashboard");
		} catch (error) {
			console.log(error);
		}
	}, [email, password, router]);

	const register = useCallback(async () => {
		try {
			await axios.post("/api/register", {
				email,
				name,
				password,
			});

			login();
		} catch (error) {
			console.log(error);
		}
	}, [email, name, password, login]);

	return (
		<div className="flex flex-row items-stretch justify-stretch w-screen h-screen">
			{/* Left half of the screen */}
			<div className="relative flex-grow-0 w-1/2 h-screen">
				<Image
					src={background}
					alt="background"
					layout="fill"
					objectFit="cover"
					quality={100}
				/>
				<div className="bg-black bg-opacity-50 absolute inset-0"></div>
			</div>

			{/* Right half of the screen */}
			<div className="flex flex-col items-center justify-start w-1/2 h-screen ">
				{/* Border for logo */}
				<div className="w-20 h-20 mt-20 rounded-md border border-gray-600 flex items-center justify-center p-2 shadow-md">
					{/* Your logo */}
					<Image src={logo} alt="logo" objectFit="contain" />
				</div>

				{/* Your login form content */}
				{/* For example: */}
				<h2 className="text-white text-4xl my-8 font-semibold text-center">
					{variant === "login" ? "Hello! Welcome Back" : "Hello! Get Started"}
				</h2>
				<div className="flex flex-col gap-4 items-center w-1/2 mx-auto">
					{variant === "register" && (
						<Input
							id="name"
							type="text"
							label="Username"
							value={name}
							onChange={(e: any) => setName(e.target.value)}
						/>
					)}
					<Input
						id="email"
						type="email"
						label="Email address"
						value={email}
						onChange={(e: any) => setEmail(e.target.value)}
					/>
					<Input
						type="password"
						id="password"
						label="Password"
						value={password}
						onChange={(e: any) => setPassword(e.target.value)}
					/>
					<div className="flex items-center justify-between w-full">
						<label className="text-neutral-500 flex items-center">
							<input
								type="checkbox"
								className="checkbox checkbox-success checkbox-md mr-2"
							/>
							Remember Me
						</label>
						<a href="#" className="text-blue-600 hover:underline">
							Reset Password
						</a>
					</div>
				</div>
				<button
					onClick={variant === "login" ? login : register}
					className="bg-green-600 py-3 text-white rounded-md w-1/2 mt-6 hover:bg-green-700 transition block mx-auto"
				>
					{variant === "login" ? "Login" : "Sign up"}
				</button>
				{/* Add or and dividers code here*/}
				<div className="flex items-center justify-center w-1/2 mt-4">
					<hr className="border-gray-500 flex-grow mt-1" />
					<span className="mx-4 text-neutral-500">or</span>
					<hr className="border-gray-500 flex-grow mt-1" />
				</div>
				<div className="flex flex-row items-center gap-4 mt-2 justify-center">
					<div
						onClick={() => signIn("google", { callbackUrl: "/dashboard" })}
						className="w-16 h-10 bg-white rounded-md flex items-center justify-center cursor-pointer hover:opacity-80 transition"
					>
						<FcGoogle size={32} />
					</div>
					<div
						onClick={() => signIn("github", { callbackUrl: "/dashboard" })}
						className="w-16 h-10 bg-white rounded-md flex items-center justify-center cursor-pointer hover:opacity-80 transition"
					>
						<FaGithub size={32} style={{ color: "#000" }} />
					</div>
				</div>
				<p className="text-neutral-500 mt-8 text-center">
					{variant === "login"
						? "First time here?"
						: "Already have an account?"}
					<span
						onClick={toggleVariant}
						className="text-blue-600 ml-1 hover:underline hover:text-blue-800 cursor-pointer"
					>
						{variant === "login" ? "Create an account" : "Login"}
					</span>
					.
				</p>
				<p className="text-neutral-500 mt-4 text-center">
					By signing up/logging in you agree to our
					<span className="text-blue-600 ml-1 hover:underline hover:text-blue-800 cursor-pointer">
						Terms and Conditions
					</span>
					.
				</p>
			</div>
		</div>
	);
};

export default auth;
