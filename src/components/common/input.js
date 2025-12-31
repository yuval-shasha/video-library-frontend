import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
const Input = ({ name, label, value, error, onChange, }) => {
    return (_jsxs("div", { className: "form-group", children: [_jsx("label", { htmlFor: name, children: label }), _jsx("input", { value: value, onChange: onChange, id: name, type: "text", className: "form-control" }), error && _jsx("div", { className: "alert alert-danger", children: error })] }));
};
export default Input;
