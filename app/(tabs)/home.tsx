import { StyleSheet, Text, View } from "react-native";
import React from "react";
import Header from "@/components/Home/Header";
import Slider from "@/components/Home/Slider";
import Category from "@/components/Home/Category";

const home = () => {
  return (
    <View style={styles.box}>
      {/* Header  */}
      <Header />

      {/* Slider  */}
      <Slider/>

      {/* Category  */}
      <Category/>

      {/* List of pets  */}

      {/* Add New Pet options  */}
    </View>
  );
};

export default home;

const styles = StyleSheet.create({
  box: {
    padding: 10,
    marginTop: 30,
  },
});
