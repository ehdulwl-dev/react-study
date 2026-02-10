import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

import Libray from './sople/chapter_03/Library';
import Clock from './sople/chapter_04/Clock';
import CommentList from './sople/chapter_05/CommentList';
import Notificationlist from './sople/chapter_06/NotificationList';
import Accomodate from './sople/chapter_07/Accomodate';
import ConfirmButtton_Function from './sople/chapter_08/ConfirmButton_Function';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <ConfirmButtton_Function />
  </React.StrictMode>,
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
