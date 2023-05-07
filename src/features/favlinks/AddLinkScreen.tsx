import {
  Alert,
  Pressable,
  StyleSheet,
  Text,
  TextInput,
  View,
} from "react-native";
import React, { useState } from "react";
import { useDispatch } from "react-redux";

import { newLink, updateLink } from "../../redux/slices/linksSlice";

//const AddLinkScreen = ({ editItem, setEditItem }) => {
const AddLinkScreen = ({ editItem, route }) => {
  const [address, setAddress] = useState<string>();
  const [secret, setSecret] = useState<string>();
  const [desc, setDescription] = useState<string>();

  const { url, editor } = route.params;

  const dispatch = useDispatch();

  function handleSubmit() {
    if (!editItem) {
      if (!address) {
        Alert.alert("Info", "Please, enter a valid web address!");
        return;
      }
      dispatch(newLink(address));
      setAddress("");
      //  setEditItem();
    } else {
      dispatch(updateLink(editItem));
      setAddress("");
      // setEditItem();
    }
  }

  return (
    <View style={styles.container}>
      <Text>{!editor ? <Text>Add Link</Text> : <Text>Edit Link</Text>}</Text>
      <TextInput
        placeholder="Enter web address"
        autoCapitalize="none"
        keyboardType="email-address"
        style={styles.input}
        value={editor ? url : address}
        // onChangeText={(textdata) => {
        //   !editItem
        //     ? setText(textdata)
        //     : setEditItem({ ...editItem, text: textdata });
        // }}
        onChangeText={(textdata) => {
          setAddress(textdata);
        }}
      />
      <TextInput
        placeholder="Enter secret"
        style={styles.input}
        value={secret}
        onChangeText={() => {}}
      />
      <TextInput
        placeholder="Enter description"
        multiline={true}
        style={styles.input}
        value={desc}
        onChangeText={(textdata) => {}}
      />

      <Pressable onPress={handleSubmit} style={styles.button}>
        <Text style={styles.btnText}>{!editor ? "Add Link" : "Edit Link"}</Text>
      </Pressable>
    </View>
  );
};

export default AddLinkScreen;

const styles = StyleSheet.create({
  btnText: {
    color: "#fff",
    fontWeight: "bold",
    textAlign: "center",
    top: 4,
  },
  button: {
    width: 100,
    height: 40,
    marginTop: 16,
    backgroundColor: "orange",
    borderRadius: 8,
    padding: 6,
  },
  container: {
    // flex: 1,
    backgroundColor: "#fff",
    padding: 12,
    height: "80%",
    justifyContent: "center",
    alignItems: "center",
    marginTop: 28,
  },
  input: {
    width: 250,
    height: 48,
    padding: 10,
    marginTop: 8,
    // marginBottom: 10,
    borderRadius: 8,
    backgroundColor: "#e8e8e8",
  },
});
