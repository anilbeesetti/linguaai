import { useState } from "react";
import InputsCard from "../../components/InputsCard";
import PrimaryButton from "../../components/PrimaryButton";
import StyledOption from "../../components/StyledOption";
import { OptionType } from "../../types/Types";
import { useSummarizeData } from "./hooks/useSummarizeData";
import TextareaAutosize from "react-textarea-autosize";

type Props = {};

const getNumberOptions = () => {
  const options: OptionType[] = [];
  for (var i = 1; i <= 20; i++) {
    const val = i.toString();
    options.push({ title: val, value: val });
  }
  return options;
};

const TextSummarizePage = (props: Props) => {
  const [text, setText] = useState("");
  const [sentenceCount, setSentenceCount] = useState("3");

  const summarize = useSummarizeData();

  const MAX_LENGTH = 2000;

  const handleTextInput = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setText(e.target.value.slice(0, MAX_LENGTH));
  };

  const handleSummarize = () => {
    if (!text.trim()) return;
    summarize.mutate({ sentenceCount, text });
  };

  return (
    <div className="px-4 py-5 flex flex-col md:flex-row md:py-8 gap-5 container mx-auto items-start max-w-6xl">
      <InputsCard
        title="Summarize Text"
        subTitle="write your text below"
        icon={
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-5 h-5"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M3 4.5h14.25M3 9h9.75M3 13.5h9.75m4.5-4.5v12m0 0l-3.75-3.75M17.25 21L21 17.25"
            />
          </svg>
        }
      >
        <StyledOption
          label="Current Language"
          id="current_language"
          defaultValue=""
          options={getNumberOptions()}
          value={sentenceCount}
          onChange={(e) => setSentenceCount(e.target.value)}
        />
        <label className="font-medium text-sm mt-5 mb-3 block">
          Current Text
        </label>
        <TextareaAutosize
          className="w-full text-gray-900 bg-white border border-gray-200 text-sm rounded-md focus:outline-none p-2 resize-none"
          minRows={3}
          placeholder="Hello world"
          value={text}
          onChange={handleTextInput}
          spellCheck={false}
        />
        <p className=" text-end text-xs text-gray-400">{`${text.length}/${MAX_LENGTH} characters`}</p>
        <PrimaryButton className="block" onClick={handleSummarize}>
          Summarize
        </PrimaryButton>
      </InputsCard>
    </div>
  );
};

export default TextSummarizePage;
