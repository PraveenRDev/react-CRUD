import { useState, useEffect } from 'react';
import styled from 'styled-components';
import axios from 'axios';
import { API_URL, STATUS_CODES } from './Utils/constats';
import { filterByName, filterByTag } from './Utils/common';
import StudentsList from './Components/Students/StudentsList';

const AppWrapper = styled.main`
	display: flex;
	align-items: center;
	justify-content: center;
	height: 100vh;
`;

function App() {
	const [allStudents, setSAlltudents] = useState([]);
	const [filteredStudents, setFilteredStudents] = useState([]);

	const [searchTerm, setSearchTerm] = useState(null);
	const [tagTerm, setTagTerm] = useState(null);

	useEffect(() => {
		// Fetch Data with an asynchronous function when component mounts to the virtual dom
		(async () => {
			const response = await axios.get(API_URL);
			if (
				response &&
				response.status === STATUS_CODES.SUCCESS &&
				response.data &&
				response.data.students &&
				response.data.students.length > 0
			) {
				setSAlltudents(response.data.students);
			}
		})();
	}, []);

	useEffect(() => {
		let studentList = [...allStudents];
		if (tagTerm) {
			if (searchTerm) {
				studentList = filterByName(studentList, searchTerm);
			}
			studentList = filterByTag(studentList, tagTerm);
		}
		if (searchTerm) {
			if (tagTerm) {
				studentList = filterByTag(studentList, tagTerm);
			}
			studentList = filterByName(studentList, searchTerm);
		}
		setFilteredStudents(studentList);
	}, [allStudents, searchTerm, tagTerm]);

	const addTag = (studentId, tag) => {
		if (tag && tag.trim().length > 0) {
			const studentListWithTag = allStudents.map((student) => {
				let tags = student.tags || null;
				if (student.id === studentId) {
					tags = tags ? [...student.tags, tag] : [tag];
				}
				return { ...student, tags };
			});
			setSAlltudents(studentListWithTag);
		}
	};

	const searchTags = (tag) =>
		tag.trim().length > 0 ? setTagTerm(tag) : setTagTerm(null);
	const search = (student) =>
		student.trim().length > 0 ? setSearchTerm(student) : setSearchTerm(null);

	return (
		<AppWrapper>
			<StudentsList
				search={search}
				searchTags={searchTags}
				students={filteredStudents}
				addTag={addTag}
			/>
		</AppWrapper>
	);
}

export default App;
