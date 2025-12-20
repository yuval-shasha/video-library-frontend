import { jsx as _jsx } from "react/jsx-runtime";
const Like = ({ liked, onClick }) => {
    let classes = "fa fa-heart";
    if (!liked)
        classes += "-o";
    return (_jsx("i", { onClick: onClick, style: { cursor: "pointer" }, className: classes, "aria-hidden": "true" }));
};
export default Like;
