import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React from "react";
import { MaterialCommunityIcons } from "@expo/vector-icons";

const FabComponent = ({ onPress }) => {
  return (
    <View style={styles.container}>
      <TouchableOpacity
        activeOpacity={0.7}
        onPress={onPress}
        style={styles.touchableOpacityStyle}
      >
        {/* <Image
          source={{
            uri: "https://raw.githubusercontent.com/AboutReact/sampleresource/master/plus_icon.png",
          }}
          style={styles.floatingBtnStyle}
        /> */}
        <MaterialCommunityIcons name="feather" color="white" size={28} />
      </TouchableOpacity>
    </View>
  );
};

export default FabComponent;

const styles = StyleSheet.create({
  container: {
    // alignItems: "flex-end",
  },
  floatingBtnStyle: {
    resizeMode: "contain",
    width: 50,
    height: 50,
    //backgroundColor:'black'
  },
  touchableOpacityStyle: {
    position: "absolute",
    width: 60,
    height: 60,
    alignItems: "center",
    justifyContent: "center",
    right: 30,
    bottom: 30,
    borderRadius: 30,
    backgroundColor: "orange",
  },
});
