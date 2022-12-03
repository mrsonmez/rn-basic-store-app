import { View, Text, StyleSheet, Image, Dimensions } from "react-native";
const dimen = Dimensions.get("window");
export default function List({ id, imgURL, title, inStock, price }) {
  return (
    <View style={id != 10 ? styles.container : styles.lastImageContainer}>
      <Image
        style={id != 10 ? styles.image : styles.lastImage}
        source={{ uri: imgURL }}
      />
      <Text style={styles.title}>{title}</Text>
      <Text style={styles.price}>{price}</Text>
      <Text style={styles.inStock}>{inStock ? "" : "STOKTA YOK"}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 10,
    backgroundColor: "#eceff1",
    maxWidth: 200,
    width: "46%",
    borderRadius: 10,
    height: dimen.height * 0.42,
    margin: 8,
  },
  image: {
    height: dimen.height * 0.27,
    width: dimen.width * 0.4,
    borderRadius: 10,
    alignSelf: "center",
    resizeMode: "contain",
  },
  title: {
    fontSize: 18,
    fontWeight: "bold",
  },
  inStock: {
    color: "red",
    fontSize: 14,
    fontWeight: "600",
  },
  price: {
    fontSize: 16,
  },
  lastImageContainer: {
    paddingTop: 10,
    width: "95%",
    marginLeft: 10,
    marginBottom: 10,
    padding: 10,
    height: Dimensions.get("window").height * 0.4,
    borderRadius: 15,
    backgroundColor: "#e6e6e6",
  },
  lastImage: {
    width: "100%",
    backgroundColor: "white",
    borderRadius: 10,
    height: Dimensions.get("window").height * 0.27,
    alignSelf: "center",
    resizeMode: "contain",
  },
});
