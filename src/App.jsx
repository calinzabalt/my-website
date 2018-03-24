import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import './App.css';
import Home from './components/Home';
import Work from './components/Work';
import Contact from './components/Contact';
import Navbar from './components/CustomNavbar';
import Footer from './components/Footer';

class App extends Component {
  render() {
    return (
      <Router>
      <div className="App">
      <Navbar />
      <div className="text-center">
        <div className="children">
          <div className="container">
              
          <Route exact path="/" component={Home} />
          <Route path="/work" component={Work} />
          <Route path="/contact" component={Contact} />
          </div>
         
         </div>
         
        
        
        <Footer/>
        </div>
        </div>
      </Router>
     
    
    );
  }
}

export default App;
