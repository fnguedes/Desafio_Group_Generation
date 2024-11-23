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
import { ModalSearch } from "../../components/ModalSearch";
import MaterialIcons from "@expo/vector-icons/MaterialIcons";

export function Home() {
	const [modalVisible, setModalVisible] = useState<boolean>(false);
	const [movies, setMovies] = useState<objectMovie[]>([]);
	return (
		<SafeAreaView className="flex-1 bg-[#1A1A1A] items-center">
			<Text className="font-bold text-2xl color-white mt-10 font-serif">
				Meus Filmes
			</Text>

			{movies.length > 0 ? (
				<FlatList
					data={movies}
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
