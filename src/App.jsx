import Home from "./components/Home/Home";
import { Switch, Route } from "react-router-dom";
import Hero from "./components/herocard/Hero";

function App() {
  return (
    <div>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/hero/:id" component={Hero} />
      </Switch>
    </div>
  );
}

export default App;