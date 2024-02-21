import * as React from "react";
import { ImageBackground, StyleSheet } from "react-native";

const Compartir5 = () => {
  return (
    <ImageBackground
      style={styles.compartir8Icon}
      resizeMode="cover"
      source={require("../assets/compartir1.png")}
    />
  );
};

const styles = StyleSheet.create({
  compartir8Icon: {
    width: 20,
    height: 20,
  },
});

export default Compartir5;
