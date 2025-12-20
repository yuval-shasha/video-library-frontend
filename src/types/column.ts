interface Column {
	path: string;
	content: string | ((item: any) => React.JSX.Element);
}

export type { Column };
