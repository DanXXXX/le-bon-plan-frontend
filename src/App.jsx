import React, { useState, useEffect,useContext } from "react";
//import { UserContext } from "../App.js";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Header from './components/layout/Header'
import Footer from './components/layout/Footer'
import Home from "./components/pages/Home";
import Register from "./components/pages/Register";
import Cities from "./components/pages/Cities";
import Login from "./components/pages/Login";
import Error404 from "./components/pages/Error404";
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles/main.scss';



function App() {
  return (
    <div>
      <BrowserRouter>
                <Header />
                <Footer />
                <div>
                    <Switch>
                        <Route exact path="/" component={Home} />
                        <Route path="/Cities" component={Cities} />
                        <Route path="/Login" component={Login} />
                        <Route path="/Register" component={Register} />
                        <Route path="*" component={Error404}/>
                    </Switch>
                </div>
          </BrowserRouter>
    </div>
  )
}

export default App


