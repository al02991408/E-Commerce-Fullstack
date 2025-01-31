import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import HomePage from './pages/HomePage';
import ProductPage from './pages/ProductPage';
import CartPage from './pages/CartPage';
import LoginPage from './pages/LoginPage';
import RegisterPage from './pages/RegisterPage';
import './styles.css';

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/" exact component={HomePage} />
        <Route path="/productos" component={ProductPage} />
        <Route path="/carrito" component={CartPage} />
        <Route path="/login" component={LoginPage} />
        <Route path="/registro" component={RegisterPage} />
      </Switch>
    </Router>
  );
}

export default App;