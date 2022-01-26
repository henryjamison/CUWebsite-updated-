import React from "react";
import { BrowserRouter as Router, Route, Switch, Redirect, useRef } from "react-router-dom";
import About from './Components/pages/About';
import Alumini from './Components/pages/Alumini';
import Home from './Components/pages/Home';
import Parents from './Components/pages/Parents';
import Navbar from "./Components/NavBar";
import Footer from "./Components/Footer";
import Rush from "./Components/pages/Rush";

const App = () => {
  return (
    <Router>
      <Navbar/>
      <main>
        <Switch>
        <Route path="/" exact>
          <Home/>
          </Route>
        <Route path="/about" exact>
          <About/>
        </Route>
        <Route path="/alumini" exact>
          <Alumini/>
        </Route>
        <Route path="/parents" exact>
          <Parents/>
        </Route>
        <Route path="/rush" exact>
          <Rush/>
        </Route>
        <Redirect to path="/" />
        </Switch>
        <Footer/>
      </main>
    </Router>
);

}


export default App;
