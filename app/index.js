import React from "react";
import ReactDom from "react-dom";
import {
  Redirect,
  Route,
  BrowserRouter as Router,
  Switch,
} from "react-router-dom";

import { ThemeProvider } from "./contexts/theme";
import "./index.css";
import Nav from "./components/Nav";
import Loading from "./components/Loading";

const NewFeeds = React.lazy(() => import("./components/NewFeeds"));
const NotFound = React.lazy(() => import("./components/NotFound"));
const TopFeeds = React.lazy(() => import("./components/TopFeeds"));

class App extends React.Component {
  state = {
    theme: "light",
    toggleTheme: () => {
      this.setState(({ theme }) => ({
        theme: theme === "light" ? "dark" : "light"
      }));
    },
  };
  render() {
    return (
      <Router>
        <ThemeProvider value={this.state}>
          <div className={this.state.theme}>
            <div className="container">
              <Nav />
              <React.Suspense fallback={<Loading />}>
              <Switch>
                <Route exact path="/" component={TopFeeds} />
                <Redirect from="/top" to="/" />
                <Route path="/new" component={NewFeeds} />
                <Route component={NotFound} />
              </Switch>
              </React.Suspense>
            </div>
          </div>
        </ThemeProvider>
      </Router>
    );
  }
}

ReactDom.render(<App />, document.getElementById("app"));
