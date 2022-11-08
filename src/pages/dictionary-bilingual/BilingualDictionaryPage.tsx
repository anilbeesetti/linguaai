import { useState } from "react";
import InputsCard from "../../components/InputsCard";
import ResultCard from "../../components/ResultCard";
import { SearchInput } from "../../components/SearchInput";
import StyledOption from "../../components/StyledOption";
import { useDictionaryLanguagesData } from "./hooks/useDictionaryLanguagesData";
import {
  LookupParams,
  useDictionaryLookupData,
} from "./hooks/useDictionaryLookupData";
import { WordTranslationWithExamples } from "./components/WordTranslationWithExamples";

const BilingualDictionaryPage = () => {
  const [word, setWord] = useState("");
  const [lookupParams, setLookupParams] = useState({} as LookupParams);
  const [sourceLanguage, setSourceLanguage] = useState("");
  const [targetLanguage, setTargetLanguage] = useState("");
  const { data } = useDictionaryLanguagesData();
  const lookup = useDictionaryLookupData(lookupParams);
  const MAX_LENGTH = 100;

  const handleTextInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    setWord(e.target.value.trim().slice(0, MAX_LENGTH));
  };

  const getLanguage = (code: string) => {
    const option = data?.find((option) => option.code === code);
    return option?.name;
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

  const getErrorMessage = () => {
    var errorMessage = "";

    if (lookup.error?.message.includes("404")) {
      errorMessage =
        "The word you've entered isn't in the dictionary. Try again using the search bar above.";
    } else if (lookup.error?.message.includes("4")) {
      errorMessage = "An error occured";
    } else if (lookup.error?.message.includes("5")) {
      errorMessage =
        "An error occured in server. Please try again after sometime.";
    } else {
      errorMessage = lookup.error?.message || "";
    }
    return errorMessage;
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log(sourceLanguage, targetLanguage, word);
    if (!sourceLanguage || !targetLanguage || !word.trim()) return;
    setLookupParams({
      sourceLanguage,
      targetLanguage,
      word,
    });
  };

  return (
    <div className="px-4 py-5 flex flex-col gap-5 container mx-auto items-start max-w-6xl">
      <InputsCard
        title="Bilingual Dictionary"
        subTitle="write the word you want to get info below"
        icon={
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-6 h-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"
            />
          </svg>
        }
      >
        <form className="flex flex-col mt-5" onSubmit={handleSubmit}>
          <div className="flex flex-col sm:flex-row mb-5 sm:space-x-4">
            <StyledOption
              label="Source language"
              id="current_language"
              defaultValue="Select a base language"
              options={getCurrentLanguageOptions()}
              onChange={(e) => setSourceLanguage(e.target.value)}
            />
            <StyledOption
              label="Target language"
              id="translate_to"
              defaultValue="Select a language to search"
              options={getDictionaryLanguageOptions()}
              onChange={(e) => setTargetLanguage(e.target.value)}
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
      <ResultCard
        isLoading={lookup.isLoading}
        isSuccess={lookup.isSuccess}
        isError={lookup.isError}
        error={getErrorMessage()}
        effect={false}
        title="Lookup Response"
        subtitle="The following are the translations of the word"
      >
        <div className="mt-5">
          {lookup.data?.map((source) => (
            <div>
              {source.translations.map((translation) => (
                <WordTranslationWithExamples
                  translation={translation}
                  sourceLanguage={getLanguage(lookupParams.sourceLanguage)}
                  targetLanguage={getLanguage(lookupParams.targetLanguage)}
                  dictionaryExampleParams={{
                    sourceLanguage: lookupParams.sourceLanguage,
                    targetLanguage: lookupParams.targetLanguage,
                    word: source.normalizedSource,
                    translationWord: translation.normalizedTarget,
                  }}
                  key={translation.normalizedTarget}
                />
              ))}
            </div>
          ))}
        </div>
      </ResultCard>
    </div>
  );
};

export default BilingualDictionaryPage;
