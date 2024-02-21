import React from "react";
import { StyleSheet, View, Text } from "react-native";
import { Color, FontFamily, FontSize } from "../GlobalStyles";
import { StackScreenProps } from "@react-navigation/stack";
import { SafeAreaView } from "react-native-safe-area-context";
import { AuthContext } from "../src/context/AuthContext";

interface Props extends StackScreenProps<any, any> {}

const Usuarios = ({ navigation }: Props) => {
  const { users } = React.useContext(AuthContext);

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.content}>
        {users.map((user, index) => (
          <View key={index} style={styles.userContainer}>
            <Text style={styles.email}> ✉️ {user.correo}</Text>
            <Text style={styles.password}> 🔒 {user.password}</Text>
          </View>
        ))}
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Color.colorWhite,
  },
  content: {
    flex: 1,
    paddingHorizontal: 20,
    paddingTop: 20,
  },
  userContainer: {
    marginBottom: 20,
  },
  email: {
    fontFamily: FontFamily.interRegular,
    fontSize: FontSize.size_sm,
    color: Color.colorBlack,
    marginBottom: 5,
  },
  password: {
    fontFamily: FontFamily.interRegular,
    fontSize: FontSize.size_sm,
    color: Color.colorBlack,
  },
});

export default Usuarios;
