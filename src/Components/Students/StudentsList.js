import styled from 'styled-components';
import SearchBar from '../SearchBar';
import StudentItem from './StudentItem';

const StudentsListWrapper = styled.div`
	background-color: #fff;
	width: 50%;
	height: 90%;
	margin: 0 auto;
	overflow-y: scroll;
	border-radius: 1.2em;
	box-shadow: 1px 1px 10px #e2e2e2;
	scroll-behavior: smooth;
	::-webkit-scrollbar {
		width: 0; /* Remove scrollbar space */
		background: transparent; /* Optional: just make scrollbar invisible */
	}
`;

function StudentsList({ students = [], search, searchTags, addTag }) {
	return (
		<StudentsListWrapper>
			<SearchBar placeholder='Search by name' search={search} />
			<SearchBar placeholder='Search by tag' search={searchTags} />
			{students &&
				students.length > 0 &&
				students.map((student) => (
					<StudentItem key={student.id} student={student} addTag={addTag} />
				))}
		</StudentsListWrapper>
	);
}

export default StudentsList;
