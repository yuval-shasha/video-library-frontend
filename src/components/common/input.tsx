import * as React from "react";

interface InputProps {
	name: string;
	label: string;
	value: string;
	error?: string;
	onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

const Input = ({
	name,
	label,
	value,
	error,
	onChange,
}: InputProps): React.JSX.Element => {
	return (
		<div className="form-group">
			<label htmlFor={name}>{label}</label>
			<input
				value={value}
				onChange={onChange}
				id={name}
				type="text"
				className="form-control"
			/>
			{error && <div className="alert alert-danger">{error}</div>}
		</div>
	);
};

export default Input;
