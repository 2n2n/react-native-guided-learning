import isValidInputText from "@/helpers/is-valid-input-text";
import { useState } from "react";

type useTextInputValidationProps = {
  fieldName: string;
};

export default function useTextInputValidation({
  fieldName = "title",
}: useTextInputValidationProps) {
  const [inputText, setInputText] = useState("");
  const [inputTextError, setInputTextError] = useState("");

  const validateInputText = (_inputText: string) => {
    if (!isValidInputText(_inputText)) {
      setInputTextError(`Task ${fieldName} is required`);
    } else {
      setInputTextError("");
    }
  };

  return { inputText, setInputText, inputTextError, validateInputText };
}
