import React from 'react';
import ReactDOM from 'react-dom';
import './index.scss';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

ReactDOM.render(
	<BrowserRouter>
		<App />
	</BrowserRouter>,
  	document.getElementById('root')
)

reportWebVitals();
