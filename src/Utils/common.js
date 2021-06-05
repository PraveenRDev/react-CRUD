export const average = (numStringArray) =>
	(
		numStringArray
			.map((strGrade) => Number(strGrade))
			.reduce((p, c) => p + c, 0) / numStringArray.length
	).toFixed(3);

export const filterByName = (studentList, searchTerm) =>
	studentList.filter((student) =>
		`${student.firstName} ${student.lastName}`
			.toLowerCase()
			.includes(searchTerm.toLowerCase())
	);

export const filterByTag = (studentList, tagTerm) =>
	studentList.filter(
		(student) => student.tags && student.tags.join('').includes(tagTerm)
	);
