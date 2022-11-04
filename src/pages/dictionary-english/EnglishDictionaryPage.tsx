import InputsCard from "../../components/InputsCard";
import { useState } from "react";

type Props = {};

const EnglishDictionaryPage = (props: Props) => {
  return <div>EnglishDictionaryPage</div>;
  const [text, setText] = useState("");
  const MAX_LENGTH = 100;



  const handleTextInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    setText(e.target.value.trim().slice(0, MAX_LENGTH));
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
  };


  return (
    <div className="px-4 py-5 flex flex-col gap-5 container mx-auto items-start max-w-6xl">
      <InputsCard
        title="Lookup English Word"
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
        <form className="flex mt-5" onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="Enter a word to lookup"
            value={text}
            onChange={handleTextInput}
            className="w-full text-gray-900 bg-gray-50 border border-gray-200 text-md rounded-l-md focus:outline-none p-3"
          />
          <button className=" bg-primary text-md rounded-r-md hover:scale-105 text-white transition-all duration-150 p-3">
            Lookup
          </button>
        </form>
      </InputsCard>
    </div>
  );
};

export default EnglishDictionaryPage;
