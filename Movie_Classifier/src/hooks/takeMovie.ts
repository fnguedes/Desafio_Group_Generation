export const takeMovie = async (movie: string) => {
	console.log(`Taking movie: ${movie}`);

	const response = await fetch(
		`https://www.omdbapi.com/?t=${movie.replaceAll(" ", "+")}&apikey=93479b9e`,
	).then((response) => response.json());
	// console.log(typeof response);
	return response;
};
