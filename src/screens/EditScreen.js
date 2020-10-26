import React from "react";
import { View, Text, StyleSheet, Button } from "react-native";
import { Context as BlogContext } from "../context/BlogContext";

const EditScreen = ({ navigation }) => {
  const blogID = navigation.getParam("id");
  return (
    <View>
      <Text>Edit Screen - {blogID}</Text>
    </View>
  );
};

const styles = StyleSheet.create({});

export default EditScreen;
