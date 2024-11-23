import {
	View,
	Text,
	Modal,
	TouchableOpacity,
	Alert,
	TextInput,
} from "react-native";
import React, { useState } from "react";
import type { objectMovie } from "../Movie";

import AntDesign from "@expo/vector-icons/AntDesign";

interface Props {
	movie: objectMovie;
	modalVisible: boolean;
	setModalVisible: (modalVisible: boolean) => void;
	setMovies: (movies: objectMovie[]) => void;
	movies: objectMovie[];
}
export function NoteOrDelete({
	setModalVisible,
	modalVisible,
	movie,
	movies,
	setMovies,
}: Props) {
	const [evaluate, setEvaluate] = useState<string>(movie.imdbRating);
	const [evaluateModal, setEvaluateModal] = useState<boolean>(false);

	function handleRemoveMovie(movie: objectMovie) {
		Alert.alert("Remover", `Deseja remover o filme ${movie.Title}`, [
			{
				text: "Cancel",
				style: "cancel",
			},
			{
				text: "OK",
				onPress: () =>
					setMovies(movies.filter((item) => item.imdbID !== movie.imdbID)),
			},
		]);
	}

	function handleEvaluate() {
		setMovies(
			movies.map((item) =>
				item.imdbID === movie.imdbID
					? { ...item, imdbRating: evaluate.replace(",", ".") }
					: item,
			),
		);

		setEvaluateModal(false);
		setModalVisible(false);
	}

	return (
		<Modal
			animationType="fade"
			transparent={true}
			visible={modalVisible}
			onRequestClose={() => setModalVisible(!modalVisible)}
		>
			<View className="flex-1 justify-end ">
				<TouchableOpacity
					className="h-full w-full absolute -z-50"
					style={{ backgroundColor: "rgba(0,0,0,0.5)" }}
					onPress={() => setModalVisible(false)}
				/>
				<View
					style={{
						height: 200,
						width: "100%",
						borderTopLeftRadius: "20%",
						borderTopRightRadius: "20%",
						alignItems: "center",
						backgroundColor: "#413f3f",
					}}
				>
					<TouchableOpacity
						style={{
							alignItems: "center",
							width: "100%",
							height: "50%",
							justifyContent: "center",
							borderBottomWidth: 2,
							borderColor: "#d9d9d9",
						}}
						onPress={() => {
							setEvaluateModal(true);
						}}
					>
						<Text
							style={{
								fontSize: 20,
								fontWeight: "bold",
								textAlign: "center",
								color: "#fff",
							}}
						>
							Avaliar
						</Text>
					</TouchableOpacity>

					<TouchableOpacity
						style={{
							alignItems: "center",
							width: "100%",
							height: "50%",
							justifyContent: "center",
						}}
						onPress={() => handleRemoveMovie(movie)}
					>
						<Text
							style={{
								fontSize: 20,
								fontWeight: "bold",
								textAlign: "center",
								color: "#fff",
							}}
						>
							Remover Filme
						</Text>
					</TouchableOpacity>
				</View>
			</View>
			<Modal
				animationType="fade"
				transparent={true}
				visible={evaluateModal}
				onRequestClose={() => {
					setEvaluateModal(!evaluateModal);
					setModalVisible(!modalVisible);
				}}
			>
				<TouchableOpacity
					className="h-full w-full absolute -z-50"
					style={{ backgroundColor: "rgba(0,0,0,0.5)" }}
					onPress={() => setEvaluateModal(false)}
				/>
				<View
					style={{ flex: 1, justifyContent: "center", alignItems: "center" }}
				>
					<Text style={{ fontSize: 18, color: "white" }}>
						Avaliação do filme
					</Text>
					<View
						style={{
							width: "20%",
							height: 50,
							marginTop: 15,
							flexDirection: "row",
						}}
					>
						<TextInput
							style={{
								width: "100%",
								height: "80%",
								backgroundColor: "#413f3f",
								borderRadius: 10,
								marginRight: 10,
								justifyContent: "center",
								textAlign: "center",
								fontSize: 16,
								fontWeight: "bold",
								color: "white",
							}}
							keyboardType="decimal-pad"
							onChangeText={setEvaluate}
							value={evaluate}
						/>
						<TouchableOpacity
							style={{
								width: 40,
								height: 40,
								borderRadius: 30,
								justifyContent: "center",
								alignItems: "center",
							}}
							onPress={handleEvaluate}
						>
							<AntDesign name="star" size={40} color="#DAA520" />
						</TouchableOpacity>
					</View>
				</View>
			</Modal>
		</Modal>
	);
}
