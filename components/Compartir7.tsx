import * as React from "react";
import { ImageBackground, StyleSheet } from "react-native";

const Compartir7 = () => {
  return (
    <ImageBackground
      style={styles.compartir10Icon}
      resizeMode="cover"
      source={require("../assets/compartir1.png")}
    />
  );
};

const styles = StyleSheet.create({
  compartir10Icon: {
    width: 20,
    height: 20,
  },
});

export default Compartir7;
