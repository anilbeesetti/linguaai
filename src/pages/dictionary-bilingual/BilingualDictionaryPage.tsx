import { useState } from "react";
import InputsCard from "../../components/InputsCard";
import { SearchInput } from "../../components/SearchInput";
import StyledOption from "../../components/StyledOption";
import { useDictionaryLanguagesData } from "./hooks/useDictionaryLanguagesData";

const BilingualDictionaryPage = () => {
  const [word, setWord] = useState("");
  const [sourceLanguage, setSourceLanguage] = useState("");
  const [targetLanguage, setTargetLanguage] = useState("");
  const { data } = useDictionaryLanguagesData();

  const MAX_LENGTH = 100;

  const handleTextInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    setWord(e.target.value.trim().slice(0, MAX_LENGTH));
  };

  const getCurrentLanguageOptions = () => {
    return data?.map((dict) => {
      return { title: dict.name, value: dict.code };
    });
  };

  const getDictionaryLanguageOptions = () => {
    const currentDict = data?.find((dict) => dict.code == sourceLanguage);
    return currentDict?.translations?.map((dict) => {
      return { title: dict.name, value: dict.code!! };
    });
  };

  return (
    <div className="px-4 py-5 flex flex-col gap-5 container mx-auto items-start max-w-6xl">
      <InputsCard
        title="Current Word"
        subTitle="write the word you want to get info below"
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
              d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"
            />
          </svg>
        }
      >
        <form className="flex flex-col mt-5" onSubmit={() => {}}>
          <div className="flex flex-col sm:flex-row mb-5 sm:space-x-4">
            <StyledOption
              label="Source language"
              id="current_language"
              defaultValue="Select a base language"
              options={getCurrentLanguageOptions()}
              onChange={(e) => {
                setSourceLanguage(e.target.value);
              }}
            />
            <StyledOption
              label="Target language"
              id="translate_to"
              defaultValue="Select a language to search"
              options={getDictionaryLanguageOptions()}
              onChange={(e) => {
                setTargetLanguage(e.target.value);
              }}
            />
          </div>
          <SearchInput
            value={word}
            onValueChange={handleTextInput}
            placeholder="Enter a word to lookup"
            buttonText="Lookup"
          />
        </form>
      </InputsCard>
    </div>
  );
};

export default BilingualDictionaryPage;
