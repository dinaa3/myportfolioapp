import { header } from "../portofolio";
import Navbar from "./navbar";

const Header: React.FC = () => {
  const { homepage } = header;

  return (
    <header className="header center">
      <h3>
        {homepage && <a href={homepage} className="link">Home</a>}
      </h3>
      <Navbar />
    </header>
  );
};
