import React from 'react'
import './App.css';
import Navbar from './components/Navbar';
import './components/style.css'
import Home from './components/Home';
import AddPlace from './components/AddPlace';
import Checkout from './components/Checkout'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import ManagePlace from './components/ManagePlace';
import Orders from './components/Orders';
import Login from './components/Login';
import { useState } from 'react';
import PrivateRoute from './components/PrivateRoute';
export const UserContext= React.createContext();
function App() {
  const [loggedUser, setLoggedUser]= useState({});
  return (
    <div className="App">
      <UserContext.Provider value={[loggedUser, setLoggedUser]}>
      <Router>
        <Switch>
          <Route exact path="/">
            <Navbar></Navbar>
            <Home></Home>
          </Route>
          <PrivateRoute exact path="/addPlace">
            <AddPlace></AddPlace>
          </PrivateRoute>
          <PrivateRoute exact path="/managePlace">
            <ManagePlace></ManagePlace>
          </PrivateRoute>
          <PrivateRoute exact path="/orders">
            <Navbar></Navbar>
            <Orders></Orders>
          </PrivateRoute>
          <Route exact path="/login">
            <Navbar></Navbar>
            <Login></Login>
          </Route>
          <PrivateRoute exact path="/checkout/:_id">
            <Navbar></Navbar>
            <Checkout></Checkout>
          </PrivateRoute>
        </Switch>
      </Router>
      </UserContext.Provider>
    </div>
  );
}

export default App;
