import React from "react";
import { Text, View } from "react-native";
import { FontAwesome } from "@expo/vector-icons";

export const RenderContent = () => (
  <View
    style={{
      backgroundColor: "#fff",
      padding: 16,
      height: 350,
    }}
  >
    <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
      <Text>Swipe downwards to close</Text>
      {/* <FontAwesome name="close" size={24} onPress={() => cross} /> */}
    </View>
  </View>
);
