import "./Styles/index.css";
import Footer from "./components/Footer";
import Home from "./components/Home";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import About from "./components/About";
import NavBar from "./components/NavBar";
import Contact from "./components/Contact"
import Projects from "./components/Projects"

function App() {
  return (
    <div className="App">
      <BrowserRouter id="browser">
        <NavBar />
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
                    <Route
            path="/projects"
            render={() => {
              return <Projects />;
            }}
          />
          <Route
            path="/contact"
            render={() => {
              return <Contact />;
            }}
          />
        </Switch>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
