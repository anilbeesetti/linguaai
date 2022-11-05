export interface IDictionaryLangaugesResponse {
  dictionary: { [key: string]: IDictionary };
}

export interface IDictionary {
  name: string;
  nativeName: string;
  dir: string;
  translations?: IDictionary[];
  code?: string;
}

export interface DictionaryOption {
  name: string;
  code: string;
  translations?: IDictionary[];
}
