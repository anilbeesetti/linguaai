import LandingNavbar from "../../components/LandingNavbar";
import TextareaAutosize from "react-textarea-autosize";
import PrimaryButton from "../../components/PrimaryButton";
import { Link } from "react-router-dom";
import logo from "../../assets/logo.svg";

type Props = {};

const LandingPage = (props: Props) => {
  return (
    <div>
      <div className="bg-slate-50 w-screen">
        <LandingNavbar />
        <div className="container mt-8 mx-auto px-4 sm:px-6 py-2.5">
          <div className="mx-auto text-center">
            <h1 className="text-3xl my-4 md:text-5xl xl:text-6xl md:my-6">
              Use
              <strong> AI </strong>
              to
              <span className="ml-1">learn languages</span>
            </h1>
            <p className=" text-gray-600 md:text-xl">
              Now you can learn languages with the latest AI tools to solve
              problems, write solutions and make life easier.
            </p>
          </div>
          <div className="flex justify-center mb-5 mt-10">
            <Link
              to={"/login"}
              className="px-7 py-3 bg-primary-600 hover:bg-primary-400 text-white rounded-md"
            >
              <span>Start Learning for Free</span>
            </Link>
          </div>
          <div className="flex flex-col items-center pt-8" id="how-it-works">
            <h2 className="text-2xl md:text-3xl xl:text-4xl text-slate-600 mb-10">
              See how it works!
            </h2>
            <HowItWorks />
          </div>
          <div className="mt-10">
            <Footer />
          </div>
        </div>
      </div>
    </div>
  );
};

export default LandingPage;

let sentences = [
  "You've got to find what you love.",
  "And that is as true for your work as it is for your lovers.",
  "Your work is going to fill a large part of your life, and the only way to be truly satisfied is to do what you believe is great work.",
  "And the only way to do great work is to love what you do.",
  "So keep looking until you find it.",
];

const HowItWorks = () => {
  return (
    <div className="relative w-full max-w-5xl">
      <div className="absolute block inset-0 bg-slate-600 rounded-2xl -rotate-1 md:-rotate-2"></div>
      <div className=" relative p-6 md:p-8 flex flex-col md:flex-row md:divide-x-2 md:divide-y-0 divide-y-2 bg-white rounded-2xl shadow-2xl w-full">
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
            minRows={3}
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
              <div className="flex items-start space-x-2 mt-2">
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

const Footer = () => {
  return (
    <div className="grid grid-cols-2 lg:grid-cols-4 gap-5 lg:gap-10">
      <div className="col-span-2">
        <img src={logo} alt="lingua AI logo" className="h-7" />
        <p className="my-3 text-sm tracking-wide leading-6">
          Automatically translate, summarize text for your needs in seconds.
          Unleash the most advanced AI langauge tools to boost your language
          skills and productivity.
        </p>
        <span>© 2022 LinguaAI. All rights reserved.</span>
      </div>
      <div>
        <h3 className="font-semibold uppercase text-slate-500 tracking-wider mb-2">
          Quick Links
        </h3>
        <ul className="space-y-1">
          <li className="hover:text-primary_hover cursor-pointer text-sm">
            How it works
          </li>
          <li className="hover:text-primary_hover cursor-pointer text-sm">
            Contact us
          </li>
          <li className="hover:text-primary_hover cursor-pointer text-sm">
            FAQ
          </li>
          <li className="hover:text-primary_hover cursor-pointer text-sm">
            About
          </li>
        </ul>
      </div>
      <div>
        <h3 className="font-semibold uppercase text-slate-500 tracking-wider mb-2">
          Social Media
        </h3>
        <ul className="space-y-1">
          <li className="hover:text-primary_hover cursor-pointer text-sm">
            Github
          </li>
          <li className="hover:text-primary_hover cursor-pointer text-sm">
            Instagram
          </li>
          <li className="hover:text-primary_hover cursor-pointer text-sm">
            Facebook
          </li>
          <li className="hover:text-primary_hover cursor-pointer text-sm">
            Twitter
          </li>
        </ul>
      </div>
    </div>
  );
};
