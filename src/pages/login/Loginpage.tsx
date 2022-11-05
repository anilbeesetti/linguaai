import github from "../../assets/github.svg";
import google from "../../assets/google.svg";
import meta from "../../assets/meta.svg";
import microsoft from "../../assets/microsoft.svg";
import { useAuthContext } from "../../hooks/useAuthContext";
import LogoLink from "../../components/LogoLink";
import { Link } from "react-router-dom";

type Props = {};

export type LoginProvider = {
  name: string;
  route: string;
  icon: string;
};

const providers: LoginProvider[] = [
  {
    name: "Continue with microsoft",
    route: "microsoft",
    icon: microsoft,
  },
  {
    name: "Continue with Google",
    route: "google",
    icon: google,
  },
  {
    name: "Continue with Meta",
    route: "meta",
    icon: meta,
  },
  {
    name: "Continue with Github",
    route: "github",
    icon: github,
  },
];

const Loginpage = (props: Props) => {
  const auth = useAuthContext();

  return (
    <div className="w-full h-full flex flex-col">
      <div className="w-full p-3 sm:p-5">
        <LogoLink to="/" />
      </div>
      <div className="flex w-full justify-center items-center h-full">
        <section className="hidden sm:flex sm:flex-col h-full w-3/5 bg-slate-300 justify-center rounded-tr-2xl p-5">
          <h1 className=" text-primary font-bold text-4xl">
            Get Started <br />
            with lingua Ai
          </h1>
          <p className=" text-slate-500 mt-4">
            Sign up and start using lingua Ai to enhance your language skills
          </p>
        </section>
        <section className="w-full h-full flex flex-col justify-center sm:w-2/5 sm:p-8 p-4">
          <h1 className="text-3xl font-bold mb-2">Register / Sign in</h1>
          <p className="mb-6 text-slate-600">Login in with account you own</p>
          <div className=" flex flex-col w-full max-w-lg space-y-3">
            {providers.map((provider) => (
              <button
                className="px-5 py-3 rounded bg-white text-black flex flex-row items-center border border-slate-300 shadow-sm hover:text-primary hover:border-primary-500 transition"
                key={provider.name}
                onClick={() => auth.login(provider.route)}
              >
                <img src={provider.icon} alt="logo" className="w-6 h-6 mr-2" />
                {provider.name}
              </button>
            ))}
          </div>
          <Link
            to={"/"}
            className="flex space-x-1 sm:space-x-2 justify-center mt-5 p-3 items-center text-primary_hover group"
          >
            <span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-6 h-6 group-hover:scale-110 transform group-hover:-translate-x-2 transition"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M6.75 15.75L3 12m0 0l3.75-3.75M3 12h18"
                />
              </svg>
            </span>
            <span>Go back to landing Page</span>
          </Link>
        </section>
      </div>
    </div>
  );
};

export default Loginpage;
