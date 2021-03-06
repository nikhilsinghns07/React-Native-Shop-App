import React, { useState } from 'react';
import { createStore, combineReducers } from 'redux';
import { Provider } from 'react-redux';
import productsReducer from './store/reducers/products';
import cartReducer from './store/reducers/cart';
import ShopNavigator from './navigation/ShopNavigator';
import ordersReducer from './store/reducers/orders';

const rootReducer = combineReducers({
  products: productsReducer,
  cart: cartReducer,
  orders : ordersReducer
});

const store = createStore(rootReducer);


export default function App() {
  

  return (
    <Provider store={store}>
      <ShopNavigator />
    </Provider>
  );
}
