import { FlatList, StyleSheet, Text, TextInput, View } from "react-native";
import React from "react";
import { useNavigation } from "@react-navigation/native";
import { Entypo, Ionicons, MaterialCommunityIcons } from "@expo/vector-icons";
import LinkCardComponent from "./components/linkCardComponent";
import FabComponent from "./components/fabComponent";

import { useDispatch, useSelector } from "react-redux";
import { removeLink, updateLink } from "../../redux/slices/linksSlice";

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
  const [focused, setFocused] = React.useState(false);
  const [searchTerm, setSearchTerm] = React.useState(null);
  const navigation = useNavigation();
  const dispatch = useDispatch();
  const { count, links, creationDate } = useSelector((state) => state.links);

  function handleEditLink(id: number) {
    // setEditItem(item);
    dispatch(updateLink(id));
    navigation.navigate("Link Detail", {
      url: links.address,
      editor: true,
    });
  }

  function handleRemoveLink(id: number) {
    // setEditItem(item);
    dispatch(removeLink(id));
  }

  return (
    <View style={styles.container}>
      {count === 0 ? (
        <View
          style={{ justifyContent: "center", alignItems: "center", padding: 8 }}
        >
          <Text
            style={{
              fontSize: 26,
              color: "#bcbcbc",
              padding: 12,
              // paddingBottom: "90%",
            }}
          >
            Add some Links here..
          </Text>
          <MaterialCommunityIcons
            name="clipboard-plus-outline"
            size={48}
            color="orange"
            onPress={() => navigation.navigate("Link Detail", { url: "" })}
          />
        </View>
      ) : (
        <View style={styles.containingView}>
          <View style={styles.inputView}>
            <Ionicons name="search" size={24} />
            <TextInput
              placeholder="Search"
              style={styles.input}
              value={links}
              onChangeText={(q) => {
                q.length > 0 ? setFocused(true) : setFocused(false);
              }}
            />
            {focused ? (
              <Entypo name="cross" size={20} style={styles.cross} />
            ) : null}
          </View>
          <View
            style={{
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Text>
              You have {count} {count === 1 ? "link" : "links"}
            </Text>
          </View>
          <FlatList
            style={{ marginTop: 12 }}
            data={links}
            renderItem={({ item }) => (
              <LinkCardComponent
                linkText={item.address}
                onEditPress={() => handleEditLink(item.id)}
                onDelPress={() => handleRemoveLink(item.id)}
                createdAt={creationDate}
              />
            )}
            keyExtractor={(item) => item.id.toString()}
          />
          <View style={{ alignSelf: "flex-end" }}>
            <FabComponent
              onPress={() => navigation.navigate("Link Detail", { url: "" })}
            />
          </View>
        </View>
      )}
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
  containingView: {
    flexDirection: "column",
    // justifyContent: "space-between",
  },
  cross: {
    alignSelf: "center",
    marginLeft: 170,
  },
  input: {
    paddingLeft: 8,
  },
  inputView: {
    flexDirection: "row",
    alignSelf: "center",
    width: 300,
    padding: 14,
    borderRadius: 28,
    marginTop: 6,
    marginBottom: 8,
    backgroundColor: "#e0d6d6",
  },
  txt: {
    // marginTop: "20%",
    fontSize: 36,
  },
});
