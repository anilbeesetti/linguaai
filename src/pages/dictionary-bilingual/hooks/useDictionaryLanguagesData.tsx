import axios from "axios";
import { useQuery } from "react-query";
import {
  DictionaryOption,
  IDictionaryLangaugesResponse,
} from "../types/DictionaryLanguagesResponse";

const fetchDictionaryLanguages = async () => {
  const res = await axios.get<IDictionaryLangaugesResponse>(
    "https://api.cognitive.microsofttranslator.com/languages?api-version=3.0&scope=dictionary"
  );
  return res.data;
};

export const useDictionaryLanguagesData = () => {
  return useQuery<IDictionaryLangaugesResponse, Error, DictionaryOption[]>(
    "dictionary_languages",
    fetchDictionaryLanguages,
    {
      select: (data) => {
        return Object.entries(data.dictionary).map(([key, value]) => {
          return {
            name: value.name,
            code: key,
            translations: value.translations,
          } as DictionaryOption;
        });
      },
      staleTime: Infinity,
    }
  );
};
