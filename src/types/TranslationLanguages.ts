export interface ITranslationLanguages {
  translation: { [key: string]: ITranslation };
}

export interface ITranslation {
  name: string;
  nativeName: string;
  dir: string;
}
