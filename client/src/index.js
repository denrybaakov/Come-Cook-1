import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { store } from './redux/store/store';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import './index.scss'
import axios from 'axios'

axios.defaults.baseURL = 'http://localhost:3001';
axios.defaults.withCredentials = true;

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
     <Provider store={store}>
      <App />
    </Provider>
    </BrowserRouter>

  </React.StrictMode>,
  document.getElementById('root')
);
