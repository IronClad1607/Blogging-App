import React, { useContext } from "react";
import { Text, StyleSheet, View } from "react-native";
import { Context as BlogContext } from "../context/BlogContext";

const ShowScreen = ({ navigation }) => {
  const { state } = useContext(BlogContext);
  const blogID = navigation.getParam('id');

  const blogPost = state.find((blogPost) => blogPost.id === blogID)


  return (
    <View>
      <Text>{blogPost.title}</Text>
    </View>
  );
};

const styles = StyleSheet.create({});

export default ShowScreen;
