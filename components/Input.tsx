import React from "react";

interface InputProps {
	id: string;
	onChange: any;
	value: string;
	label: string;
	type?: string;
}

const Input: React.FC<InputProps> = ({ id, onChange, value, label, type }) => {
	return (
		<input
			id={id}
			type={type}
			placeholder={label}
			value={value}
			onChange={onChange}
			className="input ml-4 input-bordered w-4/5 max-w-xs"
		/>
	);
};

export default Input;
