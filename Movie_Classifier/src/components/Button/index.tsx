import { View, Text, TouchableOpacity, Modal, Alert } from "react-native";
import React, { useState } from "react";
import FontAwesome5 from "@expo/vector-icons/FontAwesome5";

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
			<FontAwesome5 name="search" size={28} color="white" />
		</TouchableOpacity>
	);
}
