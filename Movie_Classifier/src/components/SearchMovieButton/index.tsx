import { View, Text, TouchableOpacity } from "react-native";
import React from "react";
import FontAwesome5 from "@expo/vector-icons/FontAwesome5";

interface Props {
	getMovie: () => void;
}

export function SearchMovieButton({ getMovie }: Props) {
	return (
		<TouchableOpacity
			className="h-[60] w-[60] rounded-full bg-[#1E6F9F] justify-center items-center"
			onPress={getMovie}
		>
			<FontAwesome5 name="search" size={24} color="white" />
		</TouchableOpacity>
	);
}
