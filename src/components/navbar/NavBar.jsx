import './NavBar.css';
import { HashLink as Link } from 'react-router-hash-link';
import { BrowserRouter as Router, } from 'react-router-dom';


function NavBar(props) {
  return (
    <Router>
      <div className="navbar-container">
        <nav>
          <ul>
            <li>
              {' '}
              <Link to="/hero#stats" className="nav-link">
                STATS
              </Link>
            </li>
            <li className="nav-link">|</li>
            <li>
              <Link to="/hero#program" className="nav-link">
                PROGRAM
              </Link>
            </li>

            <li className="nav-link">|</li>
            <li>
              <Link to="/hero#food" className="nav-link">
                FOOD
              </Link>
            </li>
          </ul>
        </nav>
        
      </div>
    </Router>
  );
}

export default NavBar;
