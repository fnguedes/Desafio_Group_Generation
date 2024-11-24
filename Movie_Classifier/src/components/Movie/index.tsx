import { View, Text, Image, TouchableOpacity } from "react-native";
import React, { useEffect, useState } from "react";
import AntDesign from "@expo/vector-icons/AntDesign";
import KnowMore from "../ModalKnowMore";
import { NoteOrDelete } from "../ModalNoteOrDelete";

interface Data {
	first: string;
	second: string;
}

export interface objectMovie {
	Actors: string;
	Awards: string;
	BoxOffice: string;
	Country: string;
	DVD: string;
	Director: string;
	Genre: string;
	Language: string;
	Metascore: string;
	Plot: string;
	Poster: string;
	Production: string;
	Rated: string;
	Ratings: { Source: string; Value: string }[];
	Released: string;
	Response: string;
	Runtime: string;
	Title: string;
	Type: string;
	Website: string;
	Writer: string;
	Year: string;
	imdbID: string;
	imdbRating: string;
	imdbVotes: string;
}

export interface Props {
	movie: objectMovie;
	movies: objectMovie[];
	setMovies: (movies: objectMovie[]) => void;
}
export const Movie = ({ movie, movies, setMovies }: Props) => {
	const [knowMore, setKnowMore] = useState<boolean>(false);
	const [noteOrDelete, setNoteOrDelete] = useState<boolean>(false);

	return (
		<TouchableOpacity
			className="flex-row h-[300] w-full border-b-2 border-[#D9D9D9] px-[20] items-center"
			activeOpacity={0.7}
			onPress={() => setNoteOrDelete(true)}
		>
			<Image
				source={{
					uri: movie.Poster,
				}}
				className="h-64 w-44 "
			/>
			<View className="ml-3 w-[58%] h-full mt-16">
				<View className="py-1 items-center flex-row justify-center">
					<Text
						className="color-white text-center text-lg font-bold w-[75%]"
						numberOfLines={2}
					>
						{movie.Title.slice(0, 30)}
					</Text>

					<View className="flex-row justify-center items-center">
						<AntDesign name="star" size={24} color="#DAA520" />
						<Text className="color-[#DAA520]">
							{movie.imdbRating !== "N/A" ? movie.imdbRating : null}
						</Text>
					</View>
				</View>

				<Text
					className="color-white text-sm mt-2 font-light "
					numberOfLines={4}
				>
					{movie.Plot !== "N/A" ? movie.Plot : "Sem sinopse"}
				</Text>

				<View className="w-[95%] h-28 ">
					<Data first="Diretor: " second={movie.Director} />
					<Data first="Ano de lançamento: " second={movie.Year.slice(0, 4)} />
					<Data first="Gênero: " second={movie.Genre} />
				</View>

				<View className="w-[90%] h-[15%] justify-end items-center absolute bottom-16">
					<TouchableOpacity className="" onPress={() => setKnowMore(true)}>
						<Text className="color-[#f00] underline text-lg">Saiba mais</Text>
					</TouchableOpacity>
				</View>
			</View>
			<KnowMore
				setModalVisible={setKnowMore}
				modalVisible={knowMore}
				movie={movie}
			/>
			<NoteOrDelete
				setModalVisible={setNoteOrDelete}
				modalVisible={noteOrDelete}
				movie={movie}
				movies={movies}
				setMovies={setMovies}
			/>
		</TouchableOpacity>
	);
};

function Data({ first, second }: Data) {
	return (
		<View className="flex-row items-center mt-2">
			<Text className="font-bold color-white">{first}</Text>
			<Text className="font-light color-white text-sm max-w-48">
				{second !== "N/A" ? second : "Desconhecido"}
			</Text>
		</View>
	);
}
