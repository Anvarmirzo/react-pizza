import React, { useCallback } from 'react';
import { Categories, PizzaItem, SortPopup } from './../components';
import { useDispatch, useSelector } from 'react-redux';
import { setCategory } from '../redux/actions/filters';

export const Home = () => {
	const dispatch = useDispatch();
	const items = useSelector(({ pizzas }) => pizzas.items);

	const onSelectCategory = useCallback(
		(index) => dispatch(setCategory(index)),
		[dispatch],
	);
	const categoryNames = [
		'Мясные',
		'Вегетарианская',
		'Гриль',
		'Острые',
		'Закрытые',
	];

	const sortItems = [
		{ name: 'популярности', type: 'popular' },
		{ name: 'цене', type: 'price' },
		{ name: 'алфавиту', type: 'alphabet' },
	];

	return (
		<div className='container'>
			<div className='content__top'>
				<Categories items={categoryNames} onClickItem={onSelectCategory} />
				<SortPopup items={sortItems} />
			</div>
			<h2 className='content__title'>Все пиццы</h2>
			<div className='content__items'>
				{items && items.map((item) => <PizzaItem key={item.id} {...item} />)}
			</div>
		</div>
	);
};
