import LandingNavbar from "../../components/LandingNavbar";
import { Link } from "react-router-dom";
import { HowItWorks } from "./HowItWorks";
import { Footer } from "./Footer";
import { FAQ } from "./FAQ";

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
          <div className="flex flex-col items-center py-8" id="how-it-works">
            <h2 className="text-2xl md:text-3xl xl:text-4xl text-slate-600 mb-10">
              See how it works!
            </h2>
            <HowItWorks />
          </div>
          <div className="flex flex-col items-center py-8" id="faq">
            <h2 className="text-2xl md:text-3xl xl:text-4xl text-slate-600 mb-10">
              Frequently Asked Questions
            </h2>
            <FAQ />
          </div>
          <div className="my-6">
            <Footer />
          </div>
        </div>
      </div>
    </div>
  );
};

export default LandingPage;
