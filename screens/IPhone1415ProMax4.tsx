import * as React from "react";
import { Image } from "expo-image";
import { StyleSheet, View, Text, Pressable } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { StackNavigationProp } from "@react-navigation/stack";
import { useNavigation, ParamListBase } from "@react-navigation/native";
import { Color, FontSize, FontFamily, Border } from "../GlobalStyles";

const IPhone1415ProMax4 = () => {
  const navigation = useNavigation<StackNavigationProp<ParamListBase>>();

  return (
    <View style={styles.iphone1415ProMax5}>
      <Image
        style={styles.giro264Icon}
        contentFit="cover"
        source={require("../assets/giro26-4.png")}
      />
      <LinearGradient
        style={styles.iphone1415ProMax5Child}
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
        source={require("../assets/atencionalcliente-1.png")}
      />
      <Text style={styles.nuevoCliente}>Nuevo Cliente</Text>
      <View
        style={[styles.iphone1415ProMax5Item, styles.iphone1415ChildLayout]}
      />
      <View
        style={[styles.iphone1415ProMax5Inner, styles.iphone1415ChildLayout]}
      />
      <View style={[styles.lineView, styles.iphone1415ChildLayout]} />
      <View
        style={[styles.iphone1415ProMax5Child1, styles.iphone1415ChildLayout]}
      />
      <View
        style={[styles.iphone1415ProMax5Child2, styles.iphone1415ChildLayout]}
      />
      <View
        style={[styles.iphone1415ProMax5Child3, styles.iphone1415ChildLayout]}
      />
      <View
        style={[styles.iphone1415ProMax5Child4, styles.iphone1415ChildLayout]}
      />
      <View
        style={[styles.iphone1415ProMax5Child5, styles.iphone1415ChildLayout]}
      />
      <View
        style={[styles.iphone1415ProMax5Child6, styles.iphone1415ChildLayout]}
      />
      <View
        style={[styles.iphone1415ProMax5Child7, styles.iphone1415ChildLayout]}
      />
      <Text style={[styles.nombreCompleto, styles.identificacinTypo]}>
        Nombre completo
      </Text>
      <Text style={[styles.identificacin, styles.identificacinTypo]}>
        Identificación
      </Text>
      <Text style={[styles.deCliente, styles.telfonoTypo]}># de cliente</Text>
      <Text style={[styles.telfono, styles.telfonoTypo]}>Teléfono</Text>
      <Text style={[styles.telfonoDeCasa, styles.telfonoTypo]}>
        Teléfono de casa
      </Text>
      <Text style={[styles.correoElectrnico, styles.telfonoTypo]}>
        Correo electrónico
      </Text>
      <Text style={[styles.direccin, styles.telfonoTypo]}>Dirección</Text>
      <Text style={[styles.referenciaPersonal, styles.aceptarTypo]}>
        Referencia Personal
      </Text>
      <Text style={[styles.nombreCompleto1, styles.telfonoTypo]}>
        Nombre completo
      </Text>
      <Text style={[styles.telfono1, styles.telfonoTypo]}>Teléfono</Text>
      <Text style={[styles.direccin1, styles.telfonoTypo]}>Dirección</Text>
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
      <View style={styles.rectangleView} />
      <Text style={[styles.aceptar, styles.aceptarTypo]}>Aceptar</Text>
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
  iphone1415ChildLayout: {
    height: 1,
    width: 345,
    borderTopWidth: 1,
    borderColor: Color.colorGainsboro_100,
    borderStyle: "solid",
    left: 43,
    position: "absolute",
  },
  identificacinTypo: {
    fontSize: FontSize.size_sm,
    color: Color.colorGray_300,
    textAlign: "center",
    fontFamily: FontFamily.interRegular,
    position: "absolute",
  },
  telfonoTypo: {
    textAlign: "left",
    color: Color.colorGray_300,
    fontSize: FontSize.size_sm,
    left: 43,
    fontFamily: FontFamily.interRegular,
    position: "absolute",
  },
  aceptarTypo: {
    fontSize: FontSize.size_xl,
    textAlign: "left",
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
  iphone1415ProMax5Child: {
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
  nuevoCliente: {
    top: 75,
    left: 102,
    fontSize: FontSize.size_13xl,
    color: Color.colorBlack,
    width: 225,
    textAlign: "center",
    fontFamily: FontFamily.interRegular,
    position: "absolute",
  },
  iphone1415ProMax5Item: {
    top: 259,
  },
  iphone1415ProMax5Inner: {
    top: 304,
  },
  lineView: {
    top: 354,
  },
  iphone1415ProMax5Child1: {
    top: 399,
  },
  iphone1415ProMax5Child2: {
    top: 448,
  },
  iphone1415ProMax5Child3: {
    top: 497,
  },
  iphone1415ProMax5Child4: {
    top: 553,
  },
  iphone1415ProMax5Child5: {
    top: 667,
  },
  iphone1415ProMax5Child6: {
    top: 713,
  },
  iphone1415ProMax5Child7: {
    top: 769,
  },
  nombreCompleto: {
    top: 215,
    left: 40,
    color: Color.colorGray_300,
  },
  identificacin: {
    top: 267,
    color: Color.colorGray_300,
    left: 43,
  },
  deCliente: {
    top: 313,
  },
  telfono: {
    top: 361,
  },
  telfonoDeCasa: {
    top: 406,
  },
  correoElectrnico: {
    top: 455,
  },
  direccin: {
    top: 507,
  },
  referenciaPersonal: {
    top: 585,
    color: Color.colorGray_300,
    left: 43,
  },
  nombreCompleto1: {
    top: 627,
  },
  telfono1: {
    top: 671,
  },
  direccin1: {
    top: 719,
  },
  icon: {
    height: "100%",
    width: "100%",
  },
  botonDeFlechaIzquierdaDel: {
    left: 16,
  },
  rectangleView: {
    top: 789,
    left: 65,
    borderRadius: Border.br_81xl,
    backgroundColor: Color.colorDodgerblue,
    width: 300,
    height: 54,
    position: "absolute",
  },
  aceptar: {
    top: 804,
    left: 177,
    color: Color.colorWhite,
  },
  iphone1415ProMax5: {
    backgroundColor: Color.colorWhite,
    flex: 1,
    height: 932,
    overflow: "hidden",
    width: "100%",
  },
});

export default IPhone1415ProMax4;
