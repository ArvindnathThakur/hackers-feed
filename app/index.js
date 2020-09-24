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

const Posts = React.lazy(() => import("./components/Posts"));
const Post = React.lazy(() => import("./components/Post"));
const User = React.lazy(() => import("./components/User"));
const NotFound = React.lazy(() => import("./components/NotFound"));

class App extends React.Component {
  state = {
    theme: "light",
    toggleTheme: () => {
      this.setState(({ theme }) => ({
        theme: theme === "light" ? "dark" : "light",
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
                  <Route exact path="/" component={Posts} />
                  <Redirect from="/top" to="/" />
                  <Route exact path="/new" render={() => <Posts type="new" />} />
                  <Route exact path="/user" component={User} />
                  <Route exact path="/post" component={Post} />
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
