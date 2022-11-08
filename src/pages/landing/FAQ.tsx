import { useState } from "react";

export const FAQ = () => {
  const [openId, setOpenId] = useState(0);

  const faqs = [
    {
      id: 1,
      question: "Is LinguaAI free to use?",
      answer:
        "yes, for the time being LinguaAI is free to use for all. Once we add AZURE OPENAI powered tools to LinguaAI then we will introduce pricing options.",
    },
    {
      id: 2,
      question: "Why are there less tools available?",
      answer: "Currently, we are working hard to provide more language tools.",
    },
    {
      id: 3,
      question: "Is there chance to add more advanced AI tools for language",
      answer:
        "Offcourse, we will add more ai tools. Currently AZURE OPENAI is in preview, once it will be available to public we will add more advanced AI tools for langauges and content writing",
    },
  ];
  return (
    <div className="w-full max-w-4xl">
      {faqs.map((faq) => (
        <FAQItem faq={faq} openId={openId} setOpen={setOpenId} />
      ))}
    </div>
  );
};
type FAQprops = {
  faq: {
    id: number;
    question: string;
    answer: string;
  };
  openId: number;
  setOpen: React.Dispatch<React.SetStateAction<number>>;
};
const FAQItem = ({ faq, openId, setOpen }: FAQprops) => {
  return (
    <div className="mb-8">
      <div className="flex justify-between">
        <h4>{faq.question}</h4>
        <button
          onClick={() => {
            if (openId == faq.id) {
              setOpen(0);
            } else {
              setOpen(faq.id);
            }
          }}
        >
          {openId == faq.id ? (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M19.5 12h-15"
              />
            </svg>
          ) : (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M12 4.5v15m7.5-7.5h-15"
              />
            </svg>
          )}
        </button>
      </div>
      <p
        className={`mt-4 text-sm text-slate-500 tracking-wide ${
          openId != faq.id && "hidden"
        }`}
      >
        {faq.answer}
      </p>
    </div>
  );
};
