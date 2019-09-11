import React from 'react';
import BurgerBuilder from './containers/BurgerBuilder/BurgerBuilder'
import Checkout from './containers/Checkout/Checkout';
import Layout from './components/Layout/Layout'
import './App.css';
import { Route, Switch } from 'react-router-dom';

function App() {
  return (
    <div>
      <Layout>
          <Switch>
            <Route path="/" exact component={BurgerBuilder} />
            <Route path="/checkout" component={Checkout} />
          </Switch>
      </Layout>
    </div>
  );
}

export default App;
