import React from 'react';

function ItemCard({ item: { description, id, image, location }, setItems }) {
	return (
		<li className='card'>
			<div className='image'>
				<span className='price'>$0</span>
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
