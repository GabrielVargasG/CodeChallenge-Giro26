import * as React from "react";
import { ImageBackground, StyleSheet } from "react-native";

const Compartir2 = () => {
  return (
    <ImageBackground
      style={styles.compartir4Icon}
      resizeMode="cover"
      source={require("../assets/compartir1.png")}
    />
  );
};

const styles = StyleSheet.create({
  compartir4Icon: {
    width: 20,
    height: 20,
  },
});

export default Compartir2;
