import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import MainNav from "./components/navbar/MainNav";
import { Login } from "./pages/Login";
import { Register } from "./pages/Register";
import { Home } from "./pages/Home";
import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";

const stripePromise = loadStripe(
  "pk_test_51IuInBDo55gQ6obp9IAg5f65ONvo4asfiqVOHebaCpky0hvBNeM7I7DAXPdhG1qouqRz6cORSVwL9NS2aiTuWyHw002rOMTqLX",
  {
    stripeAccount: process.env.STRIPE_ACC_ID,
  }
);

function App() {
  return (
    <Elements stripe={stripePromise}>
      <Router>
        <MainNav />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/login" component={Login} />
          <Route exact path="/register" component={Register} />
        </Switch>
      </Router>
    </Elements>
  );
}

export default App;
