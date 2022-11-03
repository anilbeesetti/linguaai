export interface ITranslateResponse {
  detectedLanguage?: DetectedLanguage;
  translations: Translation[];
}

export interface DetectedLanguage {
  language: string;
  score: number;
}

export interface Translation {
  text: string;
  to: string;
}
