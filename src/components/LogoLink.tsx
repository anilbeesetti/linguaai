import { Link } from "react-router-dom";
import logo from "../assets/logo.svg";

type Props = {
  className?: string;
  to: string;
};

const LogoLink = ({ className, to }: Props) => {
  return (
    <Link to={to} className={className}>
      <img src={logo} className="mr-3 h-7 sm:h-9" alt="Lingua ai Logo" />
    </Link>
  );
};

export default LogoLink;
