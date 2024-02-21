import * as React from "react";
import { Image } from "expo-image";
import { StyleSheet, View, Text, Pressable } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { StackNavigationProp } from "@react-navigation/stack";
import { useNavigation, ParamListBase } from "@react-navigation/native";
import { Color, FontSize, FontFamily, Border } from "../GlobalStyles";

const IPhone1415ProMax15 = () => {
  const navigation = useNavigation<StackNavigationProp<ParamListBase>>();

  return (
    <View style={styles.iphone1415ProMax16}>
      <Image
        style={styles.giro264Icon}
        contentFit="cover"
        source={require("../assets/giro26-4.png")}
      />
      <LinearGradient
        style={styles.iphone1415ProMax16Child}
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
        source={require("../assets/contrato-1.png")}
      />
      <Text style={styles.prestamos}>Prestamos</Text>
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
      <Text style={[styles.aceptar, styles.aceptarTypo]}>Aceptar</Text>
      <View
        style={[styles.iphone1415ProMax16Item, styles.iphone1415Position]}
      />
      <LinearGradient
        style={[styles.iphone1415ProMax16Inner, styles.iphone1415Layout]}
        locations={[0, 1]}
        colors={["#3a8cff", "rgba(58, 140, 255, 0)"]}
      />
      <Text style={[styles.text, styles.textTypo1]}>1</Text>
      <Text style={[styles.juanCarlosCosio, styles.juanTypo]}>
        JUAN CARLOS COSIO RODRIGUEZ
      </Text>
      <Text style={[styles.pendiente, styles.text1Typo]}>PENDIENTE</Text>
      <Text
        style={[styles.teotihuacan1119Unidad, styles.juanTypo]}
      >{`TEOTIHUACAN 1119,
UNIDAD MODELO
MONTERREY, NUEVO LEON`}</Text>
      <Text style={[styles.mx, styles.mxTypo]}>$MX</Text>
      <Text style={[styles.text1, styles.text1Typo]}>$2,750.00</Text>
      <View style={[styles.rectangleView, styles.rectanglePosition]} />
      <LinearGradient
        style={[styles.rectangleLineargradient, styles.rectanglePosition]}
        locations={[0, 1]}
        colors={["#3a8cff", "rgba(58, 140, 255, 0)"]}
      />
      <Text style={[styles.text2, styles.textTypo1]}>2</Text>
      <Text style={[styles.juanCarlosCosio1, styles.juanTypo]}>
        JUAN CARLOS COSIO RODRIGUEZ
      </Text>
      <Text style={[styles.pagado, styles.pagadoTypo]}>PAGADO</Text>
      <Text
        style={[styles.teotihuacan1119Unidad1, styles.juanTypo]}
      >{`TEOTIHUACAN 1119,
UNIDAD MODELO
MONTERREY, NUEVO LEON`}</Text>
      <Text style={[styles.mx1, styles.mxTypo]}>$MX</Text>
      <Text style={[styles.text3, styles.textTypo]}>$0.00</Text>
      <View
        style={[
          styles.iphone1415ProMax16Child1,
          styles.iphone1415ChildPosition,
        ]}
      />
      <LinearGradient
        style={[
          styles.iphone1415ProMax16Child2,
          styles.iphone1415ChildPosition,
        ]}
        locations={[0, 1]}
        colors={["#3a8cff", "rgba(58, 140, 255, 0)"]}
      />
      <Text style={[styles.text4, styles.textTypo1]}>3</Text>
      <Text style={[styles.juanCarlosCosio2, styles.juanTypo]}>
        JUAN CARLOS COSIO RODRIGUEZ
      </Text>
      <Text style={[styles.pagado1, styles.pagadoTypo]}>PAGADO</Text>
      <Text
        style={[styles.teotihuacan1119Unidad2, styles.juanTypo]}
      >{`TEOTIHUACAN 1119,
UNIDAD MODELO
MONTERREY, NUEVO LEON`}</Text>
      <Text style={[styles.mx2, styles.mxTypo]}>$MX</Text>
      <Text style={[styles.text5, styles.textTypo]}>$0.00</Text>
      <View
        style={[styles.iphone1415ProMax16Child3, styles.iphone1415ChildLayout]}
      />
      <Text style={[styles.anterior, styles.calcularTypo]}>Anterior</Text>
      <View
        style={[styles.iphone1415ProMax16Child4, styles.iphone1415ChildLayout]}
      />
      <Text style={[styles.siguiente, styles.aceptarTypo]}>Siguiente</Text>
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
  aceptarTypo: {
    textAlign: "left",
    top: 805,
    color: Color.colorWhite,
    fontSize: FontSize.size_xl,
    fontFamily: FontFamily.interRegular,
    position: "absolute",
  },
  iphone1415Position: {
    height: 104,
    top: 211,
    left: 0,
    position: "absolute",
  },
  iphone1415Layout: {
    width: 40,
    borderBottomRightRadius: Border.br_11xl,
    borderTopRightRadius: Border.br_11xl,
    backgroundColor: "transparent",
  },
  textTypo1: {
    left: 7,
    color: Color.colorGray_300,
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
  text1Typo: {
    textAlign: "right",
    fontSize: FontSize.size_sm,
    fontFamily: FontFamily.interRegular,
    position: "absolute",
  },
  mxTypo: {
    left: 374,
    fontSize: FontSize.size_sm,
    color: Color.colorGray_300,
    textAlign: "left",
    fontFamily: FontFamily.interRegular,
    position: "absolute",
  },
  rectanglePosition: {
    top: 316,
    height: 104,
    left: 0,
    position: "absolute",
  },
  pagadoTypo: {
    left: 347,
    textAlign: "right",
    color: Color.colorGoldenrod,
    fontSize: FontSize.size_sm,
    fontFamily: FontFamily.interRegular,
    position: "absolute",
  },
  textTypo: {
    left: 366,
    textAlign: "right",
    fontSize: FontSize.size_sm,
    color: Color.colorGray_300,
    fontFamily: FontFamily.interRegular,
    position: "absolute",
  },
  iphone1415ChildPosition: {
    top: 421,
    height: 104,
    left: 0,
    position: "absolute",
  },
  iphone1415ChildLayout: {
    height: 54,
    width: 150,
    backgroundColor: Color.colorDodgerblue,
    borderRadius: Border.br_81xl,
    top: 791,
    position: "absolute",
  },
  giro264Icon: {
    top: 870,
    left: 25,
    width: 55,
    height: 56,
    position: "absolute",
  },
  iphone1415ProMax16Child: {
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
  prestamos: {
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
  },
  iphone1415ProMax16Item: {
    backgroundColor: Color.colorGainsboro_200,
    width: 430,
  },
  iphone1415ProMax16Inner: {
    height: 104,
    top: 211,
    left: 0,
    position: "absolute",
  },
  text: {
    top: 251,
    color: Color.colorGray_300,
  },
  juanCarlosCosio: {
    top: 226,
  },
  pendiente: {
    top: 235,
    left: 327,
    color: Color.colorGoldenrod,
    textAlign: "right",
  },
  teotihuacan1119Unidad: {
    top: 252,
  },
  mx: {
    top: 258,
  },
  text1: {
    top: 283,
    left: 338,
    color: Color.colorGray_300,
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
  text2: {
    top: 356,
    color: Color.colorGray_300,
  },
  juanCarlosCosio1: {
    top: 331,
  },
  pagado: {
    top: 340,
  },
  teotihuacan1119Unidad1: {
    top: 357,
  },
  mx1: {
    top: 363,
  },
  text3: {
    top: 388,
  },
  iphone1415ProMax16Child1: {
    backgroundColor: Color.colorGainsboro_200,
    width: 430,
  },
  iphone1415ProMax16Child2: {
    width: 40,
    borderBottomRightRadius: Border.br_11xl,
    borderTopRightRadius: Border.br_11xl,
    backgroundColor: "transparent",
  },
  text4: {
    top: 461,
    color: Color.colorGray_300,
  },
  juanCarlosCosio2: {
    top: 436,
  },
  pagado1: {
    top: 445,
  },
  teotihuacan1119Unidad2: {
    top: 462,
  },
  mx2: {
    top: 468,
  },
  text5: {
    top: 493,
  },
  iphone1415ProMax16Child3: {
    left: 45,
  },
  anterior: {
    left: 82,
  },
  iphone1415ProMax16Child4: {
    left: 234,
  },
  siguiente: {
    left: 263,
  },
  iphone1415ProMax16: {
    backgroundColor: Color.colorWhite,
    flex: 1,
    height: 932,
    overflow: "hidden",
    width: "100%",
  },
});

export default IPhone1415ProMax15;
