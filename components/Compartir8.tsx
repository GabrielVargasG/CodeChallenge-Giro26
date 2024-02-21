import * as React from "react";
import { ImageBackground, StyleSheet } from "react-native";

const Compartir8 = () => {
  return (
    <ImageBackground
      style={styles.compartir11Icon}
      resizeMode="cover"
      source={require("../assets/compartir1.png")}
    />
  );
};

const styles = StyleSheet.create({
  compartir11Icon: {
    width: 20,
    height: 20,
  },
});

export default Compartir8;
