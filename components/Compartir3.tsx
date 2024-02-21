import * as React from "react";
import { ImageBackground, StyleSheet } from "react-native";

const Compartir3 = () => {
  return (
    <ImageBackground
      style={styles.compartir5Icon}
      resizeMode="cover"
      source={require("../assets/compartir1.png")}
    />
  );
};

const styles = StyleSheet.create({
  compartir5Icon: {
    width: 20,
    height: 20,
  },
});

export default Compartir3;
