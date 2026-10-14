import { useState, useEffect } from "react";
import { StyleSheet, View } from "react-native";
import RadioButton from "./RadioButton";

type RadioButtonGroupProps = {
  activeLabel: string | null;
  onSelect: (label: string) => void;
  labels: string[];
};

export default function RadioButtonGroup({
  activeLabel,
  onSelect,
  labels,
}: RadioButtonGroupProps) {
  return (
    <View style={styles.container}>
      {labels.map((_label) => (
        <RadioButton
          onSelect={(label) => onSelect(label)}
          active={activeLabel === _label}
          label={_label}
          key={_label}
        />
      ))}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
  },
});
