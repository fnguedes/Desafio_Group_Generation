import {
	View,
	Text,
	SafeAreaView,
	ScrollView,
	FlatList,
	TouchableOpacity,
	Modal,
	Alert,
	TextInput,
} from "react-native";
import React, { useEffect, useState } from "react";
import type { objectMovie, Props } from "../../components/Movie";
import { Movie } from "../../components/Movie";
import { Button } from "../../components/Button";
import { ModalSearch } from "../../components/ModalSearch";
import MaterialIcons from "@expo/vector-icons/MaterialIcons";
import { getData } from "../../functions/getStoreData";
import { storeData } from "../../functions/storeData";

export function Home() {
	const [modalVisible, setModalVisible] = useState<boolean>(false);
	const [movies, setMovies] = useState<objectMovie[]>([]);
	const [searchMovie, setSearchMovie] = useState("");

	useEffect(() => {
		async function getMovies() {
			const data = await getData();
			if (Array.isArray(data)) {
				setMovies(data);
			} else {
				console.error("Dados inválidos retornados de getData()");
			}
		}
		getMovies();
	}, []);

	useEffect(() => {
		storeData(movies);
	}, [movies]);

	return (
		<SafeAreaView className="flex-1 bg-[#1A1A1A] items-center">
			<Text className="font-bold text-2xl color-white mt-14 font-serif">
				Meus Filmes
			</Text>

			<View className="flex-row h-24 items-center px-4 justify-around">
				<TextInput
					value={searchMovie}
					onChangeText={setSearchMovie}
					className="flex-1 h-16 color-white bg-[#413f3f] rounded-lg mr-2 px-4 font-medium text-lg"
					placeholder="Pesquise seu filme aqui"
					placeholderTextColor={"#bbb"}
				/>
			</View>

			{movies.length > 0 ? (
				<FlatList
					data={movies.filter((item) => item.Title.includes(searchMovie))}
					keyExtractor={(movie) => movie.imdbID}
					renderItem={({ item }: { item: objectMovie }) => (
						<Movie movie={item} movies={movies} setMovies={setMovies} />
					)}
				/>
			) : (
				<View className="flex-1 justify-center items-center">
					<MaterialIcons name="movie-edit" size={50} color="white" />
					<Text className="font-bold color-white font-serif text-center text-lg">
						Sem filmes para assistir?
					</Text>
					<Text className="font-bold color-[#bbb] font-serif text-center w-80">
						pesquise e salve alguns para depois clicando no "+" logo abaixo
					</Text>
				</View>
			)}
			{!modalVisible && (
				<Button modalVisible={modalVisible} setModalVisible={setModalVisible} />
			)}
			<ModalSearch
				modalVisible={modalVisible}
				setModalVisible={setModalVisible}
				setMovies={setMovies}
				movies={movies}
			/>
		</SafeAreaView>
	);
}
