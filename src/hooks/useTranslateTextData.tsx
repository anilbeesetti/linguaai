import axios from "axios";
import { useMutation } from "react-query";
import { ITranslateResponse } from "../types/TranslateResponse";

interface TranslateParams {
  currentLanguage: string;
  translateToLanguage: string;
  text: string;
}

const translateText = async (translateParams: TranslateParams) => {
  const response = await axios<ITranslateResponse[]>({
    url: "/api/translate",
    method: "post",
    params: {
      from: translateParams.currentLanguage,
      to: translateParams.translateToLanguage,
    },
    data: {
      text: translateParams.text,
    },
    responseType: "json",
  });
  return response.data;
};

export const useTranslateTextData = () => {
  return useMutation<ITranslateResponse[], Error, TranslateParams>(
    translateText
  );
};
