import TextareaAutosize from "react-textarea-autosize";
import PrimaryButton from "../../components/PrimaryButton";

let sentences = [
  "You've got to find what you love.",
  "And that is as true for your work as it is for your lovers.",
  "Your work is going to fill a large part of your life, and the only way to be truly satisfied is to do what you believe is great work.",
  "And the only way to do great work is to love what you do.",
  "So keep looking until you find it.",
];
export const HowItWorks = () => {
  return (
    <div className="relative w-full max-w-5xl">
      <div className="absolute block inset-0 bg-slate-600 rounded-2xl -rotate-1 md:-rotate-2"></div>
      <div className=" relative p-6 md:p-8 flex flex-col md:flex-row md:divide-x-2 md:divide-y-0 divide-y-2 bg-white rounded-2xl shadow-xl w-full">
        <div className="w-full md:mr-10 mb-5 md:mb-0">
          <div className="flex flex-row items-center gap-2">
            <div className="w-fit h-fit rounded-full p-1 bg-slate-300">
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
                  d="M10.5 21l5.25-11.25L21 21m-9-3h7.5M3 5.621a48.474 48.474 0 016-.371m0 0c1.12 0 2.233.038 3.334.114M9 5.25V3m3.334 2.364C11.176 10.658 7.69 15.08 3 17.502m9.334-12.138c.896.061 1.785.147 2.666.257m-4.589 8.495a18.023 18.023 0 01-3.827-5.802"
                />
              </svg>
            </div>
            <div>
              <h1 className=" font-semibold text-lg">Summarize Text</h1>
              <p className=" text-xs text-gray-500">write your text below</p>
            </div>
          </div>
          <TextareaAutosize
            className="w-full mt-5 text-gray-900 bg-gray-50 border border-gray-200 text-sm rounded-md focus:outline-none p-2 resize-none"
            minRows={10}
            placeholder="Hello world"
            value={
              "I'm pretty sure none of this would have happened if I hadn't been fired from Apple. It was awful tasting medicine, but I guess the patient needed it. Sometimes life hits you in the head with a brick. Don't lose faith. I'm convinced that the only thing that kept me going was that I loved what I did. You've got to find what you love. And that is as true for your work as it is for your lovers. Your work is going to fill a large part of your life, and the only way to be truly satisfied is to do what you believe is great work. And the only way to do great work is to love what you do. If you haven't found it yet, keep looking. Don't settle. As with all matters of the heart, you'll know when you find it. And, like any great relationship, it just gets better and better as the years roll on. So keep looking until you find it. Don't settle."
            }
            disabled={true}
            spellCheck={false}
          />
          <PrimaryButton className="block mt-3">Summarize</PrimaryButton>
        </div>
        <div className="w-full md:pl-10 pt-5 md:pt-0">
          <div className="flex flex-row items-center gap-2 mb-5">
            <div className="w-fit h-fit rounded-full p-1 bg-primary-200/30">
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
                  d="M4.5 12.75l6 6 9-13.5"
                />
              </svg>
            </div>
            <div>
              <h1 className=" font-semibold text-lg">Summarize Response</h1>
              <p className=" text-xs text-gray-500">
                The following text is summarized
              </p>
            </div>
          </div>
          <div>
            {sentences.map((sentence) => (
              <div className="flex items-start space-x-2 mt-2" key={sentence}>
                <div className="w-fit h-fit p-1 mt-1 bg-gray-300 rounded-full">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={3}
                    stroke="currentColor"
                    className="w-2 h-2"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M8.25 4.5l7.5 7.5-7.5 7.5"
                    />
                  </svg>
                </div>
                <h1>{sentence}</h1>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
