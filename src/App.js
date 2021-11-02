
import './App.css';
import React,{Component} from 'react';
import Nav from './components/Nav.js';
import { BrowserRouter,BrowserRouter as Router, Route } from 'react-router-dom';
import Products from './components/Products.js';
import Portfolio from './components/Portfolio.js';
import Services from './components/Services.js'
import My from './components/Contact.js'
import Home from './components/Home.js'
class  App extends Component {
  render(){
  return (

    <BrowserRouter>
    <div className="App">
    <Nav/>

       <Route exact path="/" component={Home}/>
       <Route exact path="/products" component={Products}/>
        <Route exact path="/services" component={Services}/>
       <Route exact path="/portfolio" component={Portfolio}/>

       <Route exact path="/contact" component={My}/>

    </div>
      </BrowserRouter>
  );
}}

export default App;
