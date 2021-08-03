import React, { useCallback, useEffect } from 'react';

import { Categories, Loader, PizzaItem, SortPopup } from './../components';

import { useDispatch, useSelector } from 'react-redux';
import { setCategory, setSortBy } from '../redux/actions/filters';
import { fetchPizzas } from '../redux/actions/pizzas';
import { addPizzaToCart } from './../redux/actions/cart';

export const Home = () => {
	const dispatch = useDispatch();
	const items = useSelector(({ pizzas }) => pizzas.items);
	const cartItems = useSelector(({ cart }) => cart.items);
	const isLoaded = useSelector(({ pizzas }) => pizzas.isLoaded);
	const { category, sortBy } = useSelector(({ filters }) => filters);

	useEffect(() => {
		dispatch(fetchPizzas(sortBy, category));
	}, [category, dispatch, sortBy]);

	const onSelectCategory = useCallback(
		(index) => dispatch(setCategory(index)),
		[dispatch],
	);

	const onSelectSortType = useCallback(
		(type) => dispatch(setSortBy(type)),
		[dispatch],
	);

	const addPizzaCart = (object) => dispatch(addPizzaToCart(object));

	const categoryNames = [
		'Мясные',
		'Вегетарианская',
		'Гриль',
		'Острые',
		'Закрытые',
	];

	const sortItems = [
		{ name: 'популярности', type: 'rating', order: 'desc' },
		{ name: 'цене', type: 'price', order: 'desc' },
		{ name: 'алфавиту', type: 'name', order: 'asc' },
	];
	return (
		<div className='container'>
			<div className='content__top'>
				<Categories
					activeCategory={category}
					items={categoryNames}
					onClickCategory={onSelectCategory}
				/>
				<SortPopup
					activeSortType={sortBy.type}
					onClickSortType={onSelectSortType}
					items={sortItems}
				/>
			</div>
			<h2 className='content__title'>Все пиццы</h2>
			<div className='content__items'>
				{isLoaded
					? items.map((obj) => (
							<PizzaItem
								onAddPizza={addPizzaCart}
								key={obj.id}
								addedCount={cartItems[obj.id] && cartItems[obj.id].length}
								{...obj}
							/>
					  ))
					: Array(12)
							.fill(0)
							.map((_, index) => <Loader key={index} />)}
			</div>
		</div>
	);
};
