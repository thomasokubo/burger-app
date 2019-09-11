import React from 'react';
import BurgerBuilder from './containers/BurgerBuilder/BurgerBuilder'
import Checkout from './containers/Checkout/Checkout';
import Layout from './components/Layout/Layout'
import './App.css';

function App() {
  return (
    <div>
      <Layout>
        <BurgerBuilder></BurgerBuilder>
        <Checkout />
      </Layout>
    </div>
  );
}

export default App;
