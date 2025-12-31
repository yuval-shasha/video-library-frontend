import * as React from "react";
import { Component } from "react";
import Input from "./common/input";

interface Account {
	username: string;
	password: string;
}

interface Errors {
	[key: string]: string;
}

class LoginForm extends Component {
	state = {
		account: {
			username: "",
			password: "",
		} as Account,
		errors: {} as Errors,
	};

	validate = (): Errors => {
		const errors: Errors = {};

		const { account } = this.state;
		if (account.username.trim() === "")
			errors.username = "Username is required.";
		if (account.password.trim() === "")
			errors.password = "Password is required.";

		return Object.keys(errors).length === 0 ? {} : errors;
	};

	handleSubmit = (event: React.FormEvent<HTMLFormElement>): void => {
		event.preventDefault();

		const errors: Errors = this.validate();

		this.setState({ errors: errors });

		if (Object.keys(errors).length > 0) return;

		// Call the server
		console.log("Submitted");
	};

	handleChange = ({
		currentTarget: input,
	}: React.ChangeEvent<HTMLInputElement>): void => {
		const account: Account = { ...this.state.account };
		const field: keyof Account = input.id as keyof Account;
		account[field] = input.value;
		this.setState({ account });
	};

	render(): React.JSX.Element {
		const { account, errors } = this.state;

		return (
			<div>
				<h1>Login</h1>
				<form onSubmit={this.handleSubmit}>
					<Input
						name="username"
						label="Username"
						value={account.username}
						error={errors.username}
						onChange={this.handleChange}
					/>
					<Input
						name="password"
						label="Password"
						value={account.password}
						error={errors.password}
						onChange={this.handleChange}
					/>
					<button className="btn btn-primary">Login</button>
				</form>
			</div>
		);
	}
}

export default LoginForm;
