import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import DataState from './context/DataState';

import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js';

ReactDOM.render(
  <DataState>
    <App />
  </DataState>,
  document.getElementById('root')
);
