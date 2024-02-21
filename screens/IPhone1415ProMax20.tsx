import * as React from "react";
import { Image } from "expo-image";
import { StyleSheet, View, Text, Pressable } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { StackNavigationProp } from "@react-navigation/stack";
import { useNavigation, ParamListBase } from "@react-navigation/native";
import { FontFamily, Color, FontSize, Border } from "../GlobalStyles";

const IPhone1415ProMax20 = () => {
  const navigation = useNavigation<StackNavigationProp<ParamListBase>>();

  return (
    <View style={styles.iphone1415ProMax23}>
      <Image
        style={styles.giro264Icon}
        contentFit="cover"
        source={require("../assets/giro26-4.png")}
      />
      <LinearGradient
        style={styles.iphone1415ProMax23Child}
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
        source={require("../assets/factura-1.png")}
      />
      <Text style={styles.configurarImpresora}>Configurar Impresora</Text>
      <Text style={[styles.impresinDeRecibos, styles.contratoTypo]}>
        Impresión de recibos
      </Text>
      <Text style={[styles.permiteEstablecerLa, styles.permiteTypo]}>
        Permite establecer la configuración de la impresora
      </Text>
      <Pressable
        style={[styles.botonDeFlechaIzquierdaDel, styles.corona2IconPosition]}
        onPress={() => navigation.navigate("IPhone1415ProMax23")}
      >
        <Image
          style={styles.icon}
          contentFit="cover"
          source={require("../assets/botondeflechaizquierdadelteclado-1.png")}
        />
      </Pressable>
      <Pressable
        style={styles.iphone1415ProMax23Item}
        onPress={() => navigation.navigate("IPhone1415ProMax21")}
      />
      <Text style={[styles.aceptar, styles.contratoTypo]}>Aceptar</Text>
      <Image
        style={[styles.iphone1415ProMax23Inner, styles.ellipseIconLayout]}
        contentFit="cover"
        source={require("../assets/ellipse-5.png")}
      />
      <Text style={[styles.descripcinDelContrato, styles.contratoTypo]}>
        Descripción del contrato
      </Text>
      <Text style={styles.graciasPorConfiar}>
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
        style={[styles.iphone1415ProMax23Child1, styles.iphone1415ChildLayout]}
      />
      <Text style={[styles.direccinMac, styles.dispositivoTypo]}>
        Dirección MAC
      </Text>
      <View
        style={[styles.iphone1415ProMax23Child2, styles.iphone1415ChildLayout]}
      />
      <Text style={[styles.tamaoDePgina, styles.dispositivoTypo]}>
        Tamaño de página
      </Text>
      <View
        style={[styles.iphone1415ProMax23Child3, styles.iphone1415ChildLayout]}
      />
      <Text style={[styles.caractersticasPorLnea, styles.dispositivoTypo]}>
        Características por línea
      </Text>
      <View
        style={[styles.iphone1415ProMax23Child4, styles.iphone1415ChildLayout]}
      />
      <Text
        style={[styles.finalDeRecibo, styles.dispositivoTypo]}
      >{`Final de recibo
Grcias por confiar en nosotros`}</Text>
      <View
        style={[styles.iphone1415ProMax23Child5, styles.iphone1415ChildLayout]}
      />
      <View
        style={[styles.iphone1415ProMax23Child6, styles.iphone1415ChildLayout]}
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
  contratoTypo: {
    textAlign: "left",
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
  giro264Icon: {
    top: 870,
    left: 25,
    width: 55,
    height: 56,
    position: "absolute",
  },
  iphone1415ProMax23Child: {
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
  configurarImpresora: {
    top: 47,
    left: 91,
    fontSize: FontSize.size_13xl,
    color: Color.colorBlack,
    textAlign: "center",
    width: 250,
    fontFamily: FontFamily.interRegular,
    position: "absolute",
  },
  impresinDeRecibos: {
    top: 217,
    color: Color.colorGoldenrod,
    fontSize: FontSize.size_sm,
    left: 43,
    textAlign: "left",
  },
  permiteEstablecerLa: {
    top: 244,
  },
  icon: {
    height: "100%",
    width: "100%",
  },
  botonDeFlechaIzquierdaDel: {
    left: 16,
  },
  iphone1415ProMax23Item: {
    top: 791,
    left: 140,
    borderRadius: Border.br_81xl,
    backgroundColor: Color.colorDodgerblue,
    width: 150,
    height: 54,
    position: "absolute",
  },
  aceptar: {
    top: 805,
    left: 181,
    fontSize: FontSize.size_xl,
    color: Color.colorWhite,
  },
  iphone1415ProMax23Inner: {
    top: 260,
  },
  descripcinDelContrato: {
    top: 643,
    color: Color.colorGoldenrod,
    fontSize: FontSize.size_sm,
    left: 43,
    textAlign: "left",
  },
  graciasPorConfiar: {
    top: 666,
    left: 48,
    width: 268,
    color: Color.colorGray_300,
    textAlign: "left",
    fontSize: FontSize.size_sm,
    fontFamily: FontFamily.interRegular,
    position: "absolute",
  },
  imprimirContrato: {
    top: 551,
    color: Color.colorGoldenrod,
    fontSize: FontSize.size_sm,
    left: 43,
    textAlign: "left",
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
    color: Color.colorGoldenrod,
    fontSize: FontSize.size_sm,
    left: 43,
    textAlign: "left",
  },
  lineView: {
    top: 340,
  },
  nombreDelDispositivo: {
    top: 357,
  },
  iphone1415ProMax23Child1: {
    top: 376,
  },
  direccinMac: {
    top: 393,
  },
  iphone1415ProMax23Child2: {
    top: 412,
  },
  tamaoDePgina: {
    top: 431,
  },
  iphone1415ProMax23Child3: {
    top: 450,
  },
  caractersticasPorLnea: {
    top: 469,
  },
  iphone1415ProMax23Child4: {
    top: 488,
  },
  finalDeRecibo: {
    top: 496,
  },
  iphone1415ProMax23Child5: {
    top: 534,
  },
  iphone1415ProMax23Child6: {
    top: 691,
  },
  iphone1415ProMax23: {
    backgroundColor: Color.colorWhite,
    flex: 1,
    height: 932,
    overflow: "hidden",
    width: "100%",
  },
});

export default IPhone1415ProMax20;
