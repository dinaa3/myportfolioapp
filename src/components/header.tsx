import { header } from '../portofolio';
import Navbar from './navbar';
import "../styles/header.css"

const Header: React.FC = () => {
  const { homepage, title } = header;

  return (
    <header className="header center">
      <h3>
        {homepage ? <a href={homepage} className="link">{title}</a> : title}
      </h3>
      <Navbar />
    </header>
  );
};

export default Header;
