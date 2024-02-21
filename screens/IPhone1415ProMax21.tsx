import * as React from "react";
import { Image } from "expo-image";
import { StyleSheet, View, Text, Pressable } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { StackNavigationProp } from "@react-navigation/stack";
import { useNavigation, ParamListBase } from "@react-navigation/native";
import { Color, FontSize, FontFamily, Border } from "../GlobalStyles";

const IPhone1415ProMax21 = () => {
  const navigation = useNavigation<StackNavigationProp<ParamListBase>>();

  return (
    <View style={styles.iphone1415ProMax24}>
      <Image
        style={styles.giro264Icon}
        contentFit="cover"
        source={require("../assets/giro26-4.png")}
      />
      <LinearGradient
        style={[styles.iphone1415ProMax24Child, styles.rectangleViewPosition]}
        locations={[0, 1]}
        colors={["#3a8cff", "rgba(58, 140, 255, 0)"]}
      />
      <Image
        style={[styles.corona1Icon, styles.iconLayout]}
        contentFit="cover"
        source={require("../assets/corona-1.png")}
      />
      <Image
        style={[styles.corona2Icon, styles.iconPosition]}
        contentFit="cover"
        source={require("../assets/corona-1.png")}
      />
      <Image
        style={[styles.atencionAlCliente2Icon, styles.iconLayout]}
        contentFit="cover"
        source={require("../assets/factura-1.png")}
      />
      <Text style={styles.configurarImpresora}>Configurar Impresora</Text>
      <Text style={[styles.impresinDeRecibos, styles.contratoTypo]}>
        Impresión de recibos
      </Text>
      <Text style={[styles.permiteEstablecerLa, styles.permiteTypo]}>
        Permite establecer la configuración de la impresora
      </Text>
      <Image
        style={[styles.botonDeFlechaIzquierdaDelIcon, styles.iconPosition]}
        contentFit="cover"
        source={require("../assets/botondeflechaizquierdadelteclado-1.png")}
      />
      <View style={styles.iphone1415ProMax24Item} />
      <Text style={styles.aceptar}>Aceptar</Text>
      <Image
        style={[styles.iphone1415ProMax24Inner, styles.ellipseIconLayout]}
        contentFit="cover"
        source={require("../assets/ellipse-5.png")}
      />
      <Text style={[styles.descripcinDelContrato, styles.contratoTypo]}>
        Descripción del contrato
      </Text>
      <Text
        style={[styles.graciasPorConfiar, styles.graciasPorConfiarPosition]}
      >
        Gracias por confiar en nosotros
      </Text>
      <Text style={[styles.imprimirContrato, styles.contratoTypo]}>
        Imprimir contrato
      </Text>
      <Text style={[styles.permiteEstablecerQu, styles.permiteTypo]}>
        Permite establecer qué días se programaran las fechas de pago
      </Text>
      <Image
        style={[styles.ellipseIcon, styles.ellipseIconLayout]}
        contentFit="cover"
        source={require("../assets/ellipse-5.png")}
      />
      <Text style={[styles.seleccioneDispositivo, styles.dispositivoTypo]}>
        Seleccione dispositivo
      </Text>
      <Text style={[styles.dispositivo, styles.contratoTypo]}>Dispositivo</Text>
      <View style={[styles.lineView, styles.iphone1415ChildLayout]} />
      <Text style={[styles.nombreDelDispositivo, styles.dispositivoTypo]}>
        Nombre del dispositivo
      </Text>
      <View
        style={[styles.iphone1415ProMax24Child1, styles.iphone1415ChildLayout]}
      />
      <Text style={[styles.direccinMac, styles.dispositivoTypo]}>
        Dirección MAC
      </Text>
      <View
        style={[styles.iphone1415ProMax24Child2, styles.iphone1415ChildLayout]}
      />
      <Text style={[styles.tamaoDePgina, styles.dispositivoTypo]}>
        Tamaño de página
      </Text>
      <View
        style={[styles.iphone1415ProMax24Child3, styles.iphone1415ChildLayout]}
      />
      <Text style={[styles.caractersticasPorLnea, styles.dispositivoTypo]}>
        Características por línea
      </Text>
      <View style={[styles.rectangleView, styles.rectangleViewPosition]} />
      <View
        style={[styles.iphone1415ProMax24Child4, styles.iphone1415ChildLayout]}
      />
      <Text
        style={[styles.finalDeRecibo, styles.dispositivoTypo]}
      >{`Final de recibo
Grcias por confiar en nosotros`}</Text>
      <View
        style={[styles.iphone1415ProMax24Child5, styles.iphone1415ChildLayout]}
      />
      <View
        style={[styles.iphone1415ProMax24Child6, styles.iphone1415ChildLayout]}
      />
      <View
        style={[
          styles.iphone1415ProMax24Child7,
          styles.graciasPorConfiarPosition,
        ]}
      />
      <Text style={styles.permitirQueGiro26}>
        ¿Permitir que Giro26 encuentre dispositivos cercanos, se conecte a ellos
        y determine su ubicación relativa?
      </Text>
      <Pressable
        style={[styles.rectanglePressable, styles.rectanglePressableLayout]}
        onPress={() => navigation.navigate("IPhone1415ProMax23")}
      />
      <View
        style={[
          styles.iphone1415ProMax24Child8,
          styles.rectanglePressableLayout,
        ]}
      />
      <Text style={[styles.permitir, styles.permitirTypo]}>Permitir</Text>
      <Text style={[styles.noPermitir, styles.permitirTypo]}>No permitir</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  rectangleViewPosition: {
    width: 430,
    left: 0,
    top: 0,
    position: "absolute",
  },
  iconLayout: {
    height: 64,
    width: 64,
    position: "absolute",
  },
  iconPosition: {
    top: 11,
    height: 64,
    width: 64,
    position: "absolute",
  },
  contratoTypo: {
    textAlign: "left",
    color: Color.colorGoldenrod,
    fontSize: FontSize.size_sm,
    left: 43,
    fontFamily: FontFamily.interRegular,
    position: "absolute",
  },
  permiteTypo: {
    width: 204,
    color: Color.colorGray_300,
    textAlign: "left",
    fontSize: FontSize.size_sm,
    left: 43,
    fontFamily: FontFamily.interRegular,
    position: "absolute",
  },
  ellipseIconLayout: {
    height: 15,
    width: 15,
    left: 311,
    position: "absolute",
  },
  graciasPorConfiarPosition: {
    left: 48,
    position: "absolute",
  },
  dispositivoTypo: {
    left: 58,
    color: Color.colorGray_300,
    textAlign: "left",
    fontSize: FontSize.size_sm,
    fontFamily: FontFamily.interRegular,
    position: "absolute",
  },
  iphone1415ChildLayout: {
    height: 1,
    width: 181,
    borderTopWidth: 1,
    borderColor: Color.colorGray_300,
    borderStyle: "solid",
    left: 43,
    position: "absolute",
  },
  rectanglePressableLayout: {
    height: 33,
    width: 125,
    top: 522,
    backgroundColor: Color.colorDodgerblue,
    borderRadius: Border.br_81xl,
    position: "absolute",
  },
  permitirTypo: {
    width: 104,
    top: 529,
    height: 15,
    color: Color.colorWhite,
    fontSize: FontSize.size_sm,
    textAlign: "center",
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
  iphone1415ProMax24Child: {
    borderBottomRightRadius: Border.br_31xl,
    borderBottomLeftRadius: Border.br_31xl,
    height: 157,
    backgroundColor: "transparent",
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
  configurarImpresora: {
    top: 47,
    left: 91,
    fontSize: FontSize.size_13xl,
    color: Color.colorBlack,
    width: 250,
    textAlign: "center",
    fontFamily: FontFamily.interRegular,
    position: "absolute",
  },
  impresinDeRecibos: {
    top: 217,
  },
  permiteEstablecerLa: {
    top: 244,
  },
  botonDeFlechaIzquierdaDelIcon: {
    left: 16,
  },
  iphone1415ProMax24Item: {
    top: 791,
    left: 141,
    width: 150,
    height: 54,
    backgroundColor: Color.colorDodgerblue,
    borderRadius: Border.br_81xl,
    position: "absolute",
  },
  aceptar: {
    top: 805,
    left: 182,
    color: Color.colorWhite,
    fontSize: FontSize.size_xl,
    textAlign: "left",
    fontFamily: FontFamily.interRegular,
    position: "absolute",
  },
  iphone1415ProMax24Inner: {
    top: 260,
  },
  descripcinDelContrato: {
    top: 643,
  },
  graciasPorConfiar: {
    top: 666,
    width: 268,
    color: Color.colorGray_300,
    left: 48,
    textAlign: "left",
    fontSize: FontSize.size_sm,
    fontFamily: FontFamily.interRegular,
  },
  imprimirContrato: {
    top: 551,
  },
  permiteEstablecerQu: {
    top: 578,
  },
  ellipseIcon: {
    top: 594,
  },
  seleccioneDispositivo: {
    top: 321,
  },
  dispositivo: {
    top: 290,
  },
  lineView: {
    top: 340,
  },
  nombreDelDispositivo: {
    top: 357,
  },
  iphone1415ProMax24Child1: {
    top: 376,
  },
  direccinMac: {
    top: 393,
  },
  iphone1415ProMax24Child2: {
    top: 412,
  },
  tamaoDePgina: {
    top: 431,
  },
  iphone1415ProMax24Child3: {
    top: 450,
  },
  caractersticasPorLnea: {
    top: 469,
  },
  rectangleView: {
    backgroundColor: Color.colorGray_200,
    height: 932,
  },
  iphone1415ProMax24Child4: {
    top: 488,
  },
  finalDeRecibo: {
    top: 496,
  },
  iphone1415ProMax24Child5: {
    top: 534,
  },
  iphone1415ProMax24Child6: {
    top: 691,
  },
  iphone1415ProMax24Child7: {
    top: 339,
    borderRadius: Border.br_11xl,
    width: 336,
    height: 254,
    backgroundColor: Color.colorWhite,
  },
  permitirQueGiro26: {
    top: 378,
    left: 79,
    width: 273,
    fontSize: FontSize.size_xl,
    color: Color.colorGray_300,
    textAlign: "center",
    fontFamily: FontFamily.interRegular,
    position: "absolute",
  },
  rectanglePressable: {
    left: 77,
  },
  iphone1415ProMax24Child8: {
    left: 233,
  },
  permitir: {
    left: 87,
  },
  noPermitir: {
    left: 246,
  },
  iphone1415ProMax24: {
    flex: 1,
    width: "100%",
    overflow: "hidden",
    height: 932,
    backgroundColor: Color.colorWhite,
  },
});

export default IPhone1415ProMax21;
