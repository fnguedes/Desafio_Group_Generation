import { View, Text, Image, TouchableOpacity } from "react-native";
import React, { useEffect, useState } from "react";
import { takeMovie } from "../../hooks/takeMovie";
import AntDesign from "@expo/vector-icons/AntDesign";

interface Data {
	first: string;
	second: string;
}

interface objectMovie {
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

interface Props {
	movie: objectMovie;
}
export const FullMovie = ({ movie }: Props) => {
	return (
		<View className="w-[100%] h-full py-8 px-4 ">
			<View className=" py-1 items-center flex-row justify-center ">
				<Text className="color-white text-center text-2xl font-bold w-[75%]">
					{movie.Title}
				</Text>

				<View className="flex-row justify-center items-center absolute right-4 top-2">
					<AntDesign name="star" size={24} color="#DAA520" />
					<Text className="color-[#DAA520]">
						{movie.imdbRating !== "N/A" ? movie.imdbRating : null}
					</Text>
				</View>
			</View>

			<View className="w-[100%] h-[350] items-center justify-evenly  mt-4">
				<Image
					source={{
						uri: movie.Poster,
					}}
					className="h-64 w-44 "
				/>
				<View className="w-[100%] ">
					<Text className="color-white text-sm font-light ">
						{movie.Plot !== "N/A" ? movie.Plot.slice(0, 300) : null}
					</Text>
				</View>
			</View>

			<View className="">
				<FullWidthData first="Diretor: " second={movie.Director} />
				<FullWidthData first="Atores: " second={movie.Actors} />
				<FullWidthData first="Duração: " second={movie.Runtime} />
				<FullWidthData first="Escritor(es): " second={movie.Writer} />
				<FullWidthData first="Data de lançamento: " second={movie.Released} />
				<FullWidthData first="Gênero: " second={movie.Genre} />
				<FullWidthData first="País lançado: " second={movie.Country} />
				<FullWidthData first="Custo de Produção: " second={movie.BoxOffice} />
				<FullWidthData first="Prêmio(s): " second={movie.Awards} />
			</View>
		</View>
	);
};

function FullWidthData({ first, second }: Data) {
	return (
		<View className="flex-row items-center mt-3">
			<Text className="font-bold color-white">{first}</Text>
			<Text className="font-light color-white text-sm">
				{second !== "N/A" ? second : "Desconhecido"}
			</Text>
		</View>
	);
}
