import useTextInputValidation from "@/hooks/useTextInputValidation";
import { View, Text } from "react-native";

export default function HowToUseHookTheWrongWay() {
  return (
    <View>
      <Text>How to use hook the wrong way</Text>
      {Array.from({ length: 10 }).map((_, index) => {
        return <Text key={index}>{index}</Text>;
      })}
    </View>
  );
}
