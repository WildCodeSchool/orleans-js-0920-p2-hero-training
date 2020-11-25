import './Header.css';
import logoSmall from '../../assets/logoSmall.png';
import { Link } from 'react-router-dom';

function Header() {
  return (
    <header>
      <div className="header">
        <Link to="/">
        <img src={logoSmall} alt="logo" className="logoSmall" />
        </Link>
        <h1>SUPERHERO WORKOUT</h1>
      </div>
    </header>
  );
}

export default Header;

