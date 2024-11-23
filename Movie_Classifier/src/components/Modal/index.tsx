import { View, Text, Modal, Alert, TouchableOpacity } from "react-native";
import React, { useEffect } from "react";
import { Movie } from "../Movie";
import type { PropsModal } from "../Button";

export function ModalSearch({ setModalVisible, modalVisible }: PropsModal) {
	return (
		<Modal
			animationType="slide"
			transparent={true}
			visible={modalVisible}
			onRequestClose={() => {
				Alert.alert("Modal has been closed.");
				setModalVisible(!modalVisible);
			}}
		>
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
	);
}
