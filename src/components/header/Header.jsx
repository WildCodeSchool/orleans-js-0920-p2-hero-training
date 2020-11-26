import "./Header.css";
import logoSmall from "../../assets/logoSmall.png";
import { Link } from "react-router-dom";
import { AiOutlineFileSearch } from "react-icons/ai";

function Header() {
  return (
    <header>
      <div className="header">
        <Link to="/">
          <img src={logoSmall} alt="logo" className="logoSmall" />
        </Link>
        <h1>SUPERHERO WORKOUT</h1>
        <Link to="/list">
          <AiOutlineFileSearch
            className="searchIcons"
            size={60}
            color={"#AFB1AE"}
          />
        </Link>
      </div>
    </header>
  );
}

export default Header;
