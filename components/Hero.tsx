import React from "react";

const Hero = () => {
	return (
		<div className="hero min-h-screen bg-base-200">
			<div className="hero-content flex-col lg:flex-row-reverse">
				<img
					src="/images/stock/photo-1635805737707-575885ab0820.jpg"
					className="max-w-sm rounded-lg shadow-2xl"
				/>
				<div>
					<h1 className="text-5xl font-bold">I'll Fix This Later Drob!!!</h1>
					<p className="py-6">
						Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
						excepturi exercitationem quasi. In deleniti eaque aut repudiandae et
						a id nisi.
					</p>
					<div className="flex flex-row gap-8">
						<button className="btn btn-primary">
							Get Started, or Don't LOL
						</button>
						<button className="btn btn-primary">AHHHHH</button>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Hero;
