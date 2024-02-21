import * as React from "react";
import { ImageBackground, StyleSheet } from "react-native";

const Compartir11 = () => {
  return (
    <ImageBackground
      style={styles.compartir14Icon}
      resizeMode="cover"
      source={require("../assets/compartir1.png")}
    />
  );
};

const styles = StyleSheet.create({
  compartir14Icon: {
    width: 20,
    height: 20,
  },
});

export default Compartir11;
