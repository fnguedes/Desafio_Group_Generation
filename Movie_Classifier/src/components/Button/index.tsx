import { View, Text, TouchableOpacity, Modal, Alert } from "react-native";
import React, { useState } from "react";
import Entypo from "@expo/vector-icons/Entypo";

export interface PropsModal {
	setModalVisible: (visible: boolean) => void;
	modalVisible: boolean;
}
export function Button({ setModalVisible, modalVisible }: PropsModal) {
	return (
		<TouchableOpacity
			className="h-[60] w-[60] rounded-full bg-[#1E6F9F] absolute bottom-8 right-8 justify-center items-center"
			onPress={() => setModalVisible(!modalVisible)}
			activeOpacity={0.2}
		>
			<Entypo name="plus" size={36} color="white" />
		</TouchableOpacity>
	);
}
