import * as React from "react";
import { StyleSheet, View, Text, Pressable } from "react-native";
import { Image } from "expo-image";
import { StackNavigationProp } from "@react-navigation/stack";
import { useNavigation, ParamListBase } from "@react-navigation/native";
import { Border, Color, FontFamily, FontSize } from "../GlobalStyles";

const LogIn = () => {
  const navigation = useNavigation<StackNavigationProp<ParamListBase>>();

  return (
    <View style={styles.iphone1415ProMax3}>
      <View
        style={[styles.iphone1415ProMax3Child, styles.rectangleChildLayout]}
      />
      <View style={[styles.iphone1415ProMax3Item, styles.iphone1415Layout]} />
      <View style={[styles.iphone1415ProMax3Inner, styles.iphone1415Layout]} />
      <View style={[styles.rectangleView, styles.rectangleChildLayout]} />
      <Image
        style={[styles.ellipseIcon, styles.ellipseIconLayout]}
        contentFit="cover"
        source={require("../assets/ellipse-1.png")}
      />
      <Image
        style={[styles.iphone1415ProMax3Child1, styles.ellipseIconLayout]}
        contentFit="cover"
        source={require("../assets/ellipse-1.png")}
      />
      <Image
        style={[styles.google1Icon, styles.iconLayout]}
        contentFit="cover"
        source={require("../assets/google-1.png")}
      />
      <Image
        style={[styles.facebook1Icon, styles.iconLayout]}
        contentFit="cover"
        source={require("../assets/facebook-1.png")}
      />
      <Text style={[styles.correo, styles.correoTypo]}>Correo</Text>
      <Text style={[styles.nombre, styles.nombreTypo]}>Nombre</Text>
      <Text style={[styles.celular, styles.correoTypo]}>Celular</Text>
      <View
        style={[styles.iphone1415ProMax3Child2, styles.rectangleChildLayout]}
      />
      <Text style={[styles.contrasea, styles.correoTypo]}>Contraseña</Text>
      <Text style={[styles.apellido, styles.nombreTypo]}>Apellido</Text>
      <Pressable
        style={[styles.rectanglePressable, styles.rectangleChildLayout]}
        onPress={() => navigation.navigate("IPhone1415ProMax3")}
      />
      <Text style={[styles.registrar, styles.correoTypo]}>REGISTRAR</Text>
      <Image
        style={styles.giro263Icon}
        contentFit="cover"
        source={require("../assets/giro26-3.png")}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  rectangleChildLayout: {
    height: 54,
    width: 300,
    borderRadius: Border.br_81xl,
    left: 68,
    position: "absolute",
  },
  iphone1415Layout: {
    width: 130,
    top: 424,
    height: 54,
    backgroundColor: Color.colorGainsboro_200,
    borderRadius: Border.br_81xl,
    position: "absolute",
  },
  ellipseIconLayout: {
    height: 84,
    width: 84,
    top: 791,
    position: "absolute",
  },
  iconLayout: {
    height: 63,
    width: 63,
    top: 801,
    position: "absolute",
  },
  correoTypo: {
    textAlign: "left",
    fontFamily: FontFamily.interRegular,
    position: "absolute",
  },
  nombreTypo: {
    top: 402,
    textAlign: "left",
    color: Color.colorGray_100,
    fontFamily: FontFamily.interRegular,
    fontSize: FontSize.size_sm,
    position: "absolute",
  },
  iphone1415ProMax3Child: {
    top: 315,
    backgroundColor: Color.colorGainsboro_200,
    width: 300,
    borderRadius: Border.br_81xl,
  },
  iphone1415ProMax3Item: {
    left: 68,
    width: 130,
    top: 424,
  },
  iphone1415ProMax3Inner: {
    left: 235,
  },
  rectangleView: {
    top: 533,
    backgroundColor: Color.colorGainsboro_200,
    width: 300,
    borderRadius: Border.br_81xl,
  },
  ellipseIcon: {
    left: 122,
  },
  iphone1415ProMax3Child1: {
    left: 230,
  },
  google1Icon: {
    left: 240,
  },
  facebook1Icon: {
    left: 132,
  },
  correo: {
    top: 295,
    color: Color.colorGray_100,
    fontSize: FontSize.size_sm,
    textAlign: "left",
    fontFamily: FontFamily.interRegular,
    left: 87,
  },
  nombre: {
    left: 87,
    top: 402,
  },
  celular: {
    top: 512,
    color: Color.colorGray_100,
    fontSize: FontSize.size_sm,
    textAlign: "left",
    fontFamily: FontFamily.interRegular,
    left: 87,
  },
  iphone1415ProMax3Child2: {
    top: 635,
    backgroundColor: Color.colorGainsboro_200,
    width: 300,
    borderRadius: Border.br_81xl,
  },
  contrasea: {
    top: 613,
    color: Color.colorGray_100,
    fontSize: FontSize.size_sm,
    textAlign: "left",
    fontFamily: FontFamily.interRegular,
    left: 87,
  },
  apellido: {
    left: 251,
  },
  rectanglePressable: {
    top: 726,
    backgroundColor: Color.colorDodgerblue,
    width: 300,
    borderRadius: Border.br_81xl,
  },
  registrar: {
    top: 741,
    left: 160,
    fontSize: FontSize.size_xl,
    color: Color.colorWhite,
    textAlign: "left",
    fontFamily: FontFamily.interRegular,
  },
  giro263Icon: {
    top: 103,
    left: 137,
    width: 155,
    height: 157,
    position: "absolute",
  },
  iphone1415ProMax3: {
    backgroundColor: Color.colorWhite,
    flex: 1,
    width: "100%",
    height: 932,
    overflow: "hidden",
  },
});

export default LogIn;
