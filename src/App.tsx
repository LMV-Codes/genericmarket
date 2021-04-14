import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import React from "react";
import MainNav from "./components/navbar/MainNav";
import { Login } from "./pages/Login";
import { Register } from "./pages/Register";
import Home from "./pages/Home";
function App() {
  return (
    <Router>
      <MainNav />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/login" component={Login} />
        <Route exact path="/register" component={Register} />
      </Switch>
    </Router>
  );
}

export default App;
