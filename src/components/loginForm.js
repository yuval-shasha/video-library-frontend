import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { Component } from "react";
import Input from "./common/input";
class LoginForm extends Component {
    state = {
        account: {
            username: "",
            password: "",
        },
    };
    handleSubmit(event) {
        event.preventDefault();
        console.log("Login submitted");
    }
    handleChange = ({ currentTarget: input, }) => {
        const account = { ...this.state.account };
        const field = input.id;
        account[field] = input.value;
        this.setState({ account });
    };
    render() {
        const { account } = this.state;
        return (_jsxs("div", { children: [_jsx("h1", { children: "Login" }), _jsxs("form", { onSubmit: this.handleSubmit, children: [_jsx(Input, { name: "username", label: "Username", value: account.username, onChange: this.handleChange }), _jsx(Input, { name: "password", label: "Password", value: account.password, onChange: this.handleChange }), _jsx("button", { className: "btn btn-primary", children: "Login" })] })] }));
    }
}
export default LoginForm;
