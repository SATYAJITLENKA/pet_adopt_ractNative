import { Image, Pressable, StyleSheet, Text, View } from "react-native";
import Colors from "@/constants/Colors";
import { StatusBar } from 'expo-status-bar';
import { router } from "expo-router";

export default function Index() {
  return (
    <View>
      <StatusBar style="dark" />
      <Image
        style={Styles.img}
        source={require("./../assets/images/login.png")}
      />
      <View style={Styles.flexBox}>
        <Text style={Styles.textOne}>Ready to meet a new friend?</Text>
        <Text style={Styles.textTwo}>
          Let's adopt the pet which you like and make there like happy again
        </Text>
        <Pressable style={Styles.press} onPress={()=>router.push('/login')}>
          <Text style={Styles.textThree}>Get Started</Text>
        </Pressable>
      </View>
    </View>
  );
}
const Styles = StyleSheet.create({
  img: {
    width: "100%",
    height: 500,
  },
  flexBox: {
    display: "flex",
    alignItems: "center",
    padding: 20,
  },
  textOne: {
    textAlign: "center",
    fontFamily: "outfit-bold",
    fontSize: 30,
    margin: "auto",
  },
  textTwo: {
    fontSize: 18,
    fontFamily: "outfit",
    textAlign: "center",
    color: Colors.GRAY,
  },
  press: {
    padding: 14,
    marginTop: 100,
    backgroundColor: Colors.PRIMARY,
    width: "100%",
    borderRadius: 14,
  },
  textThree: {
    fontFamily: "outfit-medium",
    fontSize: 20,
    textAlign: "center",
  },
});
