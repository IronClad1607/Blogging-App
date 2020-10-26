import React, { useState } from "react";
import { View, Text, StyleSheet, TextInput, Button } from "react-native";

const BlogPostForm = ({onSubmit}) => {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  return (
    <View>
      <Text style={styles.label}>Enter Title:</Text>
      <TextInput
        style={styles.textInput}
        value={title}
        onChangeText={(text) => setTitle(text)}
      />
      <Text style={styles.label}>Enter Content:</Text>
      <TextInput
        style={styles.textInput}
        value={content}
        onChangeText={(text) => setContent(text)}
      />

      <Button
        title="Save Blog Post"
        onPress={() => onSubmit(title,content)}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  textInput: {
    fontSize: 18,
    borderWidth: 1,
    borderColor: "black",
    marginBottom: 15,
    padding: 5,
    margin: 5,
  },
  label: {
    fontSize: 20,
    marginBottom: 5,
    marginStart: 5,
  },
});

export default BlogPostForm;
