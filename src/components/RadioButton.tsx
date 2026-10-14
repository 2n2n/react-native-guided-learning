import { useState } from "react";
import { View, StyleSheet, Pressable, Text } from "react-native";

type RadioButtonProps = {
  onSelect: (label: string) => void;
  active: boolean;
  label: string;
};
export default function RadioButton({
  active,
  label,
  onSelect,
}: RadioButtonProps) {
  return (
    <Pressable
      style={styles.pressableContainer}
      onPress={() => {
        onSelect(label);
      }}
    >
      <View style={styles.container}>
        {active && <View style={styles.innerCircle} />}
      </View>
      <Text>{label}</Text>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  pressableContainer: {
    flexDirection: "row",
    padding: 5,
  },
  container: {
    width: 20,
    height: 20,
    borderRadius: "100%",
    borderWidth: 1,
    borderColor: "black",
    justifyContent: "center",
    alignItems: "center",
    marginRight: 5,
  },
  innerCircle: {
    width: 15,
    height: 15,
    borderRadius: "100%",
    backgroundColor: "black",
  },
});
