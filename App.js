import { StyleSheet, View, Text, SafeAreaView } from "react-native";
import { Provider } from "react-redux";
import Header from "./Components/Header/Header";
import SearchButton from "./Components/SearchButton/SearchButton";
import { store } from "./redux/store/store";

export default function App() {
  return (
    <Provider store={store}>
      <SafeAreaView style={styles.container}>
        <Text style={styles.title}>STORE</Text>
        <View>
          <SearchButton />
          <Header />
        </View>
      </SafeAreaView>
    </Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  title: {
    fontSize: 30,
    width: "100%",
    fontWeight: "bold",
    color: "purple",
    marginLeft: 10,
  },
});
