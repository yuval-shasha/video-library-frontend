import * as React from "react";

interface LikeProps {
	liked?: boolean;
	onClick?: () => void;
}

const Like = ({ liked, onClick }: LikeProps): React.JSX.Element => {
	let classes: string = "fa fa-heart";
	if (!liked) classes += "-o";
	return (
		<i
			onClick={onClick}
			style={{ cursor: "pointer" }}
			className={classes}
			aria-hidden="true"
		></i>
	);
};

export default Like;
