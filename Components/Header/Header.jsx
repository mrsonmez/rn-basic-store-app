import { View, FlatList, StyleSheet } from "react-native";
import List from "./List/List";
import { store_data } from "./List/data/data";
import { useSelector } from "react-redux";

export default function Header() {
  const search = useSelector((state) => state.searchItem);
  const filtered = store_data.filter((item) =>
    item.title.toLowerCase().includes(search.toLowerCase())
  );
  const rendered = ({ item }) => {
    return (
      <List
        imgURL={item.imgURL}
        inStock={item.inStock}
        price={item.price}
        title={item.title}
        id={item.id}
      />
    );
  };
  return (
    <View style={styles.container}>
      <FlatList
        data={filtered}
        renderItem={rendered}
        numColumns={2}
        contentContainerStyle={{ paddingBottom: 150 }}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#fff",
  },
});
