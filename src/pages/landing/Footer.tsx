import logo from "../../assets/logo.svg";

export const Footer = () => {
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
