import React, { useEffect, useState } from 'react';
import ItemCard from './ItemCard';

function ItemsContainer({ search }) {
	const [items, setItems] = useState([]);
	const [sortBy, setSortBy] = useState('id');

	useEffect(() => {
		fetch('http://localhost:3000/items')
			.then((resp) => resp.json())
			.then(setItems);
	}, []);

	const filteredItems = items.filter((item) => {
		const lowercasedDescription = item.description.toLowerCase();
		const lowercasedLocation = item.location.toLowerCase();
		const lowercasedSearch = search.toLowerCase();

		return (
			lowercasedDescription.includes() ||
			lowercasedLocation.includes(lowercasedSearch)
		);
	});

	const sortedItems = filteredItems.sort((itemA, itemB) => {
		if (sortBy === 'id') {
			return itemA.id - itemB.id;
		} else {
			return itemA.location.localeCompare(itemB.location);
		}
	});

	const renderItems = sortedItems.map((item) => (
		<ItemCard key={item.id} item={item} setItems={setItems} />
	));

	return (
		<main>
			<button onClick={() => setSortBy('id')}>Sort By Default</button>
			<button onClick={() => setSortBy('location')}>Sort By Location</button>
			<ul className='cards'>{renderItems}</ul>
		</main>
	);
}

export default ItemsContainer;
