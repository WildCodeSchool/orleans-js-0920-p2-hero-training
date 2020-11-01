import './Header.css';
import logoSmall from 'url:~/src/assets/logoSmall.png';

function Header() {
  return (
    <header>
      <div className="header">
        <img src={logoSmall} alt="logo" className="logoSmall" />
        <h1>SUPERHEROS WORKOUT</h1>
      </div>
    </header>
  );
}

export default Header;
