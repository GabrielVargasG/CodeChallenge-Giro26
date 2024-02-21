import * as React from "react";
import { Image } from "expo-image";
import { StyleSheet, View, Text, Pressable } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { StackNavigationProp } from "@react-navigation/stack";
import { useNavigation, ParamListBase } from "@react-navigation/native";
import { Color, FontSize, FontFamily, Border } from "../GlobalStyles";

const IPhone1415ProMax16 = () => {
  const navigation = useNavigation<StackNavigationProp<ParamListBase>>();

  return (
    <View style={styles.iphone1415ProMax17}>
      <Image
        style={styles.giro264Icon}
        contentFit="cover"
        source={require("../assets/giro26-4.png")}
      />
      <LinearGradient
        style={styles.iphone1415ProMax17Child}
        locations={[0, 1]}
        colors={["#3a8cff", "rgba(58, 140, 255, 0)"]}
      />
      <Image
        style={[styles.corona1Icon, styles.iconLayout]}
        contentFit="cover"
        source={require("../assets/corona-1.png")}
      />
      <Image
        style={[styles.corona2Icon, styles.corona2IconPosition]}
        contentFit="cover"
        source={require("../assets/corona-1.png")}
      />
      <Image
        style={[styles.atencionAlCliente2Icon, styles.iconLayout]}
        contentFit="cover"
        source={require("../assets/apretondemanos-1.png")}
      />
      <Text style={styles.clientes}>Clientes</Text>
      <Pressable
        style={[styles.botonDeFlechaIzquierdaDel, styles.corona2IconPosition]}
        onPress={() => navigation.navigate("IPhone1415ProMax3")}
      >
        <Image
          style={styles.icon}
          contentFit="cover"
          source={require("../assets/botondeflechaizquierdadelteclado-1.png")}
        />
      </Pressable>
      <Text style={[styles.calcular, styles.calcularTypo]}>Calcular</Text>
      <Text style={styles.aceptar}>Aceptar</Text>
      <View
        style={[styles.iphone1415ProMax17Item, styles.iphone1415Position]}
      />
      <LinearGradient
        style={[styles.iphone1415ProMax17Inner, styles.iphone1415Layout]}
        locations={[0, 1]}
        colors={["#3a8cff", "rgba(58, 140, 255, 0)"]}
      />
      <Text style={[styles.text, styles.textTypo]}>1</Text>
      <Text style={[styles.juanCarlosCosio, styles.juanTypo]}>
        JUAN CARLOS COSIO RODRIGUEZ
      </Text>
      <Text
        style={[styles.teotihuacan1119Unidad, styles.juanTypo]}
      >{`TEOTIHUACAN 1119,
UNIDAD MODELO
MONTERREY, NUEVO LEON`}</Text>
      <View style={[styles.rectangleView, styles.rectanglePosition]} />
      <LinearGradient
        style={[styles.rectangleLineargradient, styles.rectanglePosition]}
        locations={[0, 1]}
        colors={["#3a8cff", "rgba(58, 140, 255, 0)"]}
      />
      <Text style={[styles.text1, styles.textTypo]}>2</Text>
      <Text style={[styles.juanCarlosCosio1, styles.juanTypo]}>
        JUAN CARLOS COSIO RODRIGUEZ
      </Text>
      <Text
        style={[styles.teotihuacan1119Unidad1, styles.juanTypo]}
      >{`TEOTIHUACAN 1119,
UNIDAD MODELO
MONTERREY, NUEVO LEON`}</Text>
      <View
        style={[
          styles.iphone1415ProMax17Child1,
          styles.iphone1415ChildPosition,
        ]}
      />
      <LinearGradient
        style={[
          styles.iphone1415ProMax17Child2,
          styles.iphone1415ChildPosition,
        ]}
        locations={[0, 1]}
        colors={["#3a8cff", "rgba(58, 140, 255, 0)"]}
      />
      <Text style={[styles.text2, styles.textTypo]}>3</Text>
      <Text style={[styles.juanCarlosCosio2, styles.juanTypo]}>
        JUAN CARLOS COSIO RODRIGUEZ
      </Text>
      <Text
        style={[styles.teotihuacan1119Unidad2, styles.juanTypo]}
      >{`TEOTIHUACAN 1119,
UNIDAD MODELO
MONTERREY, NUEVO LEON`}</Text>
      <View
        style={[styles.iphone1415ProMax17Child3, styles.iphone1415ChildLayout]}
      />
      <Text style={[styles.anterior, styles.calcularTypo]}>Anterior</Text>
      <View
        style={[styles.iphone1415ProMax17Child4, styles.iphone1415ChildLayout]}
      />
      <Text style={styles.cliente}>Cliente</Text>
      <View
        style={[styles.iphone1415ProMax17Child5, styles.iphone1415ChildLayout]}
      />
      <Image
        style={styles.lupa1Icon}
        contentFit="cover"
        source={require("../assets/lupa-1.png")}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  iconLayout: {
    height: 64,
    width: 64,
    position: "absolute",
  },
  corona2IconPosition: {
    top: 11,
    height: 64,
    width: 64,
    position: "absolute",
  },
  calcularTypo: {
    color: Color.colorWhite,
    fontSize: FontSize.size_xl,
    top: 806,
    textAlign: "center",
    fontFamily: FontFamily.interRegular,
    position: "absolute",
  },
  iphone1415Position: {
    height: 104,
    top: 260,
    left: 0,
    position: "absolute",
  },
  iphone1415Layout: {
    width: 40,
    borderBottomRightRadius: Border.br_11xl,
    borderTopRightRadius: Border.br_11xl,
    backgroundColor: "transparent",
  },
  textTypo: {
    color: Color.colorGray_300,
    left: 7,
    textAlign: "left",
    fontSize: FontSize.size_xl,
    fontFamily: FontFamily.interRegular,
    position: "absolute",
  },
  juanTypo: {
    fontSize: FontSize.size_sm,
    left: 48,
    color: Color.colorGray_300,
    textAlign: "left",
    fontFamily: FontFamily.interRegular,
    position: "absolute",
  },
  rectanglePosition: {
    top: 365,
    height: 104,
    left: 0,
    position: "absolute",
  },
  iphone1415ChildPosition: {
    top: 470,
    height: 104,
    left: 0,
    position: "absolute",
  },
  iphone1415ChildLayout: {
    height: 54,
    borderRadius: Border.br_81xl,
    position: "absolute",
  },
  giro264Icon: {
    top: 870,
    left: 25,
    width: 55,
    height: 56,
    position: "absolute",
  },
  iphone1415ProMax17Child: {
    top: 0,
    borderBottomRightRadius: Border.br_31xl,
    borderBottomLeftRadius: Border.br_31xl,
    height: 157,
    backgroundColor: "transparent",
    width: 430,
    left: 0,
    position: "absolute",
  },
  corona1Icon: {
    top: 857,
    left: 352,
  },
  corona2Icon: {
    left: 352,
  },
  atencionAlCliente2Icon: {
    top: 125,
    left: 183,
  },
  clientes: {
    top: 75,
    left: 91,
    fontSize: FontSize.size_13xl,
    color: Color.colorBlack,
    width: 250,
    textAlign: "center",
    fontFamily: FontFamily.interRegular,
    position: "absolute",
  },
  icon: {
    height: "100%",
    width: "100%",
  },
  botonDeFlechaIzquierdaDel: {
    left: 16,
  },
  calcular: {
    left: 85,
  },
  aceptar: {
    left: 278,
    textAlign: "left",
    top: 805,
    color: Color.colorWhite,
    fontSize: FontSize.size_xl,
    fontFamily: FontFamily.interRegular,
    position: "absolute",
  },
  iphone1415ProMax17Item: {
    backgroundColor: Color.colorGainsboro_200,
    width: 430,
  },
  iphone1415ProMax17Inner: {
    height: 104,
    top: 260,
    left: 0,
    position: "absolute",
  },
  text: {
    top: 300,
  },
  juanCarlosCosio: {
    top: 275,
  },
  teotihuacan1119Unidad: {
    top: 301,
  },
  rectangleView: {
    backgroundColor: Color.colorGainsboro_200,
    width: 430,
  },
  rectangleLineargradient: {
    width: 40,
    borderBottomRightRadius: Border.br_11xl,
    borderTopRightRadius: Border.br_11xl,
    backgroundColor: "transparent",
  },
  text1: {
    top: 405,
  },
  juanCarlosCosio1: {
    top: 380,
  },
  teotihuacan1119Unidad1: {
    top: 406,
  },
  iphone1415ProMax17Child1: {
    backgroundColor: Color.colorGainsboro_200,
    width: 430,
  },
  iphone1415ProMax17Child2: {
    width: 40,
    borderBottomRightRadius: Border.br_11xl,
    borderTopRightRadius: Border.br_11xl,
    backgroundColor: "transparent",
  },
  text2: {
    top: 510,
  },
  juanCarlosCosio2: {
    top: 485,
  },
  teotihuacan1119Unidad2: {
    top: 511,
  },
  iphone1415ProMax17Child3: {
    left: 45,
    width: 150,
    backgroundColor: Color.colorDodgerblue,
    top: 791,
    height: 54,
    borderRadius: Border.br_81xl,
  },
  anterior: {
    left: 82,
  },
  iphone1415ProMax17Child4: {
    left: 234,
    width: 150,
    backgroundColor: Color.colorDodgerblue,
    top: 791,
    height: 54,
    borderRadius: Border.br_81xl,
  },
  cliente: {
    left: 276,
    top: 805,
    color: Color.colorWhite,
    fontSize: FontSize.size_xl,
    textAlign: "center",
    fontFamily: FontFamily.interRegular,
    position: "absolute",
  },
  iphone1415ProMax17Child5: {
    top: 193,
    left: 65,
    width: 300,
    height: 54,
    borderRadius: Border.br_81xl,
    backgroundColor: Color.colorGainsboro_200,
  },
  lupa1Icon: {
    top: 205,
    left: 320,
    width: 30,
    height: 30,
    position: "absolute",
  },
  iphone1415ProMax17: {
    backgroundColor: Color.colorWhite,
    flex: 1,
    height: 932,
    overflow: "hidden",
    width: "100%",
  },
});

export default IPhone1415ProMax16;
