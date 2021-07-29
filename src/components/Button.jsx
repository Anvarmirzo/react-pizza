import React from 'react'
import cn from 'classnames'

export const Button = ({ className, children, ...props }) => {
	return (
		<button href='/cart.html' className={cn('button', className)}>
			{children}
		</button>

	)
}