import { Link } from "react-router-dom";

type Props = {};

const Tools = [
  {
    title: "Translate",
    subTitle:
      "This translator is one of the most accurate ones on the market and can translate between more than one hundred languages with great accuracy.",
    pageLink: "/home/translate",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth={1.5}
        stroke="currentColor"
        className="w-fill h-fill bg-blue-200 p-1 rounded"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M10.5 21l5.25-11.25L21 21m-9-3h7.5M3 5.621a48.474 48.474 0 016-.371m0 0c1.12 0 2.233.038 3.334.114M9 5.25V3m3.334 2.364C11.176 10.658 7.69 15.08 3 17.502m9.334-12.138c.896.061 1.785.147 2.666.257m-4.589 8.495a18.023 18.023 0 01-3.827-5.802"
        />
      </svg>
    ),
  },
  {
    title: "English Dictionary",
    subTitle:
      "Dictionary provides definitions, synonyms and antonyms, examples and use in sentences and also provides phenotic word audio.",
    pageLink: "/home/dictionary/english",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth={1.5}
        stroke="currentColor"
        className="w-fill h-fill bg-red-200 p-1 rounded"
      >
        <path
          stroke-linecap="round"
          stroke-linejoin="round"
          d="M12 6.042A8.967 8.967 0 006 3.75c-1.052 0-2.062.18-3 .512v14.25A8.987 8.987 0 016 18c2.305 0 4.408.867 6 2.292m0-14.25a8.966 8.966 0 016-2.292c1.052 0 2.062.18 3 .512v14.25A8.987 8.987 0 0018 18a8.967 8.967 0 00-6 2.292m0-14.25v14.25"
        />
      </svg>
    ),
  },
  {
    title: "Bilingual Dictionary",
    subTitle:
      "Bilingual dictionary is a very good tool for language learners. It can help you to understand the meaning of words in both languages. It is also a good way to learn new vocabulary.",
    pageLink: "/home/dictionary/bilingual",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth={1.5}
        stroke="currentColor"
        className="w-fill h-fill bg-purple-200 p-1 rounded"
      >
        <path
          stroke-linecap="round"
          stroke-linejoin="round"
          d="M12 6.042A8.967 8.967 0 006 3.75c-1.052 0-2.062.18-3 .512v14.25A8.987 8.987 0 016 18c2.305 0 4.408.867 6 2.292m0-14.25a8.966 8.966 0 016-2.292c1.052 0 2.062.18 3 .512v14.25A8.987 8.987 0 0018 18a8.967 8.967 0 00-6 2.292m0-14.25v14.25"
        />
      </svg>
    ),
  },
  {
    title: "Extractive Text Summarization",
    subTitle:
      "Produces a summary by extracting salient sentences within the text. These sentences collectively convey the main idea of the document.",
    pageLink: "/home/summarize",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth={1.5}
        stroke="currentColor"
        className="w-fill h-fill bg-orange-200 p-1 rounded"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M3 4.5h14.25M3 9h9.75M3 13.5h9.75m4.5-4.5v12m0 0l-3.75-3.75M17.25 21L21 17.25"
        />
      </svg>
    ),
  },
];

const HomePage = (props: Props) => {
  return (
    <div className="px-3 sm:px-4 py-5 mt-8 mx-auto">
      <h1 className=" text-3xl sm:text-4xl font-bold mb-4 text-center">
        👋🏻 Hey, what will you learn today?
      </h1>
      <p className="mb-10 tracking-wide text-gray-800 text-center">
        Get started by selecting a tool below.
      </p>
      <div className="container justify-between items-center mx-auto max-w-6xl place-items-center grid grid-flow-row grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4 gap-5">
        {Tools.map((tool) => (
          <ToolCard
            title={tool.title}
            subTitle={tool.subTitle}
            onClickNavigateTo={tool.pageLink}
            icon={tool.icon}
            key={tool.pageLink}
          />
        ))}
      </div>
    </div>
  );
};

export default HomePage;

type ToolCardProps = {
  title: string;
  subTitle: string;
  icon: JSX.Element;
  onClickNavigateTo: string;
};

const ToolCard = ({
  title,
  subTitle,
  icon,
  onClickNavigateTo,
}: ToolCardProps) => {
  return (
    <Link
      className="w-full h-full hover:scale-105 transition-all duration-200"
      to={onClickNavigateTo}
    >
      <div className="bg-white w-full h-full p-5 flex flex-col rounded-xl shadow-md">
        <div className="w-7 h-7 rounded">{icon}</div>
        <div>
          <h1 className=" text-base font-bold mt-4 mb-2">{title}</h1>
          <p className=" text-xs leading-5 text-gray-600">{subTitle}</p>
        </div>
      </div>
    </Link>
  );
};
