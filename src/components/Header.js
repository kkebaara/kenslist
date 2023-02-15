import React from 'react';
import Search from './Search';

function Header({ setSearch }) {
	return (
		<header>
			<h1>
				<span className='logo' role='img'>
					☮
				</span>
				KENSLIST
			</h1>
			<Search setSearch={setSearch} />
		</header>
	);
}

export default Header;
