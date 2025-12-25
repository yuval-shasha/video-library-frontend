import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { Link, NavLink } from "react-router-dom";
const NavBar = () => {
    return (_jsxs("nav", { className: "navbar navbar-expand-lg navbar-light bg-light", children: [_jsx(Link, { className: "navbar-brand", to: "/", children: "Vidly" }), _jsx("button", { className: "navbar-toggler", type: "button", "data-toggle": "collapse", "data-target": "#navbarNav", "aria-controls": "navbarNav", "aria-expanded": "false", "aria-label": "Toggle navigation", children: _jsx("span", { className: "navbar-toggler-icon" }) }), _jsx("div", { className: "collapse navbar-collapse", id: "navbarNavAltMarkup", children: _jsxs("div", { className: "navbar-nav", children: [_jsx(NavLink, { className: "nav-item nav-link", to: "/movies", children: "Movies" }), _jsx(NavLink, { className: "nav-item nav-link", to: "/customers", children: "Customers" }), _jsx(NavLink, { className: "nav-item nav-link", to: "/rentals", children: "Rentals" }), _jsx(NavLink, { className: "nav-item nav-link", to: "/login", children: "Login" })] }) })] }));
};
export default NavBar;
