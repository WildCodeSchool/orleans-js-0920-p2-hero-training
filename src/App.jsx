import Home from "./components/home/Home";
import { Switch, Route } from "react-router-dom";
import Hero from "./components/hero/Hero";
import Searchpage from "./components/alllist/Searchpage";

function App() {
  return (
    <div>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/list" component={Searchpage} />
        <Route path="/hero/:id" component={Hero} />
      </Switch>
    </div>
  );
}

export default App;