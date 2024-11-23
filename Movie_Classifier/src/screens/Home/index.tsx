import {
	View,
	Text,
	SafeAreaView,
	ScrollView,
	FlatList,
	TouchableOpacity,
	Modal,
	Alert,
} from "react-native";
import React, { useState } from "react";
import type { objectMovie, Props } from "../../components/Movie";
import { Movie } from "../../components/Movie";
import { Button } from "../../components/Button";
import { ModalSearch } from "../../components/Modal";

export function Home() {
	const [modalVisible, setModalVisible] = useState<boolean>(false);
	const [movies, setMovies] = useState<objectMovie[]>([
		{
			Actors: "Tom Hanks, Tim Allen, Don Rickles",
			Awards: "Nominated for 3 Oscars. 29 wins & 24 nominations total",
			BoxOffice: "$223,225,679",
			Country: "United States",
			DVD: "N/A",
			Director: "John Lasseter",
			Genre: "Animation, Adventure, Comedy",
			Language: "English",
			Metascore: "96",
			Plot: "A cowboy doll is profoundly threatened and jealous when a new spaceman action figure supplants him as top toy in a boy's bedroom. dasdau dau udqgu agusg uagsbn,adai dahigquda guda dgagugq ugq udgau.",
			Poster:
				"https://m.media-amazon.com/images/M/MV5BZTA3OWVjOWItNjE1NS00NzZiLWE1MjgtZDZhMWI1ZTlkNzYwXkEyXkFqcGc@._V1_SX300.jpg",
			Production: "N/A",
			Rated: "G",
			Ratings: [
				{ Source: "Internet Movie Database", Value: "8.3/10" },
				{ Source: "Rotten Tomatoes", Value: "100%" },
				{ Source: "Metacritic", Value: "96/100" },
			],
			Released: "22 Nov 1995",
			Response: "True",
			Runtime: "81 min",
			Title: "Toy Story",
			Type: "movie",
			Website: "N/A",
			Writer: "John Lasseter, Pete Docter, Andrew Stanton",
			Year: "1995",
			imdbID: "tt0114709",
			imdbRating: "8.3",
			imdbVotes: "1,095,830",
		},
	]);
	return (
		<SafeAreaView className="flex-1 bg-[#1A1A1A] items-center">
			<Text className="font-bold text-2xl color-white mt-10 font-serif">
				Meus Filmes
			</Text>

			<FlatList
				data={movies}
				keyExtractor={(movie) => movie.imdbID}
				renderItem={({ item }: { item: objectMovie }) => <Movie movie={item} />}
			/>

			<Button modalVisible={modalVisible} setModalVisible={setModalVisible} />
			{/* <ModalSearch modalVisible={modalVisible} setModalVisible={setModalVisible} /> */}
			<Modal animationType="slide" transparent={true} visible={modalVisible}>
				<TouchableOpacity
					className="flex-1"
					style={{ backgroundColor: "rgba(0,0,0,0.7)" }}
					onPress={() => setModalVisible(!modalVisible)}
				>
					{
						//<Movie />
					}
				</TouchableOpacity>
			</Modal>
		</SafeAreaView>
	);
}
