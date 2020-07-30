import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { RecoilRoot } from 'recoil';
import './style.css';

var mountNode = document.getElementById('app');
ReactDOM.render(
  <RecoilRoot>
    <App />
  </RecoilRoot>,
  mountNode
);
