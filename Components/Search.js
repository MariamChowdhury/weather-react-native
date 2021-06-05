import React, { useState } from "react";
import { View, TextInput, StyleSheet, Dimensions } from "react-native";
import { FontAwesome5 } from "@expo/vector-icons";
const Search = ({ fetchWeatherData }) => {
  const [cityName, setCityName] = useState("");
  return (
    <View style={styles.search}>
      <TextInput
        placeholder="Enter City name"
        value={cityName}
        onChangeText={(text) => setCityName(text)}
      />
      <FontAwesome5
        name="search"
        size={25}
        color="black"
        onPress={() => fetchWeatherData(cityName)}
      />
    </View>
  );
};
export default Search;
const styles = StyleSheet.create({
  search: {
    marginTop: 80,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    width: Dimensions.get("screen").width - 20,
    borderWidth: 1.5,
    paddingVertical: 10,
    borderRadius: 25,
    marginHorizontal: 10,
    paddingHorizontal: 10,
    backgroundColor: "lightgray",
    borderColor: "lightgray",
  },
});
