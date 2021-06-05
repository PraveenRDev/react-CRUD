import React, { useState } from 'react';
import styled from 'styled-components';
import Input from '../UI/Input';

const TagWrapper = styled.form`
	width: 17em;
	font-size: 0.6em;
`;

const TagList = styled.ul`
	display: flex;
	margin-bottom: 1em;
	margin-left: 0.3em;
`;

const TagItem = styled.li`
	background-color: #e0e0e0;
	color: black;
	margin-right: 0.3em;
	padding: 0.6em 0.5em;
	border-radius: 5px;
	font-size: 1.4em;
`;

function Tags({ allTags = [], addTag }) {
	const [tag, setTag] = useState('');

	const handleSubmit = (e) => {
		e.preventDefault();
		addTag(tag);
		setTag('');
	};

	const handleChange = (e) => {
		setTag(e.target.value);
	};
	return (
		<TagWrapper onSubmit={handleSubmit}>
			<TagList>
				{allTags &&
					allTags.length > 0 &&
					allTags.map((tag, i) => <TagItem key={i}>{tag}</TagItem>)}
			</TagList>
			<Input
				placeholder='Add a tag'
				styles={{
					marginTop: '0.1em',
					fontSize: '1.6em',
				}}
				onChange={handleChange}
				value={tag}
			/>
		</TagWrapper>
	);
}

export default Tags;
