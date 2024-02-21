import * as React from "react";
import { StyleSheet, View, Pressable, Text } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { Image } from "expo-image";
import { StackNavigationProp } from "@react-navigation/stack";
import { useNavigation, ParamListBase } from "@react-navigation/native";
import { Border, Color, FontFamily, FontSize } from "../GlobalStyles";

const IPhone1415ProMax23 = () => {
  const navigation = useNavigation<StackNavigationProp<ParamListBase>>();

  return (
    <View style={styles.iphone1415ProMax19}>
      <LinearGradient
        style={[styles.wrapper, styles.wrapperLayout]}
        locations={[0, 1]}
        colors={["#3a8cff", "rgba(58, 140, 255, 0)"]}
      >
        <Pressable
          style={[styles.pressable, styles.pressableBg]}
          onPress={() => navigation.navigate("IPhone1415ProMax18")}
        />
      </LinearGradient>
      <LinearGradient
        style={[styles.container, styles.wrapperLayout]}
        locations={[0, 1]}
        colors={["#3a8cff", "rgba(58, 140, 255, 0)"]}
      >
        <Pressable
          style={[styles.pressable, styles.pressableBg]}
          onPress={() => navigation.navigate("IPhone1415ProMax20")}
        />
      </LinearGradient>
      <Image
        style={[styles.apretonDeManos1Icon, styles.iconLayout]}
        contentFit="cover"
        source={require("../assets/apretondemanos-11.png")}
      />
      <Image
        style={[styles.contrato1Icon, styles.iconLayout]}
        contentFit="cover"
        source={require("../assets/contrato-11.png")}
      />
      <Text style={[styles.prstamos, styles.prstamosTypo]}>Préstamos</Text>
      <Text style={[styles.impresora, styles.prstamosTypo]}>Impresora</Text>
      <Image
        style={styles.giro264Icon}
        contentFit="cover"
        source={require("../assets/giro26-4.png")}
      />
      <Image
        style={[styles.corona1Icon, styles.iconLayout]}
        contentFit="cover"
        source={require("../assets/corona-1.png")}
      />
      <LinearGradient
        style={[styles.iphone1415ProMax19Child, styles.pressableBg]}
        locations={[0, 1]}
        colors={["#3a8cff", "rgba(58, 140, 255, 0)"]}
      />
      <Image
        style={[styles.atencionAlCliente3Icon, styles.iconLayout]}
        contentFit="cover"
        source={require("../assets/componentes-1.png")}
      />
      <Text style={[styles.configuracin, styles.prstamosTypo]}>
        Configuración
      </Text>
      <Pressable
        style={[styles.botonDeFlechaIzquierdaDel, styles.corona2IconPosition]}
        onPress={() => navigation.navigate("IPhone1415ProMax3")}
      >
        <Image
          style={styles.iconLayout1}
          contentFit="cover"
          source={require("../assets/botondeflechaizquierdadelteclado-1.png")}
        />
      </Pressable>
      <Image
        style={[styles.corona2Icon, styles.corona2IconPosition]}
        contentFit="cover"
        source={require("../assets/corona-1.png")}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  wrapperLayout: {
    height: 148,
    width: 118,
    top: 376,
    position: "absolute",
  },
  pressableBg: {
    backgroundColor: "transparent",
    borderBottomLeftRadius: Border.br_31xl,
  },
  iconLayout: {
    height: 64,
    width: 64,
    position: "absolute",
  },
  prstamosTypo: {
    textAlign: "center",
    color: Color.colorBlack,
    fontFamily: FontFamily.interRegular,
    position: "absolute",
  },
  corona2IconPosition: {
    top: 11,
    height: 64,
    width: 64,
    position: "absolute",
  },
  pressable: {
    borderTopLeftRadius: Border.br_xl,
    borderTopRightRadius: Border.br_31xl,
    borderBottomRightRadius: Border.br_xl,
    height: "100%",
    width: "100%",
  },
  wrapper: {
    left: 78,
  },
  container: {
    left: 234,
  },
  apretonDeManos1Icon: {
    left: 261,
    top: 492,
    width: 64,
  },
  contrato1Icon: {
    left: 105,
    top: 492,
    width: 64,
  },
  prstamos: {
    left: 102,
    fontSize: FontSize.size_sm,
    top: 441,
    textAlign: "center",
    color: Color.colorBlack,
    fontFamily: FontFamily.interRegular,
  },
  impresora: {
    left: 260,
    fontSize: FontSize.size_sm,
    top: 441,
    textAlign: "center",
    color: Color.colorBlack,
    fontFamily: FontFamily.interRegular,
  },
  giro264Icon: {
    top: 870,
    left: 25,
    width: 55,
    height: 56,
    position: "absolute",
  },
  corona1Icon: {
    top: 857,
    left: 352,
  },
  iphone1415ProMax19Child: {
    top: 0,
    left: 0,
    borderBottomRightRadius: Border.br_31xl,
    width: 430,
    height: 157,
    position: "absolute",
  },
  atencionAlCliente3Icon: {
    top: 125,
    left: 183,
  },
  configuracin: {
    top: 75,
    left: 91,
    fontSize: FontSize.size_13xl,
    width: 250,
  },
  iconLayout1: {
    height: "100%",
    width: "100%",
  },
  botonDeFlechaIzquierdaDel: {
    left: 16,
  },
  corona2Icon: {
    left: 352,
  },
  iphone1415ProMax19: {
    backgroundColor: Color.colorWhite,
    flex: 1,
    height: 932,
    overflow: "hidden",
    width: "100%",
  },
});

export default IPhone1415ProMax23;
