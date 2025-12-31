import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { Component } from "react";
import Input from "./common/input";
class LoginForm extends Component {
    state = {
        account: {
            username: "",
            password: "",
        },
        errors: {},
    };
    validate = () => {
        const errors = {};
        const { account } = this.state;
        if (account.username.trim() === "")
            errors.username = "Username is required.";
        if (account.password.trim() === "")
            errors.password = "Password is required.";
        return Object.keys(errors).length === 0 ? {} : errors;
    };
    handleSubmit = (event) => {
        event.preventDefault();
        const errors = this.validate();
        this.setState({ errors: errors });
        if (Object.keys(errors).length > 0)
            return;
        // Call the server
        console.log("Submitted");
    };
    handleChange = ({ currentTarget: input, }) => {
        const account = { ...this.state.account };
        const field = input.id;
        account[field] = input.value;
        this.setState({ account });
    };
    render() {
        const { account, errors } = this.state;
        return (_jsxs("div", { children: [_jsx("h1", { children: "Login" }), _jsxs("form", { onSubmit: this.handleSubmit, children: [_jsx(Input, { name: "username", label: "Username", value: account.username, error: errors.username, onChange: this.handleChange }), _jsx(Input, { name: "password", label: "Password", value: account.password, error: errors.password, onChange: this.handleChange }), _jsx("button", { className: "btn btn-primary", children: "Login" })] })] }));
    }
}
export default LoginForm;
