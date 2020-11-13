import React from 'react';
import { useParams } from 'react-router-dom';
import WorkoutList from '../components/WorkoutList/WorkoutList';
import Filters from '../components/Filters/Filters';

const ListPage = () => {
	const { page } = useParams;

	return (
		<>
			<Filters />
			<WorkoutList currentPage={page} />
		</>
	);
};

export default ListPage;
