import "./NavBar.css";
import { NavHashLink } from "react-router-hash-link";
import { Link } from "react-router-dom";
import { BrowserRouter as Router } from "react-router-dom";

function NavBar(props) {
  return (
    <div className="navbar-container">
      <nav>
        <ul>
          <li>
            <Link to="/" className="nav-link">
              ACCUEIL
            </Link>
          </li>
          <li className="nav-link">|</li>
          <Router>
            <li>
              <NavHashLink to="/hero#stats" className="nav-link">
                STATS
              </NavHashLink>
            </li>
            <li className="nav-link">|</li>
            <li>
              <NavHashLink to="/hero#program" className="nav-link">
                PROGRAM
              </NavHashLink>
            </li>

            <li className="nav-link">|</li>
            <li>
              <NavHashLink to="/hero#food" className="nav-link">
                FOOD
              </NavHashLink>
            </li>
          </Router>
        </ul>
      </nav>
    </div>
  );
}

export default NavBar;
