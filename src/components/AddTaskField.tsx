import useTextInputValidation from "@/hooks/useTextInputValidation";
import { StyleSheet, Pressable, TextInput, View, Text } from "react-native";

type AddTaskFieldProps = {
  onAddTask: (task: string) => void;
};
export default function AddTaskField({ onAddTask }: AddTaskFieldProps) {
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
            if (!validateInputText(inputText)) {
              return;
            }
            onAddTask(inputText);
            setInputText("");
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
