import { useState } from 'react';
import styled from 'styled-components';
import { average } from '../../Utils/common';
import Tags from '../Tags';

const Student = styled.div`
	display: flex;
	margin-top: 3em;
	border-bottom: 2px solid #f3f3f3;
	padding-bottom: 0.8em;
	padding-left: 3em;
	& > img {
		height: 12em;
		border: 1px solid #e2e2e2;
		border-radius: 50%;
	}
`;
const StudentInfo = styled.div`
	font-size: 1.8em;
	margin-left: 1em;
	width: 90%;
	& h3 {
		font-size: 2em;
		text-transform: uppercase;
		font-weight: 700;
		margin-bottom: 0.3em;
	}
	& > .primaryInfo {
		display: flex;
		justify-content: space-between;
		align-items: center;
		& > button {
			margin-right: 0.3em;
			border: none;
			outline: none;
			background: unset;
			font-size: 4em;
			font-family: inherit;
			color: #989898;
			:hover {
				color: #000;
				cursor: pointer;
			}
		}
	}
`;

const OtherInfo = styled.div`
	color: #989898;
	margin-left: 1em;
	& > .info {
		margin-bottom: 0.25em;
	}
	& .min-col {
		display: inline-block;
		width: 4.5em;
	}
	&.expandedList {
		margin: 1em;
	}
`;

function StudentItem({ student, addTag }) {
	const [expand, setExpand] = useState(false);
	const { firstName, lastName, email, company, skill, grades, pic } = student;
	return (
		<Student>
			<img src={pic} alt={`pic of ${firstName} ${lastName}`}></img>
			<StudentInfo>
				<div className='primaryInfo'>
					<h3>
						{firstName} {lastName}
					</h3>
					<button onClick={() => setExpand(!expand)}>
						{!expand ? '+' : '-'}
					</button>
				</div>
				<OtherInfo>
					<div className='info'>Email: {email}</div>
					<div className='info'>Company: {company}</div>
					<div className='info'>Skill: {skill}</div>
					<div className='info'>
						<span className='min-col'>Average:</span>
						{average(grades)}%
					</div>
				</OtherInfo>
				<OtherInfo ul className='otherInfo expandedList'>
					{expand &&
						grades &&
						grades.length > 0 &&
						grades.map((grade, i) => (
							<li key={i}>
								<span className='min-col'>{`Test ${i + 1}:`}</span>
								<span>{`${grade}%`}</span>
							</li>
						))}
				</OtherInfo>
				<OtherInfo>
					<Tags
						allTags={student.tags}
						addTag={(tag) => addTag(student.id, tag)}
					/>
				</OtherInfo>
			</StudentInfo>
		</Student>
	);
}

export default StudentItem;
