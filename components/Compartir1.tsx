import * as React from "react";
import { ImageBackground, StyleSheet } from "react-native";

const Compartir1 = () => {
  return (
    <ImageBackground
      style={styles.compartir3Icon}
      resizeMode="cover"
      source={require("../assets/compartir1.png")}
    />
  );
};

const styles = StyleSheet.create({
  compartir3Icon: {
    width: 20,
    height: 20,
  },
});

export default Compartir1;
