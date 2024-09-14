import { Image, StyleSheet, Text, View } from "react-native";
import React from "react";

const Header = () => {
  return (
    <View style={{display:'flex', flexDirection:'row' , justifyContent:'space-between', alignItems:'center'}}>
      <View>
        <Text style={styles.headOne}>Welcome</Text>
        <Text style={styles.headTwo}>Satyajit Lenka</Text>
      </View>
      <Image style={styles.img} source={require('@/assets/images/login.png')}/>
    </View>
  );
};

export default Header;

const styles = StyleSheet.create({
  headOne: {
    fontSize: 18,
    fontFamily: "outfit",
  },
  headTwo: {
    fontSize: 25,
    fontFamily: "outfit-medium",
  },
  img:{
    height:50,
    width:50,
    borderRadius:50
  }
});
