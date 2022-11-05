import {
  DictionaryExampleParams,
  useDictionaryExampleData,
} from "../hooks/useDictionaryExamplesData";
import { Translation } from "../types/DictionaryLookupResponse";
import { getPosByTag } from "../utils/PartsOfSpeech";
import infinityLoading from "../../../assets/infinity-loading.svg";
import { MainTitleWithSubtitle } from "../../../components/TitleWithSubtitle";
import { SubTitle } from "./SubTitle";
import { Example } from "./Example";
import { getErrorMessage } from "../utils/ErrorMessage";

type WordTranslationWithExamplesProps = {
  translation: Translation;
  sourceLanguage?: string;
  targetLanguage?: string;
  dictionaryExampleParams: DictionaryExampleParams;
};
export const WordTranslationWithExamples = ({
  translation,
  sourceLanguage,
  targetLanguage,
  dictionaryExampleParams,
}: WordTranslationWithExamplesProps) => {
  const dictionaryExamples = useDictionaryExampleData(dictionaryExampleParams);

  return (
    <div className="mb-3">
      <MainTitleWithSubtitle
        title={translation.prefixWord + translation.displayTarget}
        subTitle={getPosByTag(translation.posTag)}
      />
      <div className="bg-slate-50 rounded-lg px-3 py-2 mt-2">
        <div>
          <SubTitle>Examples:</SubTitle>
          {dictionaryExamples.isLoading ? (
            <div className="w-full h-20 flex justify-center items-center">
              <img src={infinityLoading} alt="loading" className="w-10 h-10" />
            </div>
          ) : dictionaryExamples.isError ? (
            <div className="w-full h-20 flex justify-center items-center text-center text-red-500">
              {getErrorMessage(dictionaryExamples.error.message)}
            </div>
          ) : (
            dictionaryExamples.data &&
            dictionaryExamples.data?.map((dict) => (
              <div className="ml-5">
                {dict.examples.map((example) => (
                  <div className="my-3" key={example.sourcePrefix}>
                    <Example
                      title="Source:"
                      term={example.sourceTerm}
                      prefix={example.sourcePrefix}
                      suffix={example.sourceSuffix}
                    />
                    <Example
                      title="Target:"
                      term={example.targetTerm}
                      prefix={example.targetPrefix}
                      suffix={example.targetSuffix}
                    />
                  </div>
                ))}
              </div>
            ))
          )}
        </div>
        {translation.backTranslations.length > 0 && (
          <div className="mb-3">
            <SubTitle>Back Translation to {sourceLanguage}:</SubTitle>
            <em className="flex flex-wrap space-x-2 ml-5 text-gray-700">
              {translation.backTranslations.map((backTranslation, i) => (
                <span key={backTranslation.displayText}>
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
