import React from 'react';
import * as IconListing from './icon-listing';

export const icons = {
	rightArrow: 'RightArrow',
	clock: 'Clock',
	award: 'Award',
	price: 'Price',
	simpleCheck: 'SimpleCheck'
};

const Icon = (icon, type) => {
	const name = icons[icon];
	const Component = IconListing[name];
	return <Component type={type} />;
};

const IconMapper = (name, style = 'glyph') => Icon(name, style);

export default IconMapper;