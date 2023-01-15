import * as React from "react";
import {
  View,
  StyleSheet,
  TextInput,
  Text,
  Pressable,
  Image,
} from "react-native";
import { useNavigation } from "@react-navigation/native";

const Login = () => {
  const navigation = useNavigation();

  return (
    <Pressable
      style={[styles.login, styles.loginLayout]}
      onPress={() => navigation.navigate("HomeDashboard")}
    >
      <View style={[styles.rectangle, styles.loginLayout]} />
      <TextInput
        style={[styles.loginChild, styles.loginChildLayout]}
        keyboardType="default"
      />
      <TextInput
        style={[styles.rectangle18Copy, styles.loginChildLayout]}
        keyboardType="default"
      />
      <Text style={styles.welcomeToCommunityContainer}>
        <Text style={styles.selamatDatang}>{`Selamat Datang `}</Text>
        <Text style={styles.selamatDatang}>di</Text>
        <Text style={styles.halfMarket}>Half Market</Text>
      </Text>
      <Text style={[styles.loginToYour, styles.loginTypo]}>
        Masuk Ke Akun Anda
      </Text>
      <Text
        style={[
          styles.emailmobileNumber,
          styles.passwordTypo,
          styles.passwordTypo1,
        ]}
      >
        Email/Nomer Telefon
      </Text>
      <Text
        style={[styles.password, styles.passwordTypo, styles.passwordTypo1]}
      >
        Password
      </Text>
      <Pressable style={styles.loginItem} accessible="true" />
      <Text style={[styles.login1, styles.loginTypo]}>Masuk</Text>
      <Text style={[styles.forgotYourPassword, styles.passwordTypo]}>
        Lupa Password?
      </Text>
      <Pressable
        style={[styles.dontHaveAnContainer, styles.passwordTypo]}
        onPress={() => navigation.navigate("SignUp")}
      >
        <Text style={styles.belumMemilikiAkun}>{`Belum memiliki akun? `}</Text>
        <Text style={styles.buat}>Buat</Text>
      </Pressable>
      <View style={styles.barsStatusWhite}>
        <View style={[styles.action, styles.timePosition]}>
          <Text style={[styles.time, styles.timePosition]}>9:41</Text>
        </View>
        <Image
          style={styles.containerIcon}
          resizeMode="cover"
          source={require("../assets/container.png")}
        />
      </View>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  loginLayout: {
    height: 812,
    backgroundColor: "#33907c",
  },
  loginChildLayout: {
    borderWidth: 1,
    borderColor: "#fff",
    borderStyle: "solid",
    borderRadius: 24,
    left: "8.53%",
    right: "8.53%",
    width: "82.93%",
    height: "5.91%",
    position: "absolute",
  },
  loginTypo: {
    fontSize: 16,
    textAlign: "left",
    letterSpacing: 0,
    fontFamily: "Montserrat",
    top: "50%",
    position: "absolute",
  },
  passwordTypo: {
    fontSize: 18,
    letterSpacing: 0,
    color: "#fff",
    position: "absolute",
  },
  passwordTypo1: {
    left: "12.8%",
    fontSize: 18,
    textAlign: "left",
    fontFamily: "Montserrat",
    top: "50%",
  },
  timePosition: {
    width: 54,
    top: "50%",
    position: "absolute",
  },
  rectangle: {
    top: 812,
    width: 375,
    left: 0,
    position: "absolute",
  },
  loginChild: {
    top: "41.01%",
    bottom: "53.08%",
  },
  rectangle18Copy: {
    top: "48.89%",
    bottom: "45.2%",
  },
  selamatDatang: {
    marginBlockStart: 0,
    marginBlockEnd: 0,
  },
  halfMarket: {
    margin: 0,
  },
  welcomeToCommunityContainer: {
    marginTop: -233,
    left: "23.73%",
    fontSize: 24,
    letterSpacing: -1,
    textAlign: "center",
    color: "#fff",
    fontFamily: "Montserrat",
    fontWeight: "500",
    top: "50%",
    position: "absolute",
  },
  loginToYour: {
    marginTop: -138,
    left: "27.73%",
    textAlign: "left",
    letterSpacing: 0,
    color: "#fff",
  },
  emailmobileNumber: {
    marginTop: -60,
  },
  password: {
    marginTop: 4,
  },
  loginItem: {
    top: "59.48%",
    bottom: "34.61%",
    backgroundColor: "#fff",
    borderRadius: 24,
    left: "8.53%",
    right: "8.53%",
    width: "82.93%",
    height: "5.91%",
    position: "absolute",
  },
  login1: {
    marginTop: 92,
    left: "44.27%",
    color: "#13b58c",
    textAlign: "left",
    letterSpacing: 0,
    fontWeight: "500",
  },
  forgotYourPassword: {
    marginTop: 157.5,
    left: "31.07%",
    textAlign: "center",
    fontFamily: "Montserrat",
    top: "50%",
  },
  belumMemilikiAkun: {
    fontFamily: "Montserrat",
  },
  buat: {
    fontWeight: "600",
    fontFamily: "Montserrat",
  },
  dontHaveAnContainer: {
    top: 631,
    left: 73,
    textAlign: "left",
  },
  time: {
    marginTop: -9,
    fontSize: 15,
    lineHeight: 18,
    fontFamily: "SF Pro Text",
    fontWeight: "600",
    letterSpacing: 0,
    textAlign: "center",
    color: "#fff",
    left: 0,
  },
  action: {
    marginTop: -8,
    left: 20,
    height: 18,
  },
  containerIcon: {
    marginTop: -4.84,
    right: 15,
    width: 67,
    height: 12,
    top: "50%",
    position: "absolute",
  },
  barsStatusWhite: {
    height: "5.42%",
    top: "0%",
    right: "0%",
    bottom: "94.58%",
    left: "0%",
    position: "absolute",
    width: "100%",
  },
  login: {
    flex: 1,
    overflow: "hidden",
    width: "100%",
  },
});

export default Login;
