import { StyleSheet, Text, View } from "react-native";
import React from "react";
import Header from "@/components/Home/Header";
import Slider from "@/components/Home/Slider";
import Category from "@/components/Home/Category";
import PetListByCategory from "@/components/Home/PetListByCategory";
import { MaterialIcons } from "@expo/vector-icons";
import Colors from "@/constants/Colors";

const home = () => {
  return (
    <View style={styles.box}>
      {/* Header  */}
      <Header />

      {/* Slider  */}
      <Slider />

      {/* Category  */}
      {/* List of pets  */}
      <PetListByCategory />

      {/* Add New Pet options  */}
      <View
        style={{
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
          gap: 10,
          padding: 20,
          backgroundColor: Colors.PRIMARY_LIGHT,
          justifyContent: "center",
          borderColor: Colors.PRIMARY,
          borderStyle: "dashed",
          marginTop: 20,
          borderRadius: 15,
          borderWidth: 1,
        }}
      >
        <MaterialIcons name="pets" size={24} color={Colors.PRIMARY} />
        <Text style={{fontSize:18, color:Colors.PRIMARY , fontFamily:'outfit-medium' }}>Add New Pet</Text>
      </View>
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
