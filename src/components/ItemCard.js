import React from 'react';

function ItemCard({ item: { description, id, image, location, price }, setItems }) {
	return (
		<li className='card'>
			<div className='image'>
				<span className='price'>${price}</span>
				<img src={image} alt={description} />{' '}
			</div>
			<div className='details'>
				<strong>{description}</strong>
				<span> · {location}</span>
			</div>
		</li>
	);
}

export default ItemCard;
