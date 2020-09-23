import React from "react";
import ReactDom from "react-dom";
import {
  Redirect,
  Route,
  BrowserRouter as Router,
  Switch,
} from "react-router-dom";
import Nav from "./components/Nav";
import "./index.css";

class App extends React.Component {
  render() {
    return (
      <Router>
        <div className="container">
          <Nav />
          <Switch>
            <Route exact path="/" render={() => <h1>Top</h1>} />
            <Redirect from="/top" to="/" />
            <Route path="/new" render={() => <h1>New</h1>} />
            <Route render={() => <h1>404</h1>} />
          </Switch>
        </div>
      </Router>
    );
  }
}

ReactDom.render(<App />, document.getElementById("app"));
