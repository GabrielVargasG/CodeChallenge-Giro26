import * as React from "react";
import { Image } from "expo-image";
import { StyleSheet, View, Text, Pressable } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { StackNavigationProp } from "@react-navigation/stack";
import { useNavigation, ParamListBase } from "@react-navigation/native";
import { Color, FontSize, FontFamily, Border } from "../GlobalStyles";

const IPhone1415ProMax12 = () => {
  const navigation = useNavigation<StackNavigationProp<ParamListBase>>();

  return (
    <View style={styles.iphone1415ProMax13}>
      <Image
        style={styles.giro264Icon}
        contentFit="cover"
        source={require("../assets/giro26-4.png")}
      />
      <LinearGradient
        style={styles.iphone1415ProMax13Child}
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
      <Text style={styles.pagosRecibidos}>Pagos Recibidos</Text>
      <Pressable
        style={[styles.botonDeFlechaIzquierdaDel, styles.corona2IconPosition]}
        onPress={() => navigation.navigate("IPhone1415ProMax7")}
      >
        <Image
          style={styles.icon}
          contentFit="cover"
          source={require("../assets/botondeflechaizquierdadelteclado-1.png")}
        />
      </Pressable>
      <Text style={[styles.calcular, styles.calcularTypo]}>Calcular</Text>
      <Text style={[styles.aceptar, styles.textTypo1]}>Aceptar</Text>
      <Pressable
        style={[styles.iphone1415ProMax13Item, styles.iphone1415Position]}
        onPress={() => navigation.navigate("IPhone1415ProMax13")}
      />
      <LinearGradient
        style={[styles.iphone1415ProMax13Inner, styles.iphone1415Position]}
        locations={[0, 1]}
        colors={["#3a8cff", "rgba(58, 140, 255, 0)"]}
      />
      <Text style={[styles.text, styles.textTypo1]}>1</Text>
      <Text style={[styles.juanCarlosCosio, styles.textTypo]}>
        JUAN CARLOS COSIO RODRIGUEZ
      </Text>
      <Text style={[styles.aplicado, styles.textTypo]}>Aplicado</Text>
      <Text style={[styles.text1, styles.textTypo]}>01-30-2024</Text>
      <Text style={[styles.mx, styles.textTypo]}>$MX</Text>
      <Text style={[styles.text2, styles.textTypo]}>$2,750.00</Text>
      <View style={[styles.rectangleView, styles.rectangleViewLayout]} />
      <Text style={[styles.recibirPago, styles.calcularTypo]}>
        Recibir Pago
      </Text>
      <View
        style={[styles.iphone1415ProMax13Child1, styles.rectangleViewLayout]}
      />
      <Text
        style={[styles.cancelarPago, styles.textTypo1]}
      >{`Cancelar Pago `}</Text>
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
  textTypo1: {
    textAlign: "left",
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
  textTypo: {
    fontSize: FontSize.size_sm,
    textAlign: "left",
    fontFamily: FontFamily.interRegular,
    position: "absolute",
  },
  rectangleViewLayout: {
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
  iphone1415ProMax13Child: {
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
  pagosRecibidos: {
    top: 75,
    left: 91,
    fontSize: FontSize.size_13xl,
    color: Color.colorBlack,
    width: 265,
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
    top: 805,
    textAlign: "left",
    color: Color.colorWhite,
  },
  iphone1415ProMax13Item: {
    backgroundColor: Color.colorGainsboro_200,
    width: 430,
  },
  iphone1415ProMax13Inner: {
    borderTopRightRadius: Border.br_11xl,
    borderBottomRightRadius: Border.br_11xl,
    width: 40,
    backgroundColor: "transparent",
  },
  text: {
    top: 251,
    left: 7,
    color: Color.colorGray_300,
  },
  juanCarlosCosio: {
    top: 226,
    left: 48,
    fontSize: FontSize.size_sm,
    color: Color.colorGray_300,
  },
  aplicado: {
    top: 256,
    color: Color.colorGoldenrod,
    left: 48,
    fontSize: FontSize.size_sm,
  },
  text1: {
    top: 281,
    left: 48,
    fontSize: FontSize.size_sm,
    color: Color.colorGray_300,
  },
  mx: {
    top: 234,
    left: 356,
    color: Color.colorGray_300,
  },
  text2: {
    top: 259,
    left: 338,
    color: Color.colorGray_300,
  },
  rectangleView: {
    left: 45,
  },
  recibirPago: {
    left: 61,
  },
  iphone1415ProMax13Child1: {
    left: 234,
  },
  cancelarPago: {
    left: 241,
    top: 805,
    textAlign: "left",
    color: Color.colorWhite,
  },
  iphone1415ProMax13: {
    backgroundColor: Color.colorWhite,
    flex: 1,
    height: 932,
    overflow: "hidden",
    width: "100%",
  },
});

export default IPhone1415ProMax12;
