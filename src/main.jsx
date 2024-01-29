import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import store from './Store/index.jsx';
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux"
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <Provider  store={store}>
      <App />
    </Provider>
  </BrowserRouter>,
)