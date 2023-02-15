import React, { useState } from 'react';
import Header from './Header';
import ItemsContainer from './ItemsContainer';

function App() {
	const [search, setSearch] = useState('');

	return (
		<div className='app'>
			<Header setSearch={setSearch} />
			<ItemsContainer search={search} />
		</div>
	);
}

export default App;
