import axios from "axios";
import { useQuery } from "react-query";
import { IDictionaryExamplesResponse } from "../types/DictionaryExamplesResponse";

export interface DictionaryExampleParams {
  sourceLanguage: string;
  targetLanguage: string;
  word: string;
  translationWord: string;
}

const getExamples = async (exampleParams: DictionaryExampleParams) => {
  const response = await axios<IDictionaryExamplesResponse[]>({
    url: "/api/dictionary-examples",
    method: "get",
    params: {
      from: exampleParams.sourceLanguage,
      to: exampleParams.targetLanguage,
      text: exampleParams.word,
      translation: exampleParams.translationWord,
    },
    responseType: "json",
  });
  return response.data;
};

export const useDictionaryExampleData = (
  exampleParams: DictionaryExampleParams
) => {
  return useQuery<
    IDictionaryExamplesResponse[],
    Error,
    IDictionaryExamplesResponse[]
  >(["dictionary_examples", exampleParams], () => getExamples(exampleParams), {
    staleTime: Infinity,
    refetchOnWindowFocus: false,
  });
};
