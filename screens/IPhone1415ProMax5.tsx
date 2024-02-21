import * as React from "react";
import { Image } from "expo-image";
import { StyleSheet, View, Text, Pressable } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { StackNavigationProp } from "@react-navigation/stack";
import { useNavigation, ParamListBase } from "@react-navigation/native";
import { Color, FontSize, FontFamily, Border } from "../GlobalStyles";

const IPhone1415ProMax5 = () => {
  const navigation = useNavigation<StackNavigationProp<ParamListBase>>();

  return (
    <View style={styles.iphone1415ProMax6}>
      <Image
        style={styles.giro264Icon}
        contentFit="cover"
        source={require("../assets/giro26-4.png")}
      />
      <LinearGradient
        style={styles.iphone1415ProMax6Child}
        locations={[0, 1]}
        colors={["#3a8cff", "rgba(58, 140, 255, 0)"]}
      />
      <Image
        style={[styles.corona1Icon, styles.iconLayout1]}
        contentFit="cover"
        source={require("../assets/corona-1.png")}
      />
      <Image
        style={[styles.corona2Icon, styles.corona2IconPosition]}
        contentFit="cover"
        source={require("../assets/corona-1.png")}
      />
      <Image
        style={[styles.atencionAlCliente2Icon, styles.iconLayout1]}
        contentFit="cover"
        source={require("../assets/factura-1.png")}
      />
      <Text style={styles.nuevoPrestamo}>Nuevo Prestamo</Text>
      <View
        style={[styles.iphone1415ProMax6Item, styles.iphone1415ChildLayout1]}
      />
      <View
        style={[styles.iphone1415ProMax6Inner, styles.iphone1415Position]}
      />
      <View style={[styles.lineView, styles.lineViewPosition]} />
      <View
        style={[styles.iphone1415ProMax6Child1, styles.iphone1415ChildLayout1]}
      />
      <Text style={[styles.frecuenciaDePago, styles.capitalTypo]}>
        Frecuencia de Pago
      </Text>
      <Text style={[styles.diario, styles.nicoTypo]}>Diario</Text>
      <Text style={[styles.fechaDeInicio, styles.fechaTypo]}>
        Fecha de inicio
      </Text>
      <Text style={[styles.capital, styles.capitalTypo]}>Capital</Text>
      <Text style={[styles.interes, styles.interesTypo]}>Interes</Text>
      <View style={[styles.iphone1415ProMax6Child2, styles.lineViewPosition]} />
      <Text style={[styles.nmeroDeCuotas, styles.interesTypo]}>
        Número de cuotas
      </Text>
      <View
        style={[
          styles.iphone1415ProMax6Child3,
          styles.iphone1415ChildPosition2,
        ]}
      />
      <Text style={[styles.intersMoratorio, styles.dasDeGraciaTypo]}>
        Interés Moratorio
      </Text>
      <View
        style={[
          styles.iphone1415ProMax6Child4,
          styles.iphone1415ChildPosition2,
        ]}
      />
      <Text style={[styles.dasDeGracia, styles.dasDeGraciaTypo]}>
        Días de Gracia
      </Text>
      <Text style={[styles.aplicarMoratorios, styles.siTypo]}>
        Aplicar Moratorios
      </Text>
      <Text style={[styles.total, styles.pagoTypo]}>Total</Text>
      <View
        style={[styles.iphone1415ProMax6Child5, styles.iphone1415ChildLayout1]}
      />
      <Text style={[styles.pago, styles.pagoTypo]}>Pago</Text>
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
      <View style={[styles.rectangleView, styles.rectangleViewLayout]} />
      <Text style={[styles.calcular, styles.aceptarTypo]}>Calcular</Text>
      <View
        style={[styles.iphone1415ProMax6Child6, styles.rectangleViewLayout]}
      />
      <Text style={[styles.aceptar, styles.aceptarTypo]}>Aceptar</Text>
      <Image
        style={[styles.ellipseIcon, styles.iphone1415ChildLayout]}
        contentFit="cover"
        source={require("../assets/ellipse-3.png")}
      />
      <Text style={[styles.nico, styles.nicoTypo]}>Único</Text>
      <Image
        style={[styles.iphone1415ProMax6Child7, styles.iphone1415ChildLayout]}
        contentFit="cover"
        source={require("../assets/ellipse-3.png")}
      />
      <Text style={[styles.si, styles.siTypo]}>SI</Text>
      <Image
        style={[
          styles.iphone1415ProMax6Child8,
          styles.iphone1415ChildPosition1,
        ]}
        contentFit="cover"
        source={require("../assets/ellipse-3.png")}
      />
      <Text style={[styles.no, styles.siTypo]}>NO</Text>
      <Image
        style={[
          styles.iphone1415ProMax6Child9,
          styles.iphone1415ChildPosition1,
        ]}
        contentFit="cover"
        source={require("../assets/ellipse-3.png")}
      />
      <Text style={[styles.semanal, styles.nicoTypo]}>Semanal</Text>
      <Image
        style={[styles.iphone1415ProMax6Child10, styles.iphone1415ChildLayout]}
        contentFit="cover"
        source={require("../assets/ellipse-3.png")}
      />
      <Text style={[styles.mensual, styles.nicoTypo]}>Mensual</Text>
      <Image
        style={[styles.iphone1415ProMax6Child11, styles.iphone1415ChildLayout]}
        contentFit="cover"
        source={require("../assets/ellipse-5.png")}
      />
      <Text style={[styles.aplicarInteresesA, styles.capitalTypo]}>
        Aplicar intereses a:
      </Text>
      <Text style={[styles.capitalInicial, styles.cadaCuotaTypo]}>
        Capital Inicial
      </Text>
      <Image
        style={[
          styles.iphone1415ProMax6Child12,
          styles.iphone1415ChildPosition,
        ]}
        contentFit="cover"
        source={require("../assets/ellipse-3.png")}
      />
      <Text style={[styles.cadaCuota, styles.cadaCuotaTypo]}>Cada cuota</Text>
      <Image
        style={[
          styles.iphone1415ProMax6Child13,
          styles.iphone1415ChildPosition,
        ]}
        contentFit="cover"
        source={require("../assets/ellipse-5.png")}
      />
      <Image
        style={[styles.fecha1Icon, styles.iconLayout]}
        contentFit="cover"
        source={require("../assets/fecha-1.png")}
      />
      <View
        style={[styles.iphone1415ProMax6Child14, styles.iphone1415Position]}
      />
      <Text style={[styles.fechaDeVencimiento, styles.fechaTypo]}>
        Fecha de vencimiento
      </Text>
      <Image
        style={[styles.fecha2Icon, styles.iconLayout]}
        contentFit="cover"
        source={require("../assets/fecha-1.png")}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  iconLayout1: {
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
  iphone1415ChildLayout1: {
    height: 1,
    width: 345,
    borderTopWidth: 1,
    borderColor: Color.colorGainsboro_100,
    borderStyle: "solid",
    left: 43,
    position: "absolute",
  },
  iphone1415Position: {
    top: 335,
    width: 101,
    height: 1,
    borderTopWidth: 1,
    borderColor: Color.colorGainsboro_100,
    borderStyle: "solid",
    position: "absolute",
  },
  lineViewPosition: {
    top: 521,
    height: 1,
    borderTopWidth: 1,
    borderColor: Color.colorGainsboro_100,
    borderStyle: "solid",
    position: "absolute",
  },
  capitalTypo: {
    color: Color.colorGray_300,
    fontSize: FontSize.size_sm,
    left: 43,
    textAlign: "left",
    fontFamily: FontFamily.interRegular,
    position: "absolute",
  },
  nicoTypo: {
    top: 254,
    color: Color.colorGray_300,
    fontSize: FontSize.size_sm,
    textAlign: "left",
    fontFamily: FontFamily.interRegular,
    position: "absolute",
  },
  fechaTypo: {
    top: 292,
    color: Color.colorGray_300,
    fontSize: FontSize.size_sm,
    textAlign: "left",
    fontFamily: FontFamily.interRegular,
    position: "absolute",
  },
  interesTypo: {
    top: 478,
    color: Color.colorGray_300,
    fontSize: FontSize.size_sm,
    textAlign: "left",
    fontFamily: FontFamily.interRegular,
    position: "absolute",
  },
  iphone1415ChildPosition2: {
    top: 619,
    width: 101,
    height: 1,
    borderTopWidth: 1,
    borderColor: Color.colorGainsboro_100,
    borderStyle: "solid",
    position: "absolute",
  },
  dasDeGraciaTypo: {
    top: 576,
    color: Color.colorGray_300,
    fontSize: FontSize.size_sm,
    textAlign: "left",
    fontFamily: FontFamily.interRegular,
    position: "absolute",
  },
  siTypo: {
    top: 539,
    color: Color.colorGray_300,
    fontSize: FontSize.size_sm,
    textAlign: "left",
    fontFamily: FontFamily.interRegular,
    position: "absolute",
  },
  pagoTypo: {
    fontSize: FontSize.size_xl,
    color: Color.colorGray_300,
    left: 43,
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
  aceptarTypo: {
    color: Color.colorWhite,
    fontSize: FontSize.size_xl,
    fontFamily: FontFamily.interRegular,
    position: "absolute",
  },
  iphone1415ChildLayout: {
    height: 15,
    width: 15,
    top: 253,
    position: "absolute",
  },
  iphone1415ChildPosition1: {
    top: 538,
    height: 15,
    width: 15,
    position: "absolute",
  },
  cadaCuotaTypo: {
    top: 451,
    color: Color.colorGray_300,
    fontSize: FontSize.size_sm,
    textAlign: "left",
    fontFamily: FontFamily.interRegular,
    position: "absolute",
  },
  iphone1415ChildPosition: {
    top: 450,
    height: 15,
    width: 15,
    position: "absolute",
  },
  iconLayout: {
    height: 25,
    width: 25,
    top: 309,
    position: "absolute",
  },
  giro264Icon: {
    top: 870,
    left: 25,
    width: 55,
    height: 56,
    position: "absolute",
  },
  iphone1415ProMax6Child: {
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
  nuevoPrestamo: {
    top: 75,
    left: 91,
    fontSize: FontSize.size_13xl,
    color: Color.colorBlack,
    width: 250,
    textAlign: "left",
    fontFamily: FontFamily.interRegular,
    position: "absolute",
  },
  iphone1415ProMax6Item: {
    top: 395,
  },
  iphone1415ProMax6Inner: {
    width: 101,
    left: 43,
  },
  lineView: {
    width: 61,
    left: 43,
  },
  iphone1415ProMax6Child1: {
    top: 691,
  },
  frecuenciaDePago: {
    top: 218,
  },
  diario: {
    left: 146,
  },
  fechaDeInicio: {
    left: 43,
  },
  capital: {
    top: 355,
  },
  interes: {
    left: 43,
  },
  iphone1415ProMax6Child2: {
    left: 152,
    width: 101,
  },
  nmeroDeCuotas: {
    left: 137,
  },
  iphone1415ProMax6Child3: {
    left: 43,
  },
  intersMoratorio: {
    left: 43,
  },
  iphone1415ProMax6Child4: {
    left: 201,
  },
  dasDeGracia: {
    left: 201,
  },
  aplicarMoratorios: {
    left: 43,
  },
  total: {
    top: 646,
  },
  iphone1415ProMax6Child5: {
    top: 756,
  },
  pago: {
    top: 711,
  },
  icon: {
    height: "100%",
    width: "100%",
  },
  botonDeFlechaIzquierdaDel: {
    left: 16,
  },
  rectangleView: {
    left: 48,
  },
  calcular: {
    top: 806,
    left: 85,
    textAlign: "center",
  },
  iphone1415ProMax6Child6: {
    left: 237,
  },
  aceptar: {
    top: 805,
    left: 278,
    textAlign: "left",
  },
  ellipseIcon: {
    left: 125,
  },
  nico: {
    left: 64,
  },
  iphone1415ProMax6Child7: {
    left: 43,
  },
  si: {
    left: 222,
  },
  iphone1415ProMax6Child8: {
    left: 201,
  },
  no: {
    left: 281,
  },
  iphone1415ProMax6Child9: {
    left: 260,
  },
  semanal: {
    left: 229,
  },
  iphone1415ProMax6Child10: {
    left: 208,
  },
  mensual: {
    left: 328,
  },
  iphone1415ProMax6Child11: {
    left: 311,
  },
  aplicarInteresesA: {
    top: 415,
  },
  capitalInicial: {
    left: 64,
  },
  iphone1415ProMax6Child12: {
    left: 43,
  },
  cadaCuota: {
    left: 215,
  },
  iphone1415ProMax6Child13: {
    left: 194,
  },
  fecha1Icon: {
    left: 154,
  },
  iphone1415ProMax6Child14: {
    left: 247,
    width: 101,
  },
  fechaDeVencimiento: {
    left: 242,
  },
  fecha2Icon: {
    left: 362,
  },
  iphone1415ProMax6: {
    backgroundColor: Color.colorWhite,
    flex: 1,
    height: 932,
    overflow: "hidden",
    width: "100%",
  },
});

export default IPhone1415ProMax5;
