import AsyncStorage from "@react-native-async-storage/async-storage";
import type { objectMovie } from "../../components/Movie";

export const storeData = async (movies: objectMovie[]) => {
	try {
		const jsonValue = JSON.stringify(movies);
		await AsyncStorage.setItem("my-movies", jsonValue);
	} catch (e) {}
};
