import axios from "axios";
import { useQuery } from "react-query";
import { IDictionaryLookupResponse } from "../types/DictionaryLookupResponse";

export interface LookupParams {
  sourceLanguage: string;
  targetLanguage: string;
  word: string;
}

const lookupWord = async (lookup: LookupParams) => {
  const response = await axios<IDictionaryLookupResponse[]>({
    url: "/api/dictionary-lookup",
    method: "get",
    params: {
      from: lookup.sourceLanguage,
      to: lookup.targetLanguage,
      word: lookup.word,
    },
    responseType: "json",
  });
  return response.data;
};

export const useDictionaryLookupData = (lookup: LookupParams) => {
  return useQuery<
    IDictionaryLookupResponse[],
    Error,
    IDictionaryLookupResponse[]
  >(["lookup", lookup], () => lookupWord(lookup), {
    enabled: !!lookup.word,
    staleTime: Infinity,
    refetchOnWindowFocus: false,
  });
};
