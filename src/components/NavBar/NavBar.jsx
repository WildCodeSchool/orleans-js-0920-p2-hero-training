import './NavBar.css';
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';

function NavBar() {
  return (
    <Router>
      <div className="navbar-container">
        <nav>
          <ul>
            <li>
              {' '}
              <Link to="/stats" className="nav-link">
                STATS
              </Link>
            </li>
            <li className="nav-link">|</li>
            <li>
              <Link to="/program" className="nav-link">
                PROGRAM
              </Link>
            </li>

            <li className="nav-link">|</li>
            <li>
              <Link to="/food" className="nav-link">
                FOOD
              </Link>
            </li>
          </ul>
        </nav>
        <Switch>
          <Route exact path="/stats">
            {/* <Stats /> */}
          </Route>
          <Route path="/program">{/* <Program /> */}</Route>
          <Route path="/food">{/* <Food /> */}</Route>
        </Switch>
      </div>
    </Router>
  );
}

export default NavBar;
