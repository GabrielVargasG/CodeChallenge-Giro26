import * as React from "react";
import { ImageBackground, StyleSheet } from "react-native";

const Compartir9 = () => {
  return (
    <ImageBackground
      style={styles.compartir12Icon}
      resizeMode="cover"
      source={require("../assets/compartir1.png")}
    />
  );
};

const styles = StyleSheet.create({
  compartir12Icon: {
    width: 20,
    height: 20,
  },
});

export default Compartir9;
