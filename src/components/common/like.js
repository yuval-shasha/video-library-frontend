import { jsx as _jsx } from "react/jsx-runtime";
const Like = (props) => {
    let classes = "fa fa-heart";
    if (!props.liked)
        classes += "-o";
    return (_jsx("i", { onClick: props.onClick, style: { cursor: "pointer" }, className: classes, "aria-hidden": "true" }));
};
export default Like;
