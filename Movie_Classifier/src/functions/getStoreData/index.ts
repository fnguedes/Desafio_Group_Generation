import AsyncStorage from "@react-native-async-storage/async-storage";

export const getData = async () => {
	try {
		const jsonValue = await AsyncStorage.getItem("my-movies");
		return jsonValue != null ? JSON.parse(jsonValue) : [];
	} catch (e) {}
};
