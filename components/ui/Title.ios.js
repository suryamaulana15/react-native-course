import { StyleSheet, Text, Platform } from "react-native";
import Color from "../../constants/color";

function Title({ children }) {
  return <Text style={styles.title}>{children}</Text>;
}

export default Title;

const styles = StyleSheet.create({
  title: {
    fontSize: 24,
    // fontWeight: "bold",
    fontFamily: "open-sans-bold",
    color: "white",
    textAlign: "center",
    // borderWidth: Platform.select({ iphone: 0, android: 2 }),
    padding: 12,
  },
});
