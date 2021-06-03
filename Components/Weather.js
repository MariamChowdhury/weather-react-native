import React, { useEffect, useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  ImageBackground,
  Dimensions,
  StatusBar,
} from "react-native";
import { haze, rainy, snow, sunny } from '../assets/BackgroundImages/index'


const Weather = ({weatherData}) => {
  const [backgroundImage, setBackgroundImage] = useState(null);
  const { weather,
    name,
    main: { temp, humidity },
    wind: { speed }
} = weatherData;
const [{ main }] = weather;

useEffect(() => {
  // setBackgroundImage(getBackgroundImg(main));
  console.log(main);
}, [weatherData])

  return (
    <View style={styles.container}></View>
  );
};


export default Weather;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
  },
});
