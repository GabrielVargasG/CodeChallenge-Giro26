import * as React from "react";
import { ImageBackground, StyleSheet } from "react-native";

const Compartir = () => {
  return (
    <ImageBackground
      style={styles.compartir1Icon}
      resizeMode="cover"
      source={require("../assets/compartir1.png")}
    />
  );
};

const styles = StyleSheet.create({
  compartir1Icon: {
    width: 20,
    height: 20,
  },
});

export default Compartir;
