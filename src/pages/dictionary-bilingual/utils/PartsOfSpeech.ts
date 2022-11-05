export type PartOfSpeechTag = {
  tag: string;
  title: string;
};

const posTags: PartOfSpeechTag[] = [
  {
    tag: "ADJ",
    title: "adjective",
  },
  {
    tag: "ADV",
    title: "adverb",
  },
  {
    tag: "CONJ",
    title: "conjuncion",
  },
  {
    tag: "DET",
    title: "determiner",
  },
  {
    tag: "MODAL",
    title: "verb",
  },
  {
    tag: "NOUN",
    title: "noun",
  },
  {
    tag: "PREP",
    title: "preposition",
  },
  {
    tag: "PRON",
    title: "pronoun",
  },
  {
    tag: "VERB",
    title: "verb",
  },
  {
    tag: "OTHER",
    title: "other",
  },
];

export const getPosByTag = (tag: string) => {
  const posTag = posTags.find((posTag) => posTag.tag === tag);
  return posTag?.title;
};
