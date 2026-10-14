import { useState } from "react";
import { StyleSheet, Pressable, TextInput, View, Text } from "react-native";

type AddTaskFieldProps = {
  onAddTask: (task: string) => void;
};
export default function AddTaskField({ onAddTask }: AddTaskFieldProps) {
  const [inputText, setInputText] = useState("");
  const [inputTextError, setInputTextError] = useState("");

  const validateInputText = (_inputText: string) => {
    if (_inputText.trim() === "") {
      setInputTextError("Task title is required");
      return false;
    } else {
      setInputTextError("");
      return true;
    }
  };
  const handleAddTask = () => {
    if (!validateInputText(inputText)) {
      return;
    }
    onAddTask(inputText);
    setInputText("");
  };

  return (
    <View style={styles.container}>
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.input}
          placeholder="Add task here"
          value={inputText}
          onChangeText={setInputText}
        />
        <Pressable onPress={handleAddTask}>
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
