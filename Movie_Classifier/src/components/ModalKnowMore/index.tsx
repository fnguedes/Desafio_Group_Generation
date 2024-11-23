import { View, Text, Modal, TouchableOpacity } from "react-native";
import React from "react";
import { FullMovie } from "../FullMovie";
import type { objectMovie } from "../Movie";
import FontAwesome from "@expo/vector-icons/FontAwesome";

interface Props {
	movie: objectMovie;
	modalVisible: boolean;
	setModalVisible: (modalVisible: boolean) => void;
}

export default function KnowMore({
	movie,
	setModalVisible,
	modalVisible,
}: Props) {
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
				<FullMovie movie={movie} />
			</View>
		</Modal>
	);
}
