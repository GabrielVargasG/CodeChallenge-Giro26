import * as React from "react";
import { ImageBackground, StyleSheet } from "react-native";

const Compartir6 = () => {
  return (
    <ImageBackground
      style={styles.compartir9Icon}
      resizeMode="cover"
      source={require("../assets/compartir1.png")}
    />
  );
};

const styles = StyleSheet.create({
  compartir9Icon: {
    width: 20,
    height: 20,
  },
});

export default Compartir6;
