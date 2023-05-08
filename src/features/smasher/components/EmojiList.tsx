import { useState } from "react";
import { FlatList, Image, Platform, Pressable, StyleSheet } from "react-native";

export default function EmojiList({ onSelect, onCloseModal }) {
  const [emoji] = useState([
    require("../../../assets/images/exclamation-heart.png"),
    require("../../../assets/images/face-tongue.png"),
    require("../../../assets/images/fire-shape.png"),
    require("../../../assets/images/flying-money.png"),
    require("../../../assets/images/heart-broken-love.png"),
    require("../../../assets/images/question-mark.png"),
    require("../../../assets/images/smiley.png"),
    require("../../../assets/images/smiling-face-sunglasses.png"),
    require("../../../assets/images/tick-check.png"),
    require("../../../assets/images/wink.png"),
  ]);

  return (
    <FlatList
      horizontal
      showsHorizontalScrollIndicator={Platform.OS === "web" ? true : false}
      data={emoji}
      contentContainerStyle={styles.listContainer}
      renderItem={({ item, index }) => {
        return (
          <Pressable
            onPress={() => {
              onSelect(item);
              onCloseModal();
            }}
          >
            <Image source={item} key={index} style={styles.image} />
          </Pressable>
        );
      }}
    />
  );
}

const styles = StyleSheet.create({
  listContainer: {
    borderTopRightRadius: 10,
    borderTopLeftRadius: 10,
    paddingHorizontal: 20,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  image: {
    width: 100,
    height: 100,
    marginRight: 20,
  },
});
