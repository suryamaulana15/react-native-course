import { View, StyleSheet } from "react-native";
import Color from "../../constants/color";

function Card({ children }) {
  return <View style={styles.inputContainer}>{children}</View>;
}

export default Card;

const styles = StyleSheet.create({
  inputContainer: {
    justifyContent: "center",
    alignItems: "center",
    marginTop: 24,
    marginHorizontal: 24,
    padding: 16,
    backgroundColor: Color.primary700,
    borderRadius: 6,
    elevation: 4,
    shadowColor: "black",
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 6,
    shadowOpacity: 0.25,
  },
});
