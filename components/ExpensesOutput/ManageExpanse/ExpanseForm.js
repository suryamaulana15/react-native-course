import { View } from "react-native";
import Input from "./Input";

function ExpanseForm() {
  function amountChangedHandler() {}

  return (
    <View>
      <Input
        label={"Amount"}
        textInputConfig={{
          keyboardType: "decimal-pad",
          onChangeText: amountChangedHandler,
        }}
      />
      <Input
        label={"Date"}
        textInputConfig={{
          placeholder: "YYYY-MM-DD",
          maxLength: 10,
          onChangeText: () => {},
        }}
      />
      <Input
        label={"Description"}
        textInputConfig={{
          multiline: true,
          // autoCapitalize: 'none', //default: sentence
          // autoCorrect: false //default is true
        }}
      />
    </View>
  );
}

export default ExpanseForm;
