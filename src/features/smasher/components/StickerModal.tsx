import { StyleSheet, Text, View } from "react-native";
import React from "react";
import BottomSheet from "@gorhom/bottom-sheet";
import { FontAwesome, MaterialCommunityIcons } from "@expo/vector-icons";

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
        <View
          style={{
            flexDirection: "row",
            justifyContent: "flex-end",
            right: 12,
          }}
        >
          <FontAwesome name="close" size={24} onPress={onPress} />
        </View>
        <View style={{ marginTop: 28 }}>
          <View style={{ flexDirection: "row", padding: 8 }}>
            <FontAwesome name="share-alt" size={32} />
            <Text
              style={{
                paddingLeft: 25,
                fontSize: 24,
                textAlignVertical: "center",
              }}
            >
              Share with public
            </Text>
          </View>
          <View style={{ flexDirection: "row", padding: 8 }}>
            <MaterialCommunityIcons name="facebook-messenger" size={32} />
            <Text
              style={{
                paddingLeft: 25,
                fontSize: 24,
                textAlignVertical: "center",
              }}
            >
              Send in chat
            </Text>
          </View>
          <View style={{ flexDirection: "row", padding: 8 }}>
            <MaterialCommunityIcons name="google-lens" size={32} />
            <Text
              style={{
                paddingLeft: 25,
                fontSize: 24,
                textAlignVertical: "center",
              }}
            >
              Google lens image
            </Text>
          </View>
        </View>
      </View>
    </BottomSheet>
  );
};

export default StickerModal;

const styles = StyleSheet.create({});
