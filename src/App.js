import React from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Home from './Pages/LandingPage'
import RegisterPage from './Pages/RegisterPage'
import DashboardPage from './Pages/DashboardPage'

function App() {
  return (
    <div className="App">
      <Router>
        
      <Route exact path="/" component={Home}></Route>
      <Route exact path="/register" component={RegisterPage}></Route>
      <Route exact path="/dashboard" component={DashboardPage}></Route>
      
      
    
     
      
      
      </Router>
      
      
    </div>
  );
}

export default App;
