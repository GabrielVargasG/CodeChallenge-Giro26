import * as React from "react";
import { Image } from "expo-image";
import { StyleSheet, View, Pressable } from "react-native";
import { StackNavigationProp, StackScreenProps } from "@react-navigation/stack";
import { useNavigation, ParamListBase } from "@react-navigation/native";
import { Color } from "../GlobalStyles";

interface Props extends StackScreenProps<any, any> {}

const IPhone1415ProMax2 = ({ navigation }: Props) => {
  return (
    <Pressable
      style={styles.iphone1415ProMax1}
      onPress={() => navigation.navigate("LogIn")}
    >
      <Image
        style={styles.giro262Icon}
        contentFit="cover"
        source={require("../assets/giro26-2.png")}
      />
    </Pressable>
  );
};

const styles = StyleSheet.create({
  giro262Icon: {
    position: "absolute",
    top: 329,
    left: 80,
    width: 270,
    height: 274,
  },
  iphone1415ProMax1: {
    backgroundColor: Color.colorWhite,
    flex: 1,
    width: "100%",
    height: 932,
    overflow: "hidden",
  },
});

export default IPhone1415ProMax2;
