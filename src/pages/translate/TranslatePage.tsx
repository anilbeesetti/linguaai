import React, { useState } from "react";
import StyledOption from "../../components/StyledOption";
import TextareaAutosize from "react-textarea-autosize";
import PrimaryButton from "../../components/PrimaryButton";
import InputsCard from "../../components/InputsCard";
import { useTranslationLanguagesData } from "./hooks/useTranslationLanguagesData";
import { useTranslateTextData } from "./hooks/useTranslateTextData";
import { TypeWriterText } from "../../components/TypeWriterText";
import ResultCard from "../../components/ResultCard";

type Props = {};

const TranslatePage = (props: Props) => {
  const [text, setText] = useState("");
  const [currentLanguage, setCurrentLanguage] = useState("");
  const [translateToLanguage, setTranslateToLanguage] = useState("");

  const MAX_LENGTH = 2000;
  const { data: languageOptions } = useTranslationLanguagesData();
  const translate = useTranslateTextData();

  const handleTextInput = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setText(e.target.value.slice(0, MAX_LENGTH));
  };

  const handleTranslate = () => {
    if (!translateToLanguage || !text.trim()) return;
    translate.mutate({ currentLanguage, translateToLanguage, text });
  };

  return (
    <div className="px-4 py-5 flex flex-col md:flex-row md:py-8 gap-5 container mx-auto items-start max-w-6xl">
      <InputsCard
        title="Current Text"
        subTitle="write the text you want to translate below"
      >
        <StyledOption
          label="Current Language"
          id="current_language"
          defaultValue="Auto detect"
          options={languageOptions}
          onChange={(e) => setCurrentLanguage(e.target.value)}
        />
        <StyledOption
          label="Translate To"
          id="translate_to"
          defaultValue="Select a language to translate"
          options={languageOptions}
          onChange={(e) => setTranslateToLanguage(e.target.value)}
        />
        <label className="font-medium text-sm mt-5 mb-3 block">
          Current Text
        </label>
        <TextareaAutosize
          className="w-full text-gray-900 bg-gray-50 border border-gray-200 text-sm rounded-md focus:outline-none p-2 resize-none"
          minRows={3}
          placeholder="Hello world"
          value={text}
          onChange={handleTextInput}
          spellCheck={false}
        />
        <p className=" text-end text-xs text-gray-400">{`${text.length}/${MAX_LENGTH} characters`}</p>
        <PrimaryButton className="block" onClick={handleTranslate}>
          Translate
        </PrimaryButton>
      </InputsCard>
      <ResultCard
        isLoading={translate.isLoading}
        isError={translate.isError}
        isSuccess={translate.isSuccess}
        error={translate.error?.message!!}
        title="Translated Text"
        subtitle="The following code is translated"
        effect={true}
      >
        {translate.data &&
          translate.data[0].translations.map((translation) => (
            <div className="flex space-x-2 mt-6">
              {translate.data[0].translations.length > 1 && (
                <p className="text-gray-90 text-sm font-medium mt-1">
                  {translation.to.toUpperCase()}:-
                </p>
              )}
              <TypeWriterText text={translation.text} />
            </div>
          ))}
      </ResultCard>
    </div>
  );
};

export default TranslatePage;
