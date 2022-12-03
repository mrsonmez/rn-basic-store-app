import { Dimensions, StyleSheet } from "react-native";

const styles = StyleSheet.create({
  input: {
    width: Dimensions.get("window").width * 0.96,
    height: Dimensions.get("window").height / 15,
    borderRadius: 7,
    padding: 10,
    backgroundColor: "#eceff1",
    fontWeight: "100",
  },
  container: {
    justifyContent: "center",
    alignItems: "center",
  },
});

export default styles;
