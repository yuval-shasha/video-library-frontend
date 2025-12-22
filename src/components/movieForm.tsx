import * as React from "react";
import { useParams, useNavigate } from "react-router-dom";

const MovieForm = (): React.JSX.Element => {
	const { id } = useParams<{ id: string }>();
	const navigate = useNavigate();
	const handleSave = (): void => {
		navigate("/movies");
	};

	return (
		<div>
			<h1>Movie Form {id}</h1>
			<button className="btn btn-primary" onClick={handleSave}>
				Save
			</button>
		</div>
	);
};

export default MovieForm;
