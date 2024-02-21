import * as React from "react";
import { Image } from "expo-image";
import { StyleSheet, View, Text, Pressable } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { StackNavigationProp } from "@react-navigation/stack";
import { useNavigation, ParamListBase } from "@react-navigation/native";
import { Color, FontSize, FontFamily, Border } from "../GlobalStyles";

const IPhone1415ProMax13 = () => {
  const navigation = useNavigation<StackNavigationProp<ParamListBase>>();

  return (
    <View style={styles.iphone1415ProMax14}>
      <Image
        style={styles.giro264Icon}
        contentFit="cover"
        source={require("../assets/giro26-4.png")}
      />
      <LinearGradient
        style={styles.iphone1415ProMax14Child}
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
      <Text style={styles.amortizacin}>Amortización</Text>
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
      <Text style={[styles.aceptar, styles.aceptarTypo]}>Aceptar</Text>
      <View style={styles.iphone1415ProMax14Item} />
      <Text style={[styles.fecha, styles.fechaTypo]}>Fecha:</Text>
      <Text style={[styles.monto, styles.fechaTypo]}>Monto</Text>
      <Text style={[styles.estatus, styles.fechaTypo]}>Estatus</Text>
      <Text style={[styles.text, styles.textPosition2]}>01-30-2024</Text>
      <Text style={[styles.pagado, styles.textPosition2]}>Pagado</Text>
      <Text style={[styles.text1, styles.textPosition1]}>$2,750.00</Text>
      <Text style={[styles.text2, styles.textPosition]}>01-30-2024</Text>
      <Text style={[styles.pendiente, styles.textPosition]}>Pendiente</Text>
      <Text style={[styles.text3, styles.textPosition]}>$2,750.00</Text>
      <View
        style={[styles.iphone1415ProMax14Inner, styles.rectangleViewLayout]}
      />
      <Text style={[styles.recibirPago, styles.calcularTypo]}>
        Recibir Pago
      </Text>
      <View style={[styles.rectangleView, styles.rectangleViewLayout]} />
      <Text
        style={[styles.cancelarPago, styles.aceptarTypo]}
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
  aceptarTypo: {
    top: 805,
    textAlign: "left",
    color: Color.colorWhite,
    fontSize: FontSize.size_xl,
    fontFamily: FontFamily.interRegular,
    position: "absolute",
  },
  fechaTypo: {
    color: Color.colorGray_300,
    fontSize: FontSize.size_sm,
    top: 247,
    fontFamily: FontFamily.interRegular,
    position: "absolute",
  },
  textPosition2: {
    color: Color.colorGoldenrod,
    top: 280,
    fontSize: FontSize.size_sm,
    fontFamily: FontFamily.interRegular,
    position: "absolute",
  },
  textPosition1: {
    left: 182,
    textAlign: "left",
  },
  textPosition: {
    top: 304,
    color: Color.colorGoldenrod,
    fontSize: FontSize.size_sm,
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
  iphone1415ProMax14Child: {
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
  amortizacin: {
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
    textAlign: "left",
  },
  iphone1415ProMax14Item: {
    top: 211,
    left: 33,
    borderRadius: Border.br_31xl,
    backgroundColor: Color.colorGainsboro_200,
    width: 371,
    height: 524,
    position: "absolute",
  },
  fecha: {
    left: 48,
    textAlign: "left",
  },
  monto: {
    left: 193,
    textAlign: "left",
  },
  estatus: {
    left: 339,
    textAlign: "right",
  },
  text: {
    left: 48,
    textAlign: "left",
  },
  pagado: {
    left: 338,
    textAlign: "right",
  },
  text1: {
    color: Color.colorGoldenrod,
    top: 280,
    fontSize: FontSize.size_sm,
    fontFamily: FontFamily.interRegular,
    position: "absolute",
  },
  text2: {
    left: 48,
    textAlign: "left",
  },
  pendiente: {
    left: 322,
    textAlign: "right",
  },
  text3: {
    left: 182,
    textAlign: "left",
  },
  iphone1415ProMax14Inner: {
    left: 45,
  },
  recibirPago: {
    left: 61,
  },
  rectangleView: {
    left: 234,
  },
  cancelarPago: {
    left: 241,
    textAlign: "left",
  },
  iphone1415ProMax14: {
    backgroundColor: Color.colorWhite,
    flex: 1,
    height: 932,
    overflow: "hidden",
    width: "100%",
  },
});

export default IPhone1415ProMax13;
