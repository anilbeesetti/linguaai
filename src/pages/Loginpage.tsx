import logo from "../assets/logo.svg";
import github from "../assets/github.svg";
import google from "../assets/google.svg";
import meta from "../assets/meta.svg";
import microsoft from "../assets/microsoft.svg";
import { useAuthContext } from "../hooks/useAuthContext";

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
    <div className="w-full h-full flex flex-col bg-slate-200">
      <div>
        <img src={logo} alt="" className="mr-3 h-7 sm:h-9 m-5" />
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
                className="px-5 py-3 rounded text-black flex flex-row items-center border border-slate-300 shadow-sm hover:text-primary hover:border-primary transition"
                key={provider.name}
                onClick={() => auth.login(provider.route)}
              >
                <img src={provider.icon} alt="logo" className="w-6 h-6 mr-2" />
                {provider.name}
              </button>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
};

export default Loginpage;
