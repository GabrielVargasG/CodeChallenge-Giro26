import * as React from "react";
import { Image } from "expo-image";
import { StyleSheet, View, Text, Pressable } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { StackNavigationProp } from "@react-navigation/stack";
import { useNavigation, ParamListBase } from "@react-navigation/native";
import { Color, FontSize, FontFamily, Border } from "../GlobalStyles";

const IPhone1415ProMax18 = () => {
  const navigation = useNavigation<StackNavigationProp<ParamListBase>>();

  return (
    <Pressable
      style={styles.iphone1415ProMax20}
      onPress={() => navigation.navigate("IPhone1415ProMax19")}
    >
      <Image
        style={styles.giro264Icon}
        contentFit="cover"
        source={require("../assets/giro26-4.png")}
      />
      <LinearGradient
        style={styles.iphone1415ProMax20Child}
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
      <Text style={styles.configurarPrestamo}>Configurar Prestamo</Text>
      <Text style={[styles.frecuenciaDePago, styles.cambiarTypo]}>
        Frecuencia de Pago
      </Text>
      <Text style={[styles.diario, styles.nicoTypo]}>Diario</Text>
      <Text style={[styles.seleccinDeTipo, styles.cambiarTypo]}>
        Selección de tipo
      </Text>
      <Text style={[styles.permiteQueSe, styles.permiteTypo]}>
        Permite que se pueda cambiar el tipo de cobro al momento de crear un
        nuevo préstamo
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
      <View style={[styles.iphone1415ProMax20Item, styles.iphone1415Layout]} />
      <Text style={[styles.calcular, styles.aceptarTypo]}>Calcular</Text>
      <View style={[styles.iphone1415ProMax20Inner, styles.iphone1415Layout]} />
      <Text style={[styles.aceptar, styles.aceptarTypo]}>Aceptar</Text>
      <Image
        style={[styles.ellipseIcon, styles.iphone1415ChildLayout]}
        contentFit="cover"
        source={require("../assets/ellipse-3.png")}
      />
      <Text style={[styles.nico, styles.nicoTypo]}>Único</Text>
      <Image
        style={[styles.iphone1415ProMax20Child1, styles.iphone1415ChildLayout]}
        contentFit="cover"
        source={require("../assets/ellipse-3.png")}
      />
      <Text style={[styles.semanal, styles.nicoTypo]}>Semanal</Text>
      <Image
        style={[styles.iphone1415ProMax20Child2, styles.iphone1415ChildLayout]}
        contentFit="cover"
        source={require("../assets/ellipse-3.png")}
      />
      <Text style={[styles.mensual, styles.nicoTypo]}>Mensual</Text>
      <Image
        style={[
          styles.iphone1415ProMax20Child3,
          styles.iphone1415ChildPosition1,
        ]}
        contentFit="cover"
        source={require("../assets/ellipse-5.png")}
      />
      <Image
        style={[
          styles.iphone1415ProMax20Child4,
          styles.iphone1415ChildPosition1,
        ]}
        contentFit="cover"
        source={require("../assets/ellipse-3.png")}
      />
      <Text style={[styles.cambiarAplicacinDe, styles.cambiarTypo]}>
        Cambiar aplicación de interes
      </Text>
      <Text style={[styles.permiteCambiarEl, styles.nicoTypo]}>
        Permite cambiar el tipo de aplicación del interes al momento de crear un
        préstamo
      </Text>
      <Text style={[styles.text, styles.nicoTypo]}>20</Text>
      <Image
        style={[
          styles.iphone1415ProMax20Child5,
          styles.iphone1415ChildPosition1,
        ]}
        contentFit="cover"
        source={require("../assets/ellipse-3.png")}
      />
      <Text style={[styles.cambiarAplicacinDe1, styles.cambiarTypo]}>
        Cambiar aplicación de interes
      </Text>
      <Text style={[styles.cambiarIntereses, styles.cambiarTypo]}>
        Cambiar intereses
      </Text>
      <Text style={[styles.permiteQueSe1, styles.permiteTypo]}>
        Permite que se pueda cambiar el % de interes al momento de crear un
        nuevo prestamo
      </Text>
      <Image
        style={[
          styles.iphone1415ProMax20Child6,
          styles.iphone1415ChildPosition1,
        ]}
        contentFit="cover"
        source={require("../assets/ellipse-3.png")}
      />
      <Text style={[styles.aplicarInteresesA, styles.cambiarTypo]}>
        Aplicar intereses a:
      </Text>
      <Text style={[styles.capitalInicial, styles.cadaCuotaTypo]}>
        Capital Inicial
      </Text>
      <Image
        style={[
          styles.iphone1415ProMax20Child7,
          styles.iphone1415ChildPosition,
        ]}
        contentFit="cover"
        source={require("../assets/ellipse-3.png")}
      />
      <Text style={[styles.cadaCuota, styles.cadaCuotaTypo]}>Cada cuota</Text>
      <Image
        style={[
          styles.iphone1415ProMax20Child8,
          styles.iphone1415ChildPosition,
        ]}
        contentFit="cover"
        source={require("../assets/ellipse-5.png")}
      />
      <View style={styles.lineView} />
    </Pressable>
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
  cambiarTypo: {
    color: Color.colorGoldenrod,
    fontSize: FontSize.size_sm,
    textAlign: "left",
    left: 43,
    fontFamily: FontFamily.interRegular,
    position: "absolute",
  },
  nicoTypo: {
    color: Color.colorGray_300,
    textAlign: "left",
    fontSize: FontSize.size_sm,
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
  iphone1415Layout: {
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
    left: 311,
    height: 15,
    width: 15,
    position: "absolute",
  },
  cadaCuotaTypo: {
    top: 423,
    color: Color.colorGray_300,
    textAlign: "left",
    fontSize: FontSize.size_sm,
    fontFamily: FontFamily.interRegular,
    position: "absolute",
  },
  iphone1415ChildPosition: {
    top: 422,
    height: 15,
    width: 15,
    position: "absolute",
  },
  giro264Icon: {
    top: 870,
    left: 25,
    width: 55,
    height: 56,
    position: "absolute",
  },
  iphone1415ProMax20Child: {
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
  configurarPrestamo: {
    top: 47,
    left: 91,
    fontSize: FontSize.size_13xl,
    color: Color.colorBlack,
    width: 250,
    textAlign: "center",
    fontFamily: FontFamily.interRegular,
    position: "absolute",
  },
  frecuenciaDePago: {
    top: 218,
    textAlign: "left",
  },
  diario: {
    left: 146,
    top: 254,
    color: Color.colorGray_300,
  },
  seleccinDeTipo: {
    top: 292,
    textAlign: "left",
  },
  permiteQueSe: {
    top: 319,
  },
  icon: {
    height: "100%",
    width: "100%",
  },
  botonDeFlechaIzquierdaDel: {
    left: 16,
  },
  iphone1415ProMax20Item: {
    left: 48,
  },
  calcular: {
    top: 806,
    left: 85,
    textAlign: "center",
  },
  iphone1415ProMax20Inner: {
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
    top: 254,
    color: Color.colorGray_300,
  },
  iphone1415ProMax20Child1: {
    left: 43,
  },
  semanal: {
    left: 229,
    top: 254,
    color: Color.colorGray_300,
  },
  iphone1415ProMax20Child2: {
    left: 208,
  },
  mensual: {
    left: 328,
    top: 254,
    color: Color.colorGray_300,
  },
  iphone1415ProMax20Child3: {
    top: 253,
    left: 311,
  },
  iphone1415ProMax20Child4: {
    top: 335,
  },
  cambiarAplicacinDe: {
    top: 456,
    textAlign: "left",
  },
  permiteCambiarEl: {
    top: 483,
    width: 214,
    left: 43,
  },
  text: {
    top: 584,
    left: 58,
  },
  iphone1415ProMax20Child5: {
    top: 499,
  },
  cambiarAplicacinDe1: {
    top: 553,
    textAlign: "left",
  },
  cambiarIntereses: {
    top: 628,
    textAlign: "left",
  },
  permiteQueSe1: {
    top: 655,
  },
  iphone1415ProMax20Child6: {
    top: 671,
  },
  aplicarInteresesA: {
    top: 387,
    textAlign: "left",
  },
  capitalInicial: {
    left: 64,
  },
  iphone1415ProMax20Child7: {
    left: 43,
  },
  cadaCuota: {
    left: 215,
  },
  iphone1415ProMax20Child8: {
    left: 194,
  },
  lineView: {
    top: 603,
    borderStyle: "solid",
    borderColor: Color.colorGray_300,
    borderTopWidth: 1,
    width: 181,
    height: 1,
    left: 48,
    position: "absolute",
  },
  iphone1415ProMax20: {
    backgroundColor: Color.colorWhite,
    flex: 1,
    height: 932,
    overflow: "hidden",
    width: "100%",
  },
});

export default IPhone1415ProMax18;
