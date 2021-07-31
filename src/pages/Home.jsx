import React from 'react';
import { Categories, PizzaItem, SortPopup } from './../components';

export const Home = ({ items, ...props }) => {
	return (
		<div className='container'>
			<div className='content__top'>
				<Categories
					items={['Мясные', 'Вегетарианская', 'Гриль', 'Острые', 'Закрытые']}
				/>
				<SortPopup
					items={[
						{ name: 'популярности', type: 'popular' },
						{ name: 'цене', type: 'price' },
						{ name: 'алфавиту', type: 'alphabet' },
					]}
				/>
			</div>
			<h2 className='content__title'>Все пиццы</h2>
			<div className='content__items'>
				{items && items.map((item) => <PizzaItem key={item.id} {...item} />)}
			</div>
		</div>
	);
};
