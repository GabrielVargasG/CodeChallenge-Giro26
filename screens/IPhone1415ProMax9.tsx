import * as React from "react";
import { Image } from "expo-image";
import { StyleSheet, View, Text, Pressable } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { StackNavigationProp } from "@react-navigation/stack";
import { useNavigation, ParamListBase } from "@react-navigation/native";
import { Color, FontFamily, Border, FontSize } from "../GlobalStyles";

const IPhone1415ProMax9 = () => {
  const navigation = useNavigation<StackNavigationProp<ParamListBase>>();

  return (
    <View style={styles.iphone1415ProMax10}>
      <Image
        style={styles.giro264Icon}
        contentFit="cover"
        source={require("../assets/giro26-4.png")}
      />
      <LinearGradient
        style={styles.iphone1415ProMax10Child}
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
        source={require("../assets/salario-1.png")}
      />
      <Text style={styles.reciboDePago}>Recibo de Pago</Text>
      <Pressable
        style={[styles.botonDeFlechaIzquierdaDel, styles.corona2IconPosition]}
        onPress={() => navigation.navigate("IPhone1415ProMax8")}
      >
        <Image
          style={styles.icon}
          contentFit="cover"
          source={require("../assets/botondeflechaizquierdadelteclado-1.png")}
        />
      </Pressable>
      <View style={styles.iphone1415ProMax10Item} />
      <Text style={[styles.juanCarlosCosio, styles.fechaClr]}>
        JUAN CARLOS COSIO RODRIGUEZ
      </Text>
      <Text style={[styles.deCliente, styles.fechaClr]}># de cliente:</Text>
      <Text style={[styles.calcular, styles.calcularTypo]}>Calcular</Text>
      <Text style={[styles.aceptar, styles.aceptarLayout]}>Aceptar</Text>
      <View
        style={[styles.iphone1415ProMax10Inner, styles.rectangleViewLayout]}
      />
      <Pressable
        style={styles.compartir}
        onPress={() => navigation.navigate("IPhone1415ProMax10")}
      >
        <Text style={[styles.compartir1, styles.calcularTypo]}>Compartir</Text>
      </Pressable>
      <View style={[styles.rectangleView, styles.rectangleViewLayout]} />
      <Pressable
        style={styles.imprimir}
        onPress={() => navigation.navigate("IPhone1415ProMax11")}
      >
        <Text style={[styles.imprimir1, styles.aceptarLayout]}>Imprimir</Text>
      </Pressable>
      <Image
        style={[styles.lineIcon, styles.fechaPosition]}
        contentFit="cover"
        source={require("../assets/line-20.png")}
      />
      <Text style={[styles.fecha, styles.fechaClr]}>Fecha:</Text>
      <Text style={[styles.text, styles.textTypo]}>31-01-2024</Text>
      <Text style={[styles.text1, styles.textTypo]}>$2,750.00</Text>
      <Text style={[styles.text2, styles.textTypo]}>0.00</Text>
      <Text style={[styles.text3, styles.text3Typo]}>$2,750.00</Text>
      <Text style={[styles.montoAbonado, styles.fechaClr]}>Monto Abonado</Text>
      <Text style={[styles.interesMora, styles.fechaClr]}>Interes / Mora</Text>
      <Text style={[styles.total, styles.text3Typo]}>Total</Text>
      <Image
        style={styles.compartir9Icon}
        contentFit="cover"
        source={require("../assets/compartir1.png")}
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
  fechaClr: {
    color: Color.colorGray_300,
    fontFamily: FontFamily.interRegular,
  },
  calcularTypo: {
    height: 16,
    color: Color.colorWhite,
    textAlign: "center",
    fontFamily: FontFamily.interRegular,
  },
  aceptarLayout: {
    height: 15,
    color: Color.colorWhite,
    fontFamily: FontFamily.interRegular,
  },
  rectangleViewLayout: {
    height: 34,
    width: 140,
    backgroundColor: Color.colorDodgerblue,
    borderRadius: Border.br_81xl,
    top: 705,
    position: "absolute",
  },
  fechaPosition: {
    left: 100,
    position: "absolute",
  },
  textTypo: {
    textAlign: "right",
    color: Color.colorGray_300,
    fontSize: FontSize.size_sm,
    fontFamily: FontFamily.interRegular,
    position: "absolute",
  },
  text3Typo: {
    fontSize: FontSize.size_xl,
    position: "absolute",
  },
  giro264Icon: {
    top: 870,
    left: 25,
    width: 55,
    height: 56,
    position: "absolute",
  },
  iphone1415ProMax10Child: {
    top: 0,
    left: 0,
    borderBottomRightRadius: Border.br_31xl,
    borderBottomLeftRadius: Border.br_31xl,
    width: 430,
    height: 157,
    backgroundColor: "transparent",
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
  reciboDePago: {
    top: 75,
    left: 45,
    fontSize: FontSize.size_13xl,
    color: Color.colorBlack,
    width: 339,
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
  iphone1415ProMax10Item: {
    top: 207,
    left: 50,
    borderRadius: Border.br_31xl,
    backgroundColor: Color.colorGainsboro_200,
    width: 330,
    height: 482,
    position: "absolute",
  },
  juanCarlosCosio: {
    top: 278,
    textAlign: "left",
    fontSize: FontSize.size_sm,
    left: 100,
    position: "absolute",
  },
  deCliente: {
    top: 295,
    textAlign: "left",
    fontSize: FontSize.size_sm,
    left: 100,
    position: "absolute",
  },
  calcular: {
    left: 95,
    width: 72,
    fontSize: FontSize.size_xl,
    position: "absolute",
    top: 714,
  },
  aceptar: {
    left: 276,
    width: 70,
    fontSize: FontSize.size_xl,
    position: "absolute",
    top: 714,
    textAlign: "left",
  },
  iphone1415ProMax10Inner: {
    left: 58,
  },
  compartir1: {
    width: 117,
    fontSize: FontSize.size_sm,
  },
  compartir: {
    left: 77,
    top: 712,
    position: "absolute",
  },
  rectangleView: {
    left: 235,
  },
  imprimir1: {
    width: 83,
    fontSize: FontSize.size_sm,
    textAlign: "center",
  },
  imprimir: {
    left: 265,
    top: 713,
    position: "absolute",
  },
  lineIcon: {
    top: 504,
    width: 230,
    height: 4,
  },
  fecha: {
    top: 378,
    textAlign: "left",
    fontSize: FontSize.size_sm,
    left: 100,
    position: "absolute",
  },
  text: {
    left: 252,
    top: 378,
  },
  text1: {
    top: 401,
    left: 263,
  },
  text2: {
    top: 424,
    left: 300,
  },
  text3: {
    top: 567,
    left: 167,
    color: Color.colorGray_300,
    fontFamily: FontFamily.interRegular,
    textAlign: "center",
  },
  montoAbonado: {
    top: 403,
    textAlign: "left",
    fontSize: FontSize.size_sm,
    left: 100,
    position: "absolute",
  },
  interesMora: {
    top: 426,
    textAlign: "left",
    fontSize: FontSize.size_sm,
    left: 100,
    position: "absolute",
  },
  total: {
    top: 529,
    left: 191,
    color: Color.colorGray_300,
    fontFamily: FontFamily.interRegular,
    textAlign: "center",
  },
  compartir9Icon: {
    top: 711,
    left: 75,
    width: 20,
    height: 20,
    position: "absolute",
  },
  iphone1415ProMax10: {
    backgroundColor: Color.colorWhite,
    flex: 1,
    height: 932,
    overflow: "hidden",
    width: "100%",
  },
});

export default IPhone1415ProMax9;
