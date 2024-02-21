import * as React from "react";
import { Image } from "expo-image";
import { StyleSheet, View, Text, Pressable } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { StackNavigationProp } from "@react-navigation/stack";
import { useNavigation, ParamListBase } from "@react-navigation/native";
import { FontFamily, FontSize, Color, Border } from "../GlobalStyles";

const IPhone1415ProMax17 = () => {
  const navigation = useNavigation<StackNavigationProp<ParamListBase>>();

  return (
    <View style={styles.iphone1415ProMax18}>
      <Image
        style={styles.giro264Icon}
        contentFit="cover"
        source={require("../assets/giro26-4.png")}
      />
      <LinearGradient
        style={styles.iphone1415ProMax18Child}
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
        source={require("../assets/analitica-1.png")}
      />
      <Text style={[styles.reporte, styles.reporteTypo]}>Reporte</Text>
      <Text style={[styles.carteraCarlosCoso, styles.reporteTypo]}>
        Cartera Carlos Cosío
      </Text>
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
      <View style={styles.iphone1415ProMax18Item} />
      <Text style={[styles.resumenDelDa, styles.resumenDelDaTypo]}>
        Resumen del día
      </Text>
      <Text style={[styles.calcular, styles.calcularLayout]}>Calcular</Text>
      <Text style={[styles.aceptar, styles.aceptarLayout]}>Aceptar</Text>
      <View
        style={[styles.iphone1415ProMax18Inner, styles.rectangleViewLayout]}
      />
      <Text style={[styles.compartir, styles.interesesTypo]}>Compartir</Text>
      <View style={[styles.rectangleView, styles.rectangleViewLayout]} />
      <Text style={[styles.imprimir, styles.interesesTypo]}>Imprimir</Text>
      <Image
        style={styles.lineIcon}
        contentFit="cover"
        source={require("../assets/line-201.png")}
      />
      <Text style={[styles.cobrado, styles.textPosition]}>Cobrado:</Text>
      <Text style={[styles.text, styles.textFlexBox]}>$2,750.00</Text>
      <Text style={[styles.prestado, styles.interesesTypo]}>Prestado:</Text>
      <Text style={[styles.text1, styles.textTypo]}>$0.00</Text>
      <Text style={[styles.text2, styles.textTypo]}>$0.00</Text>
      <Text style={[styles.text3, styles.textTypo]}>$0.00</Text>
      <Text style={[styles.intereses, styles.interesesTypo]}>Intereses</Text>
      <Text style={[styles.porCobrar, styles.interesesTypo]}>Por cobrar:</Text>
      <Text style={[styles.totalesGenerales, styles.resumenDelDaTypo]}>
        Totales Generales
      </Text>
      <Text style={[styles.cobrado1, styles.text4Position]}>Cobrado:</Text>
      <Text style={[styles.text4, styles.text4Position]}>$20,000.00</Text>
      <Text style={[styles.prestado1, styles.text5Position]}>Prestado:</Text>
      <Text style={[styles.text5, styles.text5Position]}>$15,000.00</Text>
      <Text style={[styles.text6, styles.textFlexBox]}>$5,000.00</Text>
      <Text style={[styles.text7, styles.textTypo]}>$0.00</Text>
      <Text style={[styles.intereses1, styles.interesesTypo]}>Intereses</Text>
      <Text style={[styles.porCobrar1, styles.interesesTypo]}>Por cobrar:</Text>
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
  reporteTypo: {
    width: 339,
    fontFamily: FontFamily.interRegular,
    fontSize: FontSize.size_13xl,
    left: 45,
    textAlign: "center",
    position: "absolute",
  },
  resumenDelDaTypo: {
    fontSize: FontSize.size_xl,
    color: Color.colorGray_300,
    textAlign: "center",
    fontFamily: FontFamily.interRegular,
    position: "absolute",
  },
  calcularLayout: {
    height: 16,
    color: Color.colorWhite,
    textAlign: "center",
  },
  aceptarLayout: {
    height: 15,
    color: Color.colorWhite,
  },
  rectangleViewLayout: {
    height: 34,
    width: 140,
    backgroundColor: Color.colorDodgerblue,
    borderRadius: Border.br_81xl,
    top: 787,
    position: "absolute",
  },
  interesesTypo: {
    fontSize: FontSize.size_sm,
    fontFamily: FontFamily.interRegular,
    position: "absolute",
  },
  textPosition: {
    top: 460,
    fontSize: FontSize.size_sm,
    fontFamily: FontFamily.interRegular,
    position: "absolute",
  },
  textFlexBox: {
    textAlign: "right",
    color: Color.colorGoldenrod,
  },
  textTypo: {
    left: 291,
    textAlign: "right",
    color: Color.colorGoldenrod,
    fontSize: FontSize.size_sm,
    fontFamily: FontFamily.interRegular,
    position: "absolute",
  },
  text4Position: {
    top: 702,
    fontSize: FontSize.size_sm,
    fontFamily: FontFamily.interRegular,
    position: "absolute",
  },
  text5Position: {
    top: 631,
    fontSize: FontSize.size_sm,
    fontFamily: FontFamily.interRegular,
    position: "absolute",
  },
  giro264Icon: {
    top: 870,
    left: 25,
    width: 55,
    height: 56,
    position: "absolute",
  },
  iphone1415ProMax18Child: {
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
  reporte: {
    top: 75,
    color: Color.colorBlack,
  },
  carteraCarlosCoso: {
    top: 210,
    color: Color.colorGray_300,
  },
  icon: {
    height: "100%",
    width: "100%",
  },
  botonDeFlechaIzquierdaDel: {
    left: 16,
  },
  iphone1415ProMax18Item: {
    top: 289,
    left: 50,
    borderRadius: Border.br_31xl,
    backgroundColor: Color.colorGainsboro_200,
    width: 330,
    height: 482,
    position: "absolute",
  },
  resumenDelDa: {
    top: 360,
    left: 137,
  },
  calcular: {
    left: 95,
    width: 72,
    top: 796,
    fontSize: FontSize.size_xl,
    fontFamily: FontFamily.interRegular,
    position: "absolute",
  },
  aceptar: {
    left: 276,
    width: 70,
    textAlign: "left",
    top: 796,
    fontSize: FontSize.size_xl,
    fontFamily: FontFamily.interRegular,
    position: "absolute",
  },
  iphone1415ProMax18Inner: {
    left: 58,
  },
  compartir: {
    top: 794,
    left: 77,
    width: 117,
    height: 16,
    color: Color.colorWhite,
    textAlign: "center",
  },
  rectangleView: {
    left: 235,
  },
  imprimir: {
    top: 795,
    left: 265,
    width: 83,
    height: 15,
    color: Color.colorWhite,
    textAlign: "center",
    fontSize: FontSize.size_sm,
  },
  lineIcon: {
    top: 544,
    width: 230,
    height: 0,
    left: 100,
    position: "absolute",
  },
  cobrado: {
    left: 100,
    textAlign: "left",
    color: Color.colorGray_300,
  },
  text: {
    left: 263,
    top: 460,
    fontSize: FontSize.size_sm,
    fontFamily: FontFamily.interRegular,
    position: "absolute",
  },
  prestado: {
    top: 389,
    left: 100,
    textAlign: "left",
    color: Color.colorGray_300,
  },
  text1: {
    top: 389,
  },
  text2: {
    top: 412,
  },
  text3: {
    top: 435,
  },
  intereses: {
    top: 414,
    left: 100,
    textAlign: "left",
    color: Color.colorGray_300,
  },
  porCobrar: {
    top: 437,
    left: 100,
    textAlign: "left",
    color: Color.colorGray_300,
  },
  totalesGenerales: {
    top: 602,
    left: 130,
  },
  cobrado1: {
    left: 100,
    textAlign: "left",
    color: Color.colorGray_300,
  },
  text4: {
    left: 253,
    textAlign: "right",
    color: Color.colorGoldenrod,
  },
  prestado1: {
    left: 100,
    textAlign: "left",
    color: Color.colorGray_300,
  },
  text5: {
    left: 255,
    textAlign: "right",
    color: Color.colorGoldenrod,
  },
  text6: {
    top: 654,
    left: 262,
    fontSize: FontSize.size_sm,
    fontFamily: FontFamily.interRegular,
    position: "absolute",
  },
  text7: {
    top: 677,
  },
  intereses1: {
    top: 656,
    left: 100,
    textAlign: "left",
    color: Color.colorGray_300,
  },
  porCobrar1: {
    top: 679,
    left: 100,
    textAlign: "left",
    color: Color.colorGray_300,
  },
  compartir9Icon: {
    top: 793,
    left: 75,
    width: 20,
    height: 20,
    position: "absolute",
  },
  iphone1415ProMax18: {
    backgroundColor: Color.colorWhite,
    flex: 1,
    height: 932,
    overflow: "hidden",
    width: "100%",
  },
});

export default IPhone1415ProMax17;
