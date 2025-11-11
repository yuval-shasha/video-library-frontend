import * as React from "react";

const Like = (props: { liked?: boolean; onClick?: () => void }) => {
	let classes: string = "fa fa-heart";
	if (!props.liked) classes += "-o";
	return (
		<i
			onClick={props.onClick}
			style={{ cursor: "pointer" }}
			className={classes}
			aria-hidden="true"
		></i>
	);
};

export default Like;
