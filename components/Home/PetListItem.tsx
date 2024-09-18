import { Image, StyleSheet, Text, View } from "react-native";
import React from "react";
import Colors from "@/constants/Colors";

const PetListItem = ({ pet }) => {
  
  return (
    <View style={{marginRight:12 , marginTop:15}}>
      <View style={styles.container}>
        <Image
          style={styles.img}
          source={{
            uri: pet?.image,
          }}
        />
        <Text style={styles.name}>Oreao</Text>
        <View
          style={{
            display: "flex",
            justifyContent: "space-between",
            flexDirection: "row",
          }}
        >
          <Text style={{ color: Colors.GRAY, fontFamily: "outfit" }}>
            {pet?.name}
          </Text>
          <Text
            style={{
              fontFamily: "outfit",
              color: Colors.PRIMARY,
              padding: 4,
              backgroundColor: Colors.PRIMARY_LIGHT,
              fontSize: 11,
              borderRadius: 10,
            }}
          >
            {pet?.yr} YER
          </Text>
        </View>
      </View>
    </View>
  );
};

export default PetListItem;

const styles = StyleSheet.create({
  name: {
    fontSize: 18,
    fontFamily: "outfit-medium",
  },
  container: {
    padding: 15,
    backgroundColor: "white",
    borderRadius: 10,
    width: "100%",
  },
  img: {
    height: 135,
    width: 150,
    objectFit: "cover",
    borderRadius: 10,
  },
});
