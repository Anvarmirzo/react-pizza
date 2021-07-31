import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import { Header } from './components';
import { Home, Cart } from './pages';
import { Route } from 'react-router-dom';
import axios from 'axios';

function App() {
	useEffect(() => {
		axios.get('/db.json').then(({ data }) => setPizzas(data.pizzas));
	}, []);

	return (
		<div className='wrapper'>
			<Header />
			<div className='content'>
				<Route path='/' render={() => <Home items={pizzas} />} exact />
				<Route path='/cart' component={Cart} exact />
			</div>
		</div>
	);
}

const mapStateToProps = (state) => {
	return { items: state.pizzas.items };
};

export default connect(mapStateToProps)(App);
