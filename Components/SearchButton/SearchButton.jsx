import { View, TextInput } from "react-native";
import React from "react";
import styles from "./SearchButton.style";
import { useDispatch, useSelector } from "react-redux";
import { changeSearch } from "../../redux/slice/storeSlice";
import { useState } from "react";
export default function SearchButton() {
  const [inputText, setInputText] = useState("");
  const search = useSelector((state) => state.searchItem);
  const dispatch = useDispatch();
  return (
    <View style={styles.container}>
      <TextInput
        onChangeText={(text) => dispatch(changeSearch(text))}
        style={styles.input}
        placeholder="Ara..."
      />
    </View>
  );
}
