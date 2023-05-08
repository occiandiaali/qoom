import { Image, StyleSheet, Text, View } from "react-native";
import React from "react";

const ImageViewer = ({ placeholderImageSource, selectedImage }) => {
  const imageSource =
    // selectedImage !== null ? { uri: selectedImage } : placeholderImageSource;
    { uri: selectedImage !== null ? selectedImage : placeholderImageSource };
  return <Image source={imageSource} style={styles.image} />;
};

export default ImageViewer;

const styles = StyleSheet.create({
  image: {
    width: 340,
    height: 500,
    bottom: 20,
    borderRadius: 24,
  },
});
