import isValidInputText from "@/helpers/is-valid-input-text";
import useTextInputValidation from "@/hooks/useTextInputValidation";
import { db } from "@/libs/firebase";
import { addDoc, collection } from "firebase/firestore";
import { StyleSheet, Pressable, TextInput, View, Text } from "react-native";

export default function AddTaskField() {
  const { inputText, setInputText, inputTextError, validateInputText } =
    useTextInputValidation({ fieldName: "title" });

  return (
    <View style={styles.container}>
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.input}
          placeholder="Add task here"
          value={inputText}
          onChangeText={setInputText}
        />
        <Pressable
          onPress={() => {
            validateInputText(inputText);
            if (isValidInputText(inputText)) {
              addDoc(collection(db, "Tasks"), {
                title: inputText,
                status: "open",
              });
            }
          }}
        >
          <Text style={styles.buttonText}>+</Text>
        </Pressable>
      </View>
      <Text style={styles.errorText}>{inputTextError}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 10,
  },
  inputContainer: {
    flexDirection: "row",
  },
  input: {
    borderWidth: 1,
    borderColor: "gray",
    borderRadius: 5,
    padding: 5,
    flex: 1,
  },
  buttonText: {
    marginLeft: 5,
    borderWidth: 1,
    borderColor: "gray",
    borderRadius: 5,
    flex: 1,
    backgroundColor: "lightgreen",
    width: 50,
    justifyContent: "center",
    alignItems: "center",
    textAlign: "center",
    fontSize: 20,
    fontWeight: "bold",
  },
  errorText: {
    color: "red",
    fontSize: 12,
    marginTop: 5,
  },
});
