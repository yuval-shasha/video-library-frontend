import { jsxs as _jsxs, jsx as _jsx } from "react/jsx-runtime";
import { useParams, useNavigate } from "react-router-dom";
const MovieForm = () => {
    const { id } = useParams();
    const navigate = useNavigate();
    const handleSave = () => {
        navigate("/movies");
    };
    return (_jsxs("div", { children: [_jsxs("h1", { children: ["Movie Form ", id] }), _jsx("button", { className: "btn btn-primary", onClick: handleSave, children: "Save" })] }));
};
export default MovieForm;
