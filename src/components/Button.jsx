import React from 'react';
import cn from 'classnames';

export const Button = ({ className, children, onClick }) => {
	return (
		<button onClick={onClick} className={cn('button', className)}>
			{children}
		</button>
	);
};
