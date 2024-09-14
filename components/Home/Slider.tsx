import {
  Dimensions,
  FlatList,
  Image,
  StyleSheet,
  Text,
  View,
} from "react-native";
import React from "react";

const petData = [
  {
    id: 1,
    image:
      "https://img.freepik.com/free-psd/banner-theme-with-pet-adoption-concept_23-2148544104.jpg?size=626&ext=jpg&ga=GA1.1.76980944.1725532245&semt=ais_hybrid",
  },
  {
    id: 2,
    image:
      "https://img.freepik.com/premium-photo/pet-shop-banner-happy-pets-colorful-graphics-engaging-layout-bold-text-welcoming-feel-high-detail-lively_880763-20092.jpg?size=626&ext=jpg&ga=GA1.1.76980944.1725532245&semt=ais_hybrid",
  },
  {
    id: 3,
    image:
      "https://img.freepik.com/free-psd/adopt-pet-banner-template_23-2148564872.jpg?size=626&ext=jpg&ga=GA1.1.76980944.1725532245&semt=ais_hybrid",
  },
];
const Slider = () => {
  return (
    <View style={{marginTop:20}}>
      <FlatList
        horizontal={true}
        showsHorizontalScrollIndicator={false}
        data={petData}
        renderItem={({ item, index }) => (
          <View>
            <Image style={styles.img} source={{ uri: item.image }} />
          </View>
        )}
      />
    </View>
  );
};

export default Slider;

const styles = StyleSheet.create({
  img: {
    height: 170,
    width: Dimensions.get("screen").width * 0.9,
    borderRadius: 15,
    marginRight: 15,
  },
});
