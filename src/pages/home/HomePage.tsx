import { Link } from "react-router-dom";

type Props = {};

const HomePage = (props: Props) => {
  return (
    <div>
      <Link to={"/home/dictionary/english"}>Dictionary</Link>
    </div>
  );
};

export default HomePage;
