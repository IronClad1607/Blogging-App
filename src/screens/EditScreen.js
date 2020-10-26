import React, { useContext } from "react";
import { StyleSheet } from "react-native";
import { Context as BlogContext } from "../context/BlogContext";
import BlogPostForm from "../components/BlogPostForm";

const EditScreen = ({ navigation }) => {
  const blogID = navigation.getParam("id");

  const { state } = useContext(BlogContext);
  const blogPost = state.find((blogPost) => blogPost.id === blogID);

  return <BlogPostForm />;
};

const styles = StyleSheet.create({});

export default EditScreen;
