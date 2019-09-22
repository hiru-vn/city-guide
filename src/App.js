import React from 'react';
import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import Navbar from './components/layouts/Navbar'
import Footer from './components/layouts/Footer';
import {Switch,Route} from 'react-router-dom';
import Contact from './components/pages/Contact'
import Home from './components/pages/Home'
import News from './components/pages/News'
import Detail from './components/pages/Detail'
import NotFound from './components/pages/NotFound'

function App() {
  return (
    <div>
      <Navbar></Navbar>
      <Switch>
        <Route exact path="/" component={Home}></Route>
        <Route path="/contact" component={Contact}></Route>
        <Route path="/news" component={News}></Route>
        <Route path="/detail" component={Detail}></Route>
        <Route component={NotFound}></Route>
      </Switch>
      <Footer></Footer>
    </div>
  );
}

export default App;
