import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {BrowserRouter } from 'react-router-dom'
import { Provider } from 'react-redux'
import configureStore from './store/IssueStore'
import {InitializeIssues} from './actions/Initialize'

const store = configureStore();
store.dispatch(InitializeIssues());

ReactDOM.render(
  <Provider store={store}>
 <BrowserRouter >
    <App />
    </BrowserRouter>
    </Provider>,
  document.getElementById('root')
);
reportWebVitals();
