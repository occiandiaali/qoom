import { StyleSheet, Text, View } from "react-native";
import React, { useState } from "react";
import AddLink from "./addLink";

const LinkDetailScreen = () => {
  const [editItem, setEditItem] = useState();
  return (
    <View>
      <AddLink editItem={editItem} setEditItem={setEditItem} />
    </View>
  );
};

export default LinkDetailScreen;

const styles = StyleSheet.create({});
