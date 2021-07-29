import React from 'react';
import ReactDOM from 'react-dom';

import './scss/app.scss';

import App from './App';
import { BrowserRouter, Route } from 'react-router-dom';
import { Header } from './components/Header';

ReactDOM.render(
	<React.StrictMode>
		<BrowserRouter>
			<App />
		</BrowserRouter>
	</React.StrictMode>,
	document.getElementById('root'),
);