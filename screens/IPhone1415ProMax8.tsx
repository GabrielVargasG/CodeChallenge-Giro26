import * as React from "react";
import { Image } from "expo-image";
import { StyleSheet, View, Text, Pressable } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { StackNavigationProp } from "@react-navigation/stack";
import { useNavigation, ParamListBase } from "@react-navigation/native";
import { Color, FontFamily, Border, FontSize } from "../GlobalStyles";

const IPhone1415ProMax8 = () => {
  const navigation = useNavigation<StackNavigationProp<ParamListBase>>();

  return (
    <View style={styles.iphone1415ProMax9}>
      <Image
        style={styles.giro264Icon}
        contentFit="cover"
        source={require("../assets/giro26-4.png")}
      />
      <LinearGradient
        style={styles.iphone1415ProMax9Child}
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
      <Text style={styles.recibirPago}>Recibir Pago</Text>
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
      <View style={styles.iphone1415ProMax9Item} />
      <Text style={[styles.juanCarlosCosio, styles.textClr]}>
        JUAN CARLOS COSIO RODRIGUEZ
      </Text>
      <Text style={[styles.calcular, styles.calcularTypo]}>Calcular</Text>
      <Text style={[styles.aceptar, styles.aceptarLayout]}>Aceptar</Text>
      <View
        style={[styles.iphone1415ProMax9Inner, styles.rectangleViewLayout]}
      />
      <Pressable
        style={styles.aceptar1}
        onPress={() => navigation.navigate("IPhone1415ProMax9")}
      >
        <Text style={[styles.aceptar2, styles.calcularTypo]}>Aceptar</Text>
      </Pressable>
      <View style={[styles.rectangleView, styles.rectangleViewLayout]} />
      <Pressable
        style={styles.cancelar}
        onPress={() => navigation.navigate("IPhone1415ProMax7")}
      >
        <Text style={[styles.cancelar1, styles.aceptarLayout]}>Cancelar</Text>
      </Pressable>
      <View style={[styles.lineView, styles.lineViewBorder]} />
      <View style={[styles.iphone1415ProMax9Child1, styles.lineViewBorder]} />
      <Image
        style={[styles.lineIcon, styles.lineIconPosition]}
        contentFit="cover"
        source={require("../assets/line-20.png")}
      />
      <Text style={[styles.fecha, styles.textClr]}>Fecha</Text>
      <Image
        style={styles.fecha3Icon}
        contentFit="cover"
        source={require("../assets/fecha-1.png")}
      />
      <Text style={[styles.saldoVencido, styles.saldoTypo]}>Saldo Vencido</Text>
      <Text style={[styles.text, styles.textTypo]}>0.00</Text>
      <Text style={[styles.text1, styles.textClr]}>0.00</Text>
      <Text style={[styles.text2, styles.textTypo]}>$2,750.00</Text>
      <Text style={[styles.text3, styles.textTypo]}>$2,750.00</Text>
      <Text style={[styles.text4, styles.text4Typo]}>$2,750.00</Text>
      <Text style={[styles.text5, styles.textTypo]}>$5,500.00</Text>
      <Image
        style={[styles.ellipseIcon, styles.iphone1415ChildLayout]}
        contentFit="cover"
        source={require("../assets/ellipse-3.png")}
      />
      <Text style={[styles.saldoVigente, styles.saldoVigentePosition]}>
        Saldo Vigente
      </Text>
      <Image
        style={[styles.iphone1415ProMax9Child2, styles.saldoVigentePosition]}
        contentFit="cover"
        source={require("../assets/ellipse-5.png")}
      />
      <Text style={[styles.saldoTotal, styles.saldoTotalPosition]}>
        Saldo Total
      </Text>
      <Image
        style={[styles.iphone1415ProMax9Child3, styles.saldoTotalPosition]}
        contentFit="cover"
        source={require("../assets/ellipse-3.png")}
      />
      <Text style={[styles.deudaTotal, styles.deudaTotalPosition]}>
        Deuda Total
      </Text>
      <Image
        style={[styles.iphone1415ProMax9Child4, styles.deudaTotalPosition]}
        contentFit="cover"
        source={require("../assets/ellipse-3.png")}
      />
      <Text style={[styles.otroMonto, styles.otroMontoPosition]}>
        Otro Monto
      </Text>
      <Text style={[styles.interesesMora, styles.textClr]}>
        Intereses / Mora
      </Text>
      <Image
        style={[styles.iphone1415ProMax9Child5, styles.otroMontoPosition]}
        contentFit="cover"
        source={require("../assets/ellipse-3.png")}
      />
      <Text style={[styles.imprimir, styles.imprimirPosition]}>Imprimir</Text>
      <Image
        style={[styles.iphone1415ProMax9Child6, styles.imprimirPosition]}
        contentFit="cover"
        source={require("../assets/ellipse-5.png")}
      />
      <Text style={[styles.totalAPagar, styles.text4Typo]}>Total a pagar:</Text>
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
  textClr: {
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
  lineViewBorder: {
    height: 1,
    borderTopWidth: 1,
    borderColor: Color.colorGainsboro_100,
    borderStyle: "solid",
    position: "absolute",
  },
  lineIconPosition: {
    left: 100,
    position: "absolute",
  },
  saldoTypo: {
    left: 121,
    textAlign: "left",
    color: Color.colorGray_300,
    fontSize: FontSize.size_sm,
    fontFamily: FontFamily.interRegular,
  },
  textTypo: {
    textAlign: "right",
    color: Color.colorGray_300,
    fontSize: FontSize.size_sm,
    fontFamily: FontFamily.interRegular,
    position: "absolute",
  },
  text4Typo: {
    fontSize: FontSize.size_xl,
    position: "absolute",
  },
  iphone1415ChildLayout: {
    width: 15,
    height: 15,
    left: 100,
  },
  saldoVigentePosition: {
    top: 347,
    position: "absolute",
  },
  saldoTotalPosition: {
    top: 370,
    position: "absolute",
  },
  deudaTotalPosition: {
    top: 393,
    position: "absolute",
  },
  otroMontoPosition: {
    top: 416,
    position: "absolute",
  },
  imprimirPosition: {
    top: 618,
    position: "absolute",
  },
  giro264Icon: {
    top: 870,
    left: 25,
    width: 55,
    height: 56,
    position: "absolute",
  },
  iphone1415ProMax9Child: {
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
  recibirPago: {
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
  iphone1415ProMax9Item: {
    top: 207,
    left: 50,
    borderRadius: Border.br_31xl,
    backgroundColor: Color.colorGainsboro_200,
    width: 330,
    height: 482,
    position: "absolute",
  },
  juanCarlosCosio: {
    top: 222,
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
  iphone1415ProMax9Inner: {
    left: 58,
  },
  aceptar2: {
    width: 117,
    fontSize: FontSize.size_sm,
  },
  aceptar1: {
    left: 67,
    top: 712,
    position: "absolute",
  },
  rectangleView: {
    left: 235,
  },
  cancelar1: {
    width: 83,
    fontSize: FontSize.size_sm,
    textAlign: "center",
  },
  cancelar: {
    left: 264,
    top: 713,
    position: "absolute",
  },
  lineView: {
    top: 298,
    left: 148,
    width: 101,
  },
  iphone1415ProMax9Child1: {
    top: 430,
    width: 68,
    left: 263,
  },
  lineIcon: {
    top: 504,
    width: 230,
    height: 4,
  },
  fecha: {
    top: 256,
    left: 171,
    fontSize: FontSize.size_sm,
    textAlign: "center",
    position: "absolute",
  },
  fecha3Icon: {
    top: 273,
    left: 258,
    width: 25,
    height: 25,
    position: "absolute",
  },
  saldoVencido: {
    top: 322,
    position: "absolute",
  },
  text: {
    left: 300,
    top: 322,
  },
  text1: {
    top: 483,
    left: 106,
    textAlign: "left",
    fontSize: FontSize.size_sm,
    position: "absolute",
  },
  text2: {
    top: 345,
    left: 263,
  },
  text3: {
    top: 368,
    left: 263,
  },
  text4: {
    top: 567,
    left: 167,
    color: Color.colorGray_300,
    fontFamily: FontFamily.interRegular,
    textAlign: "center",
  },
  text5: {
    top: 391,
    left: 262,
  },
  ellipseIcon: {
    top: 322,
    position: "absolute",
  },
  saldoVigente: {
    left: 121,
    textAlign: "left",
    color: Color.colorGray_300,
    fontSize: FontSize.size_sm,
    fontFamily: FontFamily.interRegular,
  },
  iphone1415ProMax9Child2: {
    width: 15,
    height: 15,
    left: 100,
  },
  saldoTotal: {
    left: 121,
    textAlign: "left",
    color: Color.colorGray_300,
    fontSize: FontSize.size_sm,
    fontFamily: FontFamily.interRegular,
  },
  iphone1415ProMax9Child3: {
    width: 15,
    height: 15,
    left: 100,
  },
  deudaTotal: {
    left: 121,
    textAlign: "left",
    color: Color.colorGray_300,
    fontSize: FontSize.size_sm,
    fontFamily: FontFamily.interRegular,
  },
  iphone1415ProMax9Child4: {
    width: 15,
    height: 15,
    left: 100,
  },
  otroMonto: {
    left: 121,
    textAlign: "left",
    color: Color.colorGray_300,
    fontSize: FontSize.size_sm,
    fontFamily: FontFamily.interRegular,
  },
  interesesMora: {
    top: 458,
    textAlign: "left",
    fontSize: FontSize.size_sm,
    left: 100,
    position: "absolute",
  },
  iphone1415ProMax9Child5: {
    width: 15,
    height: 15,
    left: 100,
  },
  imprimir: {
    left: 121,
    textAlign: "left",
    color: Color.colorGray_300,
    fontSize: FontSize.size_sm,
    fontFamily: FontFamily.interRegular,
  },
  iphone1415ProMax9Child6: {
    width: 15,
    height: 15,
    left: 100,
  },
  totalAPagar: {
    top: 529,
    left: 150,
    color: Color.colorGray_300,
    fontFamily: FontFamily.interRegular,
    textAlign: "center",
  },
  iphone1415ProMax9: {
    backgroundColor: Color.colorWhite,
    flex: 1,
    height: 932,
    overflow: "hidden",
    width: "100%",
  },
});

export default IPhone1415ProMax8;
