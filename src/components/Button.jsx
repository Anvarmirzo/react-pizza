import React from 'react';
import cn from 'classnames';

export const Button = ({ className, children, onClick }) => {
	return (
		<button
			onClick={onClick}
			href='/cart.html'
			className={cn('button', className)}
		>
			{children}
		</button>
	);
};
