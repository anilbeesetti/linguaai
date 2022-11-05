import axios from "axios";
import { useQuery } from "react-query";
import { ITranslationLanguages } from "../types/TranslationLanguages";
import { OptionType } from "../../../types/Types";

const fetchTranslationLanguages = async () => {
  const res = await axios.get<ITranslationLanguages>(
    "https://api.cognitive.microsofttranslator.com/languages?api-version=3.0&scope=translation"
  );
  return res.data;
};

export const useTranslationLanguagesData = () => {
  return useQuery<ITranslationLanguages, Error, OptionType[]>(
    "translation_languages",
    fetchTranslationLanguages,
    {
      select: (data) => {
        return Object.entries(data.translation).map(([key, value]) => {
          return { title: value.name, value: key } as OptionType;
        });
      },
      staleTime: Infinity,
    }
  );
};
