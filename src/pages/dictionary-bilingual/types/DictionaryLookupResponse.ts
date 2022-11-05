export interface IDictionaryLookupResponse {
  normalizedSource: string;
  displaySource: string;
  translations: Translation[];
}

export interface Translation {
  normalizedTarget: string;
  displayTarget: string;
  posTag: string;
  confidence: number;
  prefixWord: string;
  backTranslations: BackTranslation[];
}

export interface BackTranslation {
  normalizedText: string;
  displayText: string;
  numExamples: number;
  frequencyCount: number;
}

