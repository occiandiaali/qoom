import { StyleSheet, Text, View } from "react-native";
import React from "react";
import BottomSheet from "@gorhom/bottom-sheet";
import { FontAwesome } from "@expo/vector-icons";

const StickerModal = ({ modalRef, onPress }) => {
  return (
    <BottomSheet
      ref={modalRef}
      index={1}
      snapPoints={["25%", "50%"]}
      enablePanDownToClose={true}
      onChange={() => null}
    >
      <View
        style={{
          backgroundColor: "#fff",
          padding: 16,
          height: 350,
        }}
      >
        <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
          <Text>Swipe downwards to close</Text>
          <FontAwesome name="close" size={24} onPress={onPress} />
        </View>
      </View>
    </BottomSheet>
  );
};

export default StickerModal;

const styles = StyleSheet.create({});
