import axios from "axios";
import { useQuery } from "react-query";
import { IDictionaryResponse } from "../types/DictionaryResponse";

const fetchDictionaryDefinition = async (word: string) => {
  const res = await axios.get<IDictionaryResponse[]>(
    `https://api.dictionaryapi.dev/api/v2/entries/en/${word}`
  );
  return res.data;
};

export const useDictionaryData = (word: string) => {
  return useQuery<IDictionaryResponse[], Error>(
    ["dictionary", word],
    () => fetchDictionaryDefinition(word),
    {
      enabled: !!word,
      staleTime: Infinity,
      refetchOnWindowFocus: false,
    }
  );
};
