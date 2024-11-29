export const takeMovie = async (movie: string) => {
	const response = await fetch(
		`https://www.omdbapi.com/?t=${movie.replaceAll(" ", "+")}&apikey=93479b9e`,
	).then((response) => response.json());
	if (response.Error) {
		return false;
	}
	console.log(response);
	return response;
};
