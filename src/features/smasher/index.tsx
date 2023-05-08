import { Image, StyleSheet, View } from "react-native";
import React, { useMemo, useRef, useState } from "react";
import Animated from "react-native-reanimated";

import { RenderContent } from "./components/renderContent";
import TopBarComponent from "./components/TopBarComponent";
import ActionButtonComponent from "./components/ActionButtonComponent";
import StickerModal from "./components/StickerModal";

const StickerSmashScreen = () => {
  const sheetRef = useRef(null);
  const snapPoints = useMemo(() => ["25%", "50%"], []);
  // const fall = new Animated.Value(1);
  const [showModal, setShowModal] = useState(false);

  function handleBS() {}
  function openBS() {
    if (showModal !== true) {
      setShowModal(true);
      sheetRef.current?.snapTo(0);
    } else {
      setShowModal(false);
    }
  }
  function closeBS() {
    if (showModal === true) {
      setShowModal(false);
    }
  }

  return (
    <View style={styles.container}>
      <TopBarComponent onPress={() => openBS()} />
      <Image
        source={{
          uri: "https://images.pexels.com/photos/11432837/pexels-photo-11432837.jpeg?auto=compress&cs=tinysrgb&w=400&lazy=load",
        }}
        style={styles.img}
      />
      <View style={styles.actionContainer}>
        <ActionButtonComponent onPress={() => null} />
        <ActionButtonComponent onPress={() => null} label="Use this image" />
      </View>
      {showModal ? (
        <StickerModal modalRef={sheetRef} onPress={() => closeBS()} />
      ) : null}
    </View>
  );
};

export default StickerSmashScreen;

const styles = StyleSheet.create({
  actionContainer: {
    flexDirection: "row",
    justifyContent: "space-around",
    marginTop: 8,
  },
  container: {
    flex: 1,
    backgroundColor: "white",
    justifyContent: "center",
    alignItems: "center",
  },
  img: {
    width: 340,
    height: 500,
    bottom: 20,
    borderRadius: 24,
  },
  txt: {
    fontSize: 36,
  },
});
