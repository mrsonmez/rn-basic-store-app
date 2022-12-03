import { View, TextInput } from "react-native";
import styles from "./SearchButton.style";
import { useDispatch } from "react-redux";
import { changeSearch } from "../../redux/slice/storeSlice";
export default function SearchButton() {
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
