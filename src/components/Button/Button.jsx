import React from 'react'
import cn from 'classnames'

export const Button = ({ className, ...props }) => {
	return (
		<button href='/cart.html' className={cn('button', className)}>
			{props.children}
		</button>

	)
}