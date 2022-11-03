import { useEffect } from "react";
import { useTextWriter } from "../hooks/useTextWriter";

type TypeWriterTextProps = {
  text: string;
};
export const TypeWriterText = ({ text }: TypeWriterTextProps) => {
  const [typedText, resetTypedText] = useTextWriter(text);

  useEffect(() => {
    resetTypedText();
  }, [text]);

  return (
    <div className="w-full text-gray-90 text-sm leading-6">{typedText}</div>
  );
};
