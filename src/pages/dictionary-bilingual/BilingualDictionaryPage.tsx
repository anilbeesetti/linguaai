import { useState } from "react";
import InputsCard from "../../components/InputsCard";
import ResultCard from "../../components/ResultCard";
import { SearchInput } from "../../components/SearchInput";
import StyledOption from "../../components/StyledOption";
import {
  DictionaryExampleParams,
  useDictionaryExampleData,
} from "./hooks/useDictionaryExamplesData";
import { useDictionaryLanguagesData } from "./hooks/useDictionaryLanguagesData";
import {
  LookupParams,
  useDictionaryLookupData,
} from "./hooks/useDictionaryLookupData";
import { Translation } from "./types/DictionaryLookupResponse";
import { getPosByTag } from "./utils/PartsOfSpeech";
import infinityLoading from "../../assets/infinity-loading.svg";

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
        title="Bilingual Dictionary"
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

type WordTranslationWithExamplesProps = {
  translation: Translation;
  sourceLanguage?: string;
  targetLanguage?: string;
  dictionaryExampleParams: DictionaryExampleParams;
};

const WordTranslationWithExamples = ({
  translation,
  sourceLanguage,
  targetLanguage,
  dictionaryExampleParams,
}: WordTranslationWithExamplesProps) => {
  const dictionaryExamples = useDictionaryExampleData(dictionaryExampleParams);

  const getErrorMessage = () => {
    var errorMessage = "";

    if (dictionaryExamples.error?.message.includes("404")) {
      errorMessage =
        "The word you've entered isn't in the dictionary. Try again using the search bar above.";
    } else if (dictionaryExamples.error?.message.includes("4")) {
      errorMessage = "An error occured";
    } else if (dictionaryExamples.error?.message.includes("5")) {
      errorMessage =
        "An error occured in server. Please try again after sometime.";
    } else {
      errorMessage =
        dictionaryExamples.error?.message ||
        "Unknown error. Please try agian after sometime.";
    }
    return errorMessage;
  };

  return (
    <div className="mb-3">
      <div className="flex items-end space-x-2">
        <h1 className="font-bold text-4xl font-display">
          {translation.prefixWord}
          {translation.displayTarget}
        </h1>
        <span className="text-primary_green font-medium text-lg">
          {getPosByTag(translation.posTag)}
        </span>
      </div>
      <div className="bg-slate-200 rounded-lg p-3 mt-2">
        <div>
          <h2 className="mb-1 text-xl font-medium">Examples:</h2>
          {dictionaryExamples.isLoading ? (
            <div className="w-full h-20 flex justify-center items-center">
              <img src={infinityLoading} alt="loading" className="w-10 h-10" />
            </div>
          ) : dictionaryExamples.isError ? (
            <div className="w-full h-20 flex justify-center items-center text-center text-red-500">
              {getErrorMessage()}
            </div>
          ) : (
            dictionaryExamples.data &&
            dictionaryExamples.data?.map((dict) => (
              <div className="ml-5">
                {dict.examples.map((example) => (
                  <div className="mb-2 mt-2" key={example.sourcePrefix}>
                    <em className="mt-2 flex space-x-2 text-slate-600">
                      <span>Source:</span>
                      <div>
                        <span>{example.sourcePrefix}</span>
                        <span className=" text-primary_green">
                          {example.sourceTerm}
                        </span>
                        <span>{example.sourceSuffix}</span>
                      </div>
                    </em>
                    <em className="mt-2 flex space-x-2 text-slate-600">
                      <span>Target:</span>
                      <div>
                        <span>{example.targetPrefix}</span>
                        <span className=" text-primary_green">
                          {example.targetTerm}
                        </span>
                        <span>{example.targetSuffix}</span>
                      </div>
                    </em>
                  </div>
                ))}
              </div>
            ))
          )}
        </div>
        {translation.backTranslations.length > 0 && (
          <div className="mb-3">
            <h2 className="mt-3 mb-1 text-xl font-medium">
              Back Translation to {sourceLanguage}:
            </h2>
            <em className="flex flex-wrap space-x-2 ml-5 text-primary">
              {translation.backTranslations.map((backTranslation, i) => (
                <span className="">
                  {backTranslation.displayText}
                  {translation.backTranslations.length != i + 1 && ", "}
                </span>
              ))}
            </em>
          </div>
        )}
      </div>
    </div>
  );
};
