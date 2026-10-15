import { Link, useRouter } from "expo-router";
import { useEffect, useState } from "react";
import { View, StyleSheet, Text, Pressable } from "react-native";

export default function App() {
  const router = useRouter();

  return (
    <View style={styles.container}>
      <Pressable style={styles.button} onPress={() => router.push("/tasks")}>
        <Text>Proceed to Tasks</Text>
      </Pressable>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  button: {
    borderWidth: 1,
    borderColor: "#ddd",
    backgroundColor: "transparent",
    paddingVertical: 12,
    paddingHorizontal: 24,
    borderRadius: 8,
    alignItems: "center",
  },
});
