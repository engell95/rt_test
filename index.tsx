import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import 'antd/dist/antd.variable.css';
import { ConfigProvider } from 'antd';

ConfigProvider.config({
  theme:{
      primaryColor:"#003658",
      errorColor:"#D43c37",
      infoColor:"#00ABEC",
      processingColor:"#33BA75",
      successColor:"#008866",
      warningColor:"#F4AD3D"
  }
});

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
