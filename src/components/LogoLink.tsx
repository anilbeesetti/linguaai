import { Link } from "react-router-dom";
import logo from "../assets/logo.svg";

type Props = {
  to: string;
};

const LogoLink = ({ to }: Props) => {
  return (
    <Link to={to} className="p-3 pl-0">
      <img src={logo} className="mr-3 h-7 sm:h-9" alt="Lingua ai Logo" />
    </Link>
  );
};

export default LogoLink;
