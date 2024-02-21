import * as React from "react";
import { ImageBackground, StyleSheet } from "react-native";

const Compartir4 = () => {
  return (
    <ImageBackground
      style={styles.compartir6Icon}
      resizeMode="cover"
      source={require("../assets/compartir1.png")}
    />
  );
};

const styles = StyleSheet.create({
  compartir6Icon: {
    width: 20,
    height: 20,
  },
});

export default Compartir4;
