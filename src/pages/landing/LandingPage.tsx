import LandingNavbar from "../../components/LandingNavbar";
import TextareaAutosize from "react-textarea-autosize";
import StyledOption from "../../components/StyledOption";
import PrimaryButton from "../../components/PrimaryButton";
import InputsCard from "../../components/InputsCard";
import ResultCard from "../../components/ResultCard";
import { TypeWriterText } from "../../components/TypeWriterText";
import { Link } from "react-router-dom";

type Props = {};

const LandingPage = (props: Props) => {
  return (
    <div>
      <div className="bg-white w-screen h-screen">
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
          <div className="flex flex-col items-center pt-5" id="how-it-works">
            <h2 className="text-2xl md:text-3xl xl:text-4xl text-slate-600 mb-5">
              See how it works!
            </h2>
            <HowItWorks />
          </div>
        </div>
      </div>
      <div className="w-screen h-screen bg-blue-100/20"></div>
    </div>
  );
};

export default LandingPage;

const HowItWorks = () => {
  return (
    <div className="flex flex-col md:flex-row md:py-8 container mx-auto items-start max-w-6xl gap-5">
      <InputsCard
        title="Translate Text"
        subTitle="write the text you want to translate below"
      >
        <StyledOption
          label="Current Language"
          id="current_language"
          defaultValue="Auto detect"
          disabled={true}
          options={[
            {
              title: "Auto detect",
              value: "",
            },
          ]}
        />
        <StyledOption
          label="Translate To"
          id="translate_to"
          defaultValue="Select a language to translate"
          disabled={true}
          options={[
            {
              title: "Spanish",
              value: "",
            },
          ]}
        />
        <label className="font-medium text-sm mt-5 mb-3 block">
          Current Text
        </label>
        <TextareaAutosize
          className="w-full text-gray-900 bg-gray-50 border border-gray-200 text-sm rounded-md focus:outline-none p-2 resize-none"
          minRows={3}
          placeholder="Hello world"
          value={
            "Again, you can't connect the dots looking forward; you can only connect them looking backward. So you have to trust that the dots will somehow connect in your future. You have to trust in something — your gut, destiny, life, karma, whatever. This approach has never let me down, and it has made all the difference in my life."
          }
          disabled={true}
          spellCheck={false}
        />
        <PrimaryButton className="block mt-3">Translate</PrimaryButton>
      </InputsCard>
      <ResultCard
        isLoading={false}
        isError={false}
        isSuccess={true}
        error={""}
        title="Translated Text"
        subtitle="The following text is translated to spanish"
        effect={true}
      >
        <div className="pb-5 px-2">
          <TypeWriterText
            text={`Una vez más, no puedes conectar los puntos mirando hacia
          adelante; Solo puedes conectarlos mirando hacia atrás. Así
          que tienes que confiar en que los puntos se conectarán de
          alguna manera en tu futuro. Tienes que confiar en algo: tu
          instinto, tu destino, tu vida, tu karma, lo que sea. Este
          enfoque nunca me ha defraudado, y ha hecho toda la
          diferencia en mi vida.`}
          />
        </div>
      </ResultCard>
    </div>
  );
};

// shadow-[rgba(0,_0,_0,_0.4)_0px_30px_90px]
