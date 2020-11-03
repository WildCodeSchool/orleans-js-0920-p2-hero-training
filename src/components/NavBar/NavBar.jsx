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
              <Link to="/stats" className="LinkNav">
                STATS
              </Link>
            </li>
            <li className="LinkNav">|</li>
            <li>
              <Link to="/program" className="LinkNav">
                PROGRAM
              </Link>
            </li>

            <li className="LinkNav">|</li>
            <li>
              <Link to="/food" className="LinkNav">
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
