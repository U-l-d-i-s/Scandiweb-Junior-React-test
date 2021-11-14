import React from 'react';
import ReactDOM from 'react-dom';
import {
  BrowserRouter,
  Route,
  Switch
} from 'react-router-dom';
import App from './App';
import CartContainer from './Components/CartContainer';
import ProductDescriptionContainer from './Components/ProductDescriptionContainer'


import reportWebVitals from './reportWebVitals';

import {createStore} from 'redux';
import {Provider} from 'react-redux';
import allReducers from './ReduxModules/AllReducers'
import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider
} from "@apollo/client";

const client = new ApolloClient({
  cache: new InMemoryCache(),
  uri: 'http://localhost:4000/',
});

let store = createStore(
  allReducers,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  );


ReactDOM.render(
  <React.StrictMode>
              <ApolloProvider client={client}>

    <BrowserRouter>
      <Switch>
        <Provider store = {store}>

            <Route path = "/" exact component = {App} />
            <Route path = "/CartContainer" exact component = {CartContainer} />
            <Route path = "/ProductDescriptionContainer/:id" exact component = {ProductDescriptionContainer} />

        </Provider>
      </Switch>
    </BrowserRouter>
    </ApolloProvider>

  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
