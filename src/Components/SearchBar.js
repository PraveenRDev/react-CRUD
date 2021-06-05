import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import Input from '../UI/Input';

const SearchWrapper = styled.form`
	width: 98%;
	margin: 0 auto;
`;

function SearchBar({ placeholder, search }) {
	const [searchTerm, setSearchTerm] = useState('');

	const handleSubmit = (e) => {
		e.preventDefault();
		search(searchTerm);
	};

	const handleChange = (e) => {
		setSearchTerm(e.target.value);
	};

	useEffect(() => {
		search(searchTerm);
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [searchTerm]);

	return (
		<SearchWrapper onSubmit={handleSubmit}>
			<Input
				placeholder={placeholder}
				value={searchTerm}
				onChange={handleChange}
				styles={{
					marginTop: '1.2em',
					fontSize: '1.8em',
				}}
			/>
		</SearchWrapper>
	);
}

export default SearchBar;
