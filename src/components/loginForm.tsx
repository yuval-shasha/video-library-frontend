import * as React from "react";
import { Component } from "react";

interface Account {
	username: string;
	password: string;
}

class LoginForm extends Component {
	state = {
		account: {
			username: "",
			password: "",
		} as Account,
	};

	handleSubmit(event: React.FormEvent<HTMLFormElement>): void {
		event.preventDefault();

		console.log("Login submitted");
	}

	handleChange = ({
		currentTarget: input,
	}: React.ChangeEvent<HTMLInputElement>): void => {
		const account: Account = { ...this.state.account };
		const field: keyof Account = input.id as keyof Account;
		account[field] = input.value;
		this.setState({ account });
	};

	render(): React.JSX.Element {
		const { account } = this.state;

		return (
			<div>
				<h1>Login</h1>
				<form onSubmit={this.handleSubmit}>
					<div className="form-group">
						<label htmlFor="username">Username</label>
						<input
							value={account.username}
							onChange={this.handleChange}
							id="username"
							type="text"
							className="form-control"
						/>
					</div>
					<div className="form-group">
						<label htmlFor="password">Password</label>
						<input
							value={account.password}
							onChange={this.handleChange}
							id="password"
							type="text"
							className="form-control"
						/>
					</div>
					<button className="btn btn-primary">Login</button>
				</form>
			</div>
		);
	}
}

export default LoginForm;
