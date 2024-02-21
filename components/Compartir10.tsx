import * as React from "react";
import { ImageBackground, StyleSheet } from "react-native";

const Compartir10 = () => {
  return (
    <ImageBackground
      style={styles.compartir13Icon}
      resizeMode="cover"
      source={require("../assets/compartir1.png")}
    />
  );
};

const styles = StyleSheet.create({
  compartir13Icon: {
    width: 20,
    height: 20,
  },
});

export default Compartir10;
