import React from 'react';
import ContentLoader from 'react-content-loader';

export const Loader = () => (
	<ContentLoader
		speed={2}
		width={280}
		height={460}
		viewBox='0 0 280 460'
		backgroundColor='#f3f3f3'
		foregroundColor='#ecebeb'
		className='mx-auto'
	>
		<circle cx='138' cy='121' r='112' />
		<rect x='0' y='254' rx='3' ry='3' width='280' height='29' />
		<rect x='0' y='305' rx='6' ry='6' width='280' height='89' />
		<rect x='1' y='410' rx='3' ry='3' width='119' height='36' />
		<rect x='150' y='410' rx='3' ry='3' width='123' height='36' />
	</ContentLoader>
);
