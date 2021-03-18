import "./Styles/index.css";
import SocialLinks from './components/SocialLinks'
import Home from './components/Home'
import {BrowserRouter, Switch, Route} from 'react-router-dom'
// import About from "./About";


function App() {
  return (
    <div className="App">
      <BrowserRouter id="browser">
        <Switch >
        <Route
              //homepage
              exact
              path="/"
              render={() => {
                return <Home />;
              }}
            />        
            </Switch>
        <SocialLinks />

      </BrowserRouter>
    </div>
  );
}

export default App;
