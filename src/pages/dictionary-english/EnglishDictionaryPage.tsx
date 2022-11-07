import ResultCard from "../../components/ResultCard";
import InputsCard from "../../components/InputsCard";
import { useState } from "react";
import { useDictionaryData } from "./hooks/useDictionaryData";
import { ClickableWord } from "./components/ClickableWord";
import { DefinitionComponent } from "./components/DefinitionComponent";
import { AudioIcon } from "./components/AudioIcon";
import { SearchInput } from "../../components/SearchInput";

type Props = {};

const EnglishDictionaryPage = (props: Props) => {
  const [text, setText] = useState("");
  const [word, setWord] = useState("");
  const MAX_LENGTH = 100;

  const definition = useDictionaryData(word);

  const getErrorMessage = () => {
    var errorMessage = "";

    if (definition.error?.message.includes("404")) {
      errorMessage =
        "The word you've entered isn't in the dictionary. Try again using the search bar above.";
    } else if (definition.error?.message.includes("4")) {
      errorMessage = "An error occured";
    } else if (definition.error?.message.includes("5")) {
      errorMessage =
        "An error occured in server. Please try again after sometime.";
    } else {
      errorMessage = definition.error?.message || "";
    }
    return errorMessage;
  };

  const handleTextInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    setText(e.target.value.trim().slice(0, MAX_LENGTH));
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (text.trim()) {
      setWord(text);
    }
  };

  const getNewDef = (word: string) => {
    setText(word);
    setWord(word);
  };

  const playAudio = (src: string) => {
    const audio = new Audio(src);
    audio.play();
  };

  return (
    <div className="px-4 py-5 flex flex-col gap-5 container mx-auto items-start max-w-6xl">
      <InputsCard
        title="English Dictionary"
        subTitle="A word you wish to lookup"
        icon={
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-5 h-5"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"
            />
          </svg>
        }
      >
        <form className="mt-5" onSubmit={handleSubmit}>
          <SearchInput
            value={text}
            onValueChange={handleTextInput}
            placeholder="Enter a word to lookup"
            buttonText="Lookup"
          />
        </form>
      </InputsCard>
      <ResultCard
        isLoading={definition.isLoading}
        isSuccess={definition.isSuccess}
        isError={definition.isError}
        error={getErrorMessage()}
        effect={false}
        title="Lookup Response"
        subtitle="The following are the definitions of word"
        idleText="Lookup something to get info"
      >
        {definition.data ? (
          <div className="mt-3">
            {definition.data?.map((dict) => (
              <div>
                {dict.meanings.map((meaning) => (
                  <div>
                    <div className="flex items-end space-x-2">
                      <h1 className=" font-bold text-4xl font-display">
                        {dict.word}
                      </h1>
                      <a
                        className=" text-primary_green font-medium text-lg cursor-pointer"
                        onClick={() => getNewDef(meaning.partOfSpeech)}
                      >
                        {meaning.partOfSpeech}
                      </a>
                    </div>
                    <div className="flex space-x-2 mt-1 items-center">
                      {dict.phonetics.map((phonetic) => (
                        <div className="flex space-x-2 items-center">
                          <span>{phonetic.text}</span>
                          {phonetic.audio && (
                            <AudioIcon
                              size={3}
                              padding={1}
                              onClick={() => playAudio(phonetic.audio)}
                            />
                          )}
                        </div>
                      ))}
                    </div>
                    <h2 className="mt-3 mb-2 text-xl font-medium">
                      Definitions
                    </h2>
                    <ol className="list-decimal ml-10">
                      {meaning.definitions.map((definition) => (
                        <DefinitionComponent definition={definition} />
                      ))}
                    </ol>
                    <div className="mb-5">
                      {meaning.synonyms.length > 0 && (
                        <div>
                          <h2 className="mt-3 mb-1 text-xl font-medium">
                            Synonyms
                          </h2>
                          <em className="flex flex-wrap space-x-2 ml-5">
                            {meaning.synonyms.map((synonym, i) => (
                              <ClickableWord
                                word={`${synonym}${
                                  meaning.synonyms.length != i + 1 ? ", " : ""
                                }`}
                                onClick={() => getNewDef(synonym)}
                              />
                            ))}
                          </em>
                        </div>
                      )}
                      {meaning.antonyms.length > 0 && (
                        <div>
                          <h2 className="mt-3 mb-1 text-xl font-medium">
                            Antonyms
                          </h2>
                          <em className="flex flex-wrap space-x-2 ml-5">
                            {meaning.antonyms.map((antonym, i) => (
                              <ClickableWord
                                word={`${antonym}${
                                  meaning.antonyms.length != i + 1 ? ", " : ""
                                }`}
                                onClick={() => getNewDef(antonym)}
                              />
                            ))}
                          </em>
                        </div>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            ))}
          </div>
        ) : (
          <div>Enter something to get info</div>
        )}
      </ResultCard>
    </div>
  );
};

export default EnglishDictionaryPage;
