import { useState } from "react";
import {
  StyleSheet,
  Pressable,
  TextInput,
  View,
  Text,
  Alert,
} from "react-native";

export default function AddTaskField() {
  const [inputText, setInputText] = useState("");
  const handleAddTask = () => {
    Alert.alert("Add task", inputText);
  };
  return (
    <View style={styles.container}>
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
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    padding: 10,
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
});
