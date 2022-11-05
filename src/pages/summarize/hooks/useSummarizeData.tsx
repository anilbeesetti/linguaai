import axios from "axios";
import { useMutation } from "react-query";
import { ISummarizeResponse } from "../types/SummarizeResponse";

interface SummarizeParams {
  sentenceCount: string;
  text: string;
}

const summarizeText = async (summarizeParams: SummarizeParams) => {
  const response = await axios<ISummarizeResponse[]>({
    url: "/api/summarize",
    method: "post",
    params: {
      maxSentenceCount: summarizeParams.sentenceCount,
    },
    data: {
      text: summarizeParams.text,
    },
    responseType: "json",
  });
  return response.data;
};

export const useSummarizeData = () => {
  return useMutation<ISummarizeResponse[], Error, SummarizeParams>(
    summarizeText
  );
};
