import React, { useEffect, useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  ImageBackground,
  Dimensions,
  StatusBar,
} from "react-native";
import {
  haze,
  rainy,
  snow,
  sunny,
  cloudy,
} from "../assets/BackgroundImages/index";
import Search from "./Search";

const Weather = ({ weatherData, fetchWeatherData }) => {
  const [backgroundImage, setBackgroundImage] = useState(null);
  const {
    weather,
    name,
    main: { temp, feels_like, humidity },
  } = weatherData;
  const [{ main }] = weather;

  useEffect(() => {
    setBackgroundImage(getBackgroundImg(main));
  }, [weatherData]);

  const getBackgroundImg = (weather) => {
    if (weather === "Snow") return snow;
    else if (weather === "Clear") return sunny;
    else if (weather === "Rain") return rainy;
    else if (weather === "Haze") return haze;
    else return cloudy;
  };
  const feelsLikeInDegree = feels_like - 273;
  const finalFeelsLike = feelsLikeInDegree.toFixed(2);
  const tempInDegree = temp - 273;
  const finalTemp = tempInDegree.toFixed(2);
  let textColor = backgroundImage != rainy ? "black" : "white";

  return (
    <View style={styles.container}>
      <ImageBackground
        source={backgroundImage}
        style={styles.backgroundImg}
        resizeMode="cover"
      >
        <Search fetchWeatherData={fetchWeatherData} />
        <View style={{ alignItems: "center" }}>
          <Text
            style={{ ...styles.headerText, color: textColor, fontSize: 40 }}
          >
            {name}
          </Text>
          <Text
            style={{
              ...styles.infoText,
              color: textColor,
              fontWeight: "bold",
              fontSize: 45,
            }}
          >
            {finalTemp} °C
          </Text>
          <Text style={{ ...styles.infoText, color: textColor, fontSize: 30 }}>
            {main}
          </Text>
        </View>
        <View style={styles.extraInfo}>
          <View style={styles.info}>
            <Text style={{ fontSize: 20, color: "white" }}>Feels Like:</Text>
            <Text style={{ fontSize: 20, color: "white" }}>
              {finalFeelsLike} °C
            </Text>
          </View>

          <View style={styles.info}>
            <Text style={{ fontSize: 20, color: "white" }}>Humidity</Text>
            <Text style={{ fontSize: 20, color: "white" }}>{humidity} %</Text>
          </View>
        </View>
      </ImageBackground>
    </View>
  );
};

export default Weather;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
  },
  backgroundImg: {
    flex: 1,
    width: Dimensions.get("screen").width,
  },
  headerText: {
    marginTop: 40,
  },
  infoText: {
    marginTop: 70,
  },
  extraInfo: {
    flexDirection: "row",
    marginTop: 60,
    justifyContent: "space-between",
    padding: 15,
  },
  info: {
    width: Dimensions.get("screen").width / 2.5,
    backgroundColor: "rgba(0,0,0, 0.5)",
    padding: 10,
    borderRadius: 15,
    alignItems: "center",
  },
});
