import { useCallback, useEffect, useState } from "react";

export const useTextWriter = (text: string): [string, () => void] => {
  const [typedText, setTypedText] = useState("");

  useEffect(() => {
    const timeout = setTimeout(() => {
      setTypedText(text.slice(0, typedText.length + 1));
    }, 10);

    return () => clearTimeout(timeout);
  }, [text, typedText]);

  const resetTypedText = useCallback(() => {
    setTypedText("");
  }, []);

  return [typedText, resetTypedText];
};
