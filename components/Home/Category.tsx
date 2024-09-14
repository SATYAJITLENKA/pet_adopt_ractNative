import { FlatList, Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React, { useState } from "react";
import Colors from "@/constants/Colors";
import { TouchableWithoutFeedback } from "react-native-gesture-handler";

const petFace = [
  {
    id: 1,
    name: "Dog",
    face: "https://img.freepik.com/free-vector/cheerful-puppy-with-playful-hat_1308-162476.jpg?ga=GA1.1.76980944.1725532245&semt=ais_hybrid",
  },
  {
    id: 2,
    name: "Cat",
    face: "https://img.freepik.com/free-vector/orange-cat-head-with-striking-blue-eyes_1308-135359.jpg?ga=GA1.1.76980944.1725532245&semt=ais_hybrid",
  },
  {
    id: 3,
    name: "Fish",
    face: "https://img.freepik.com/free-vector/cartoon-cute-anglerfish-blue-color_1308-107961.jpg?ga=GA1.1.76980944.1725532245&semt=ais_hybrid",
  },
  {
    id: 4,
    name: "Bird",
    face: "https://img.freepik.com/premium-vector/cartoon-drawing-bird-with-eyes-blue-shirt_1128391-32979.jpg?ga=GA1.1.76980944.1725532245&semt=ais_hybrid",
  },
];
const Category = () => {
  const [selectCategory, setSelectCategory] = useState(1);
  return (
    <View>
      <Text
        style={{ fontFamily: "outfit-medium", fontSize: 24, marginTop: 15 }}
      >
        Category
      </Text>
      <FlatList
        data={petFace}
        numColumns={4}
        renderItem={({ item }) => (
          <TouchableOpacity onPress={()=>setSelectCategory(item.id)} style={{ flex: 1 }}>
            <View
              style={[
                styles.container,
                selectCategory == item.id && styles.activeCat,
              ]}
            >
              <Image
                source={{ uri: item.face }}
                style={{ height: 40, width: 40 }}
              />
            </View>
            <Text style={{ textAlign: "center", fontFamily: "outfit" }}>
              {item.name}
            </Text>
          </TouchableOpacity>
        )}
      />
    </View>
  );
};

export default Category;

const styles = StyleSheet.create({
  container: {
    backgroundColor: Colors.PRIMARY_LIGHT,
    padding: 15,
    borderWidth: 1,
    borderColor: Colors.PRIMARY,
    borderRadius: 10,
    alignItems: "center",
    margin: 5,
  },
  activeCat: {
    backgroundColor: "#0eaccc",
    borderColor: "#0c5f70",
  },
});
