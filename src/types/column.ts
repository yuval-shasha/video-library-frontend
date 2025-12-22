import { Movie } from "./movie";

interface Column {
	label: string;
	path: string;
	content: string | ((item: any) => React.JSX.Element);
}

export type { Column };
