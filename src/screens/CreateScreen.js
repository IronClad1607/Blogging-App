import React, { useContext } from "react";
import { View, Text, StyleSheet,TextInput } from "react-native";
import { Context as BlogContext } from "../context/BlogContext";

const CreateScreen = () => {
  return (
    <View>
      <Text>Enter Title:</Text>
      <TextInput/>
      <Text>Enter Content:</Text>
      <TextInput/>
    </View>
  );
};

const styles = StyleSheet.create({});

export default CreateScreen;
