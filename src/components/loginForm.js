import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { Component } from "react";
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
        return (_jsxs("div", { children: [_jsx("h1", { children: "Login" }), _jsxs("form", { onSubmit: this.handleSubmit, children: [_jsxs("div", { className: "form-group", children: [_jsx("label", { htmlFor: "username", children: "Username" }), _jsx("input", { value: account.username, onChange: this.handleChange, id: "username", type: "text", className: "form-control" })] }), _jsxs("div", { className: "form-group", children: [_jsx("label", { htmlFor: "password", children: "Password" }), _jsx("input", { value: account.password, onChange: this.handleChange, id: "password", type: "text", className: "form-control" })] }), _jsx("button", { className: "btn btn-primary", children: "Login" })] })] }));
    }
}
export default LoginForm;
