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
import { addLink, editLink } from "../../redux/slices/linksSlice";

const AddLink = ({ editItem, setEditItem }) => {
  const [text, setText] = useState<string>();
  const dispatch = useDispatch();

  function handleSubmit() {
    if (!editItem) {
      if (!text) {
        Alert.alert("Info", "Please, enter a valid web address!");
        return;
      }
      dispatch(addLink(text));
      setText("");
      setEditItem();
    } else {
      dispatch(editLink(editItem));
      setText("");
      setEditItem();
    }
  }

  return (
    <View style={styles.container}>
      <Text>{!editItem ? <Text>Add Link</Text> : <Text>Edit Link</Text>}</Text>
      <TextInput
        placeholder="Enter web address.."
        style={styles.input}
        value={!editItem ? text : editItem.text}
        onChangeText={(textdata) => {
          !editItem
            ? setText(textdata)
            : setEditItem({ ...editItem, text: textdata });
        }}
      />

      <Pressable onPress={handleSubmit} style={styles.button}>
        <Text style={styles.btnText}>
          {!editItem ? "Add Link" : "Update Link"}
        </Text>
      </Pressable>
    </View>
  );
};

export default AddLink;

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
    marginTop: 20,
    marginBottom: 10,
    borderRadius: 8,
    backgroundColor: "#e8e8e8",
  },
});
