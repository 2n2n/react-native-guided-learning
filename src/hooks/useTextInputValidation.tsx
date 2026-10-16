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
    if (_inputText.trim() === "") {
      setInputTextError(`Task ${fieldName} is required`);
      return false;
    } else {
      setInputTextError("");
      return true;
    }
  };

  return { inputText, setInputText, inputTextError, validateInputText };
}
