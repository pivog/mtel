import { Image, StyleSheet, Platform, View, Text} from 'react-native';
import { useFonts } from "expo-font";
import AppLoading from "expo-app-loading";
import {styles} from "../styles";

export function LogInScreen() {
  let [fontsLoaded] = useFonts({"Roboto-Bold": require("../../assets/fonts/Roboto-Bold.ttf"),
    "Roboto-Thin": require("../../assets/fonts/Roboto-Thin.ttf"),
  });

  if (!fontsLoaded) {
    return <AppLoading />;
  }
  return (
    <View style = {styles.container}>
      <Text style = {styles.settingsH1}>Login</Text>
      <Text style = {styles.textH2}>Welcome back</Text>
    </View>
)};