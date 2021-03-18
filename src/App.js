import "./Styles/index.css";
import SocialLinks from "./components/SocialLinks";
import Home from "./components/Home";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import About from "./components/About";

function App() {
  return (
    <div className="App">
      <BrowserRouter id="browser">
        <Switch>
          <Route
            //homepage
            exact
            path="/"
            render={() => {
              return <Home />;
            }}
          />
          <Route
            path="/about"
            render={() => {
              return <About />;
            }}
          />
        </Switch>
        <SocialLinks />
      </BrowserRouter>
    </div>
  );
}

export default App;
