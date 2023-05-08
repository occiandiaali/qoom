import { Image, Pressable, StyleSheet, Text, View } from "react-native";
import React, { useRef, useState } from "react";
import * as ImagePicker from "expo-image-picker";
import TopBarComponent from "./components/TopBarComponent";
import ActionButtonComponent from "./components/ActionButtonComponent";
import StickerModal from "./components/StickerModal";
import ImageViewer from "./components/ImageViewer";
import EmojiList from "./components/EmojiList";
import EmojiSticker from "./components/EmojiSticker";
import EmojiPicker from "./components/EmojiPicker";

const StickerSmashScreen = () => {
  const [showAppOptions, setShowAppOptions] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [pickedEmoji, setPickedEmoji] = useState(null);
  const [showEmojiPicker, setShowEmojiPicker] = useState(false);
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const sheetRef = useRef(null);

  const pickImageAsync = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      allowsEditing: true,
      quality: 1,
    });
    if (!result.canceled) {
      setSelectedImage(result.assets[0].uri);
      setShowAppOptions(true);
      // console.log(result)
    } else {
      alert("No image selected!");
    }
  };

  function onReset() {
    setShowAppOptions(false);
  }
  function onAddSticker() {
    setShowEmojiPicker(true);
  }
  function stickersVisible() {
    setShowEmojiPicker(false);
  }

  const onSaveImageAsync = async () => {};

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
      <TopBarComponent onPress={openBS} />
      <ImageViewer
        placeholderImageSource={
          "https://images.pexels.com/photos/11432837/pexels-photo-11432837.jpeg?auto=compress&cs=tinysrgb&w=400&lazy=load"
        }
        selectedImage={selectedImage}
      />
      {pickedEmoji !== null ? (
        <EmojiSticker imageSize={40} stickerSource={pickedEmoji} />
      ) : null}
      <View style={styles.actionContainer}>
        {showAppOptions ? (
          <View style={{ flexDirection: "row" }}>
            <Pressable onPress={onReset}>
              <Text style={{ paddingRight: 18 }}>Reset</Text>
            </Pressable>
            <Pressable onPress={onAddSticker}>
              <Text style={{ paddingRight: 18 }}>Stickers</Text>
            </Pressable>
            <Pressable onPress={onSaveImageAsync}>
              <Text style={{ paddingRight: 18 }}>Save</Text>
            </Pressable>
          </View>
        ) : (
          <>
            <ActionButtonComponent onPress={pickImageAsync} />
            <ActionButtonComponent
              onPress={() => setShowAppOptions(true)}
              label="Use this image"
            />
          </>
        )}
      </View>
      <EmojiPicker isVisible={showEmojiPicker} onClose={stickersVisible}>
        <EmojiList onSelect={setPickedEmoji} onCloseModal={stickersVisible} />
      </EmojiPicker>
      {showModal ? (
        <StickerModal modalRef={sheetRef} onPress={closeBS} />
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
  // img: {
  //   width: 340,
  //   height: 500,
  //   bottom: 20,
  //   borderRadius: 24,
  // },
  txt: {
    fontSize: 36,
  },
});
