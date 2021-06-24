import React, { lazy, Suspense } from "react";
import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
const Navbar = lazy(() => import("./components/Navbar"));
const Home = lazy(() => import("./components/pages/Home"));
const Services = lazy(() => import("./components/pages/Services"));
const Products = lazy(() => import("./components/pages/Products"));
const SignUp = lazy(() => import("./components/pages/SignUp"));

function App() {
  return (
    <>
      <Router>
        <Suspense
          fallback={
            <div className="preloader">
              <div className="loader">
                <p>Loading...</p>
              </div>
            </div>
          }
        >
          <Navbar />
          <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/services" component={Services} />
            <Route path="/products" component={Products} />
            <Route path="/sign-up" component={SignUp} />
          </Switch>
        </Suspense>
      </Router>
    </>
  );
}

export default App;
