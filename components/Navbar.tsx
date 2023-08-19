import React from "react";
import Image from "next/image";

import Logo from "../public/images/shogi-icon.svg";

const Navbar = () => {
	return (
		<div className="navbar bg-yellow-900 ">
			<div className="flex-1">
				<a className="btn btn-ghost normal-case text-xl">
					<Image priority src={Logo} alt="Logo" />
				</a>
			</div>
			<div className="flex-none">
				<ul className="menu menu-horizontal px-1 gap-3">
					<button className="btn bg-rose-200 text-black w-24">Signup</button>
					<button className="btn w-24">Login</button>
				</ul>
			</div>
		</div>
	);
};

export default Navbar;
