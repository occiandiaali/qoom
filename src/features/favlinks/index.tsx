import { FlatList, StyleSheet, Text, View } from "react-native";
import React from "react";
import { useNavigation } from "@react-navigation/native";
import LinkCardComponent from "./components/linkCardComponent";
import FabComponent from "./components/fabComponent";

import { useDispatch, useSelector } from "react-redux";
import { editLink } from "../../redux/slices/linksSlice";

const times = [
  {
    id: 1,
    time: "05/06/2023",
  },
  {
    id: 2,
    time: "05/06/2023",
  },
  {
    id: 3,
    time: "11/03/2023",
  },
  {
    id: 4,
    time: "25/02/2023",
  },
  {
    id: 5,
    time: "05/06/2023",
  },
  {
    id: 6,
    time: "05/06/2023",
  },
  {
    id: 7,
    time: "11/03/2023",
  },
  {
    id: 8,
    time: "25/02/2023",
  },
];

const times1: { id: number; time: string }[] = [];

const FavLinksScreen = () => {
  const navigation = useNavigation();
  const dispatch = useDispatch();

  function handleEdit(id) {
    // setEditItem(item);
    dispatch(editLink(id));
    navigation.navigate("linkAdd");
  }

  return (
    <View style={styles.container}>
      {times.length < 1 ? (
        <Text
          style={{
            fontSize: 26,
            color: "#bcbcbc",
            padding: 12,
            paddingBottom: "90%",
          }}
        >
          You can add some Links here..
        </Text>
      ) : (
        <FlatList
          style={{ marginTop: 12 }}
          data={times}
          renderItem={({ item }) => (
            <LinkCardComponent
              timeAdded={item.time}
              onMenuPress={() => handleEdit(item.id)}
            />
          )}
          keyExtractor={(item) => item.id.toString()}
        />
      )}
      {/* <View style={{ alignSelf: "flex-end" }}>
        <FabComponent />
      </View> */}
      <View style={{ alignSelf: "flex-end" }}>
        <FabComponent onPress={() => navigation.navigate("linkAdd")} />
      </View>
    </View>
  );
};

export default FavLinksScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: times.length < 1 ? "#fff" : undefined,
    justifyContent: "center",
    alignItems: "center",
    paddingTop: 48,
  },
  txt: {
    // marginTop: "20%",
    fontSize: 36,
  },
});
