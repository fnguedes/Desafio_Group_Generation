import {
	View,
	Text,
	Modal,
	Alert,
	TouchableOpacity,
	ScrollView,
	TextInput,
} from "react-native";
import React, { useEffect, useState } from "react";
import { FullMovie } from "../FullMovie";
import type { objectMovie } from "../Movie";
import FontAwesome from "@expo/vector-icons/FontAwesome";
import { SearchMovieButton } from "../SearchMovieButton";
import { takeMovie } from "../../hooks/takeMovie";

export interface PropsModal {
	setModalVisible: (visible: boolean) => void;
	modalVisible: boolean;
	setMovies: (movie: objectMovie[]) => void;
	movies: objectMovie[];
}

export function ModalSearch({
	setModalVisible,
	modalVisible,
	setMovies,
	movies,
}: PropsModal) {
	const [movie, setMovie] = useState<objectMovie | null>(null);
	const [searchMovie, setSearchMovie] = useState<string>("");

	const getMovie = async () => {
		setMovie(await takeMovie(searchMovie));
		setTimeout(checkMovie, 2000);
	};

	function checkMovie(movie: objectMovie | null) {
		if (movie) {
			setMovies([...movies, movie]);
			setModalVisible(!modalVisible);
			setMovie(null);
			setSearchMovie("");
		}
	}

	function AddMovie() {
		if (movie && handleListMovies(movie)) {
			setMovies([...movies, movie]);
			setModalVisible(!modalVisible);
			setMovie(null);
			setSearchMovie("");
		} else if (!movie) {
			Alert.alert("Não há filme para adicionar.");
			return;
		} else {
			Alert.alert("Filme já adicionado.");
		}
	}

	function handleListMovies(movie: objectMovie) {
		for (let i = 0; i < movies.length; i++) {
			if (movie.imdbID === movies[i].imdbID) {
				return false;
			}
		}
		return true;
	}

	return (
		<Modal
			animationType="fade"
			transparent={false}
			visible={modalVisible}
			onRequestClose={() => setModalVisible(!modalVisible)}
		>
			<View className="flex-1 bg-[#1A1A1A] justify-center items-center">
				<TouchableOpacity
					className="flex-1 absolute top-4 left-4 z-50"
					onPress={() => setModalVisible(!modalVisible)}
				>
					<FontAwesome name="close" size={40} color="white" />
				</TouchableOpacity>
				<ScrollView
					contentContainerStyle={{
						maxWidth: "100%",
					}}
				>
					{movie && <FullMovie movie={movie} />}
				</ScrollView>

				<View className="w-36 h-12 justify-end items-center absolute bottom-24 z-0">
					<TouchableOpacity
						className="w-full h-full bg-sky-600 rounded-lg justify-center items-center"
						onPress={AddMovie}
					>
						<Text className="text-lg text-center color-white font-bold">
							Adicionar Filme
						</Text>
					</TouchableOpacity>
				</View>

				<View className="flex-row h-24 items-center px-4 justify-around">
					<TextInput
						value={searchMovie}
						onChangeText={setSearchMovie}
						className="flex-1 h-16 color-white bg-[#413f3f] rounded-lg mr-2 px-4 font-medium text-lg"
						placeholder="Pesquise seu filme aqui"
						placeholderTextColor={"#bbb"}
					/>
					<SearchMovieButton getMovie={getMovie} />
				</View>
			</View>
		</Modal>
	);
}
