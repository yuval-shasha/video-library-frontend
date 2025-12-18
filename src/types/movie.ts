interface Movie {
	_id: string;
	title: string;
	genre: { _id: string; name: string };
	numberInStock: number;
	dailyRentalRate: number;
	publishDate?: string;
	liked?: boolean;
}

export type { Movie };
