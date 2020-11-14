import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import { Pagination } from 'antd';
import WorkoutList from '../components/WorkoutList/WorkoutList';
import Filters from '../components/Filters/Filters';

const ListPage = (props) => {
	const { page } = useParams();

	const [selectedPage, setSelectedPage] = useState(page);
	const [data, setData] = useState([]);
	const [isLoading, setIsLoading] = useState(false);

	useEffect(() => {
		(async () => {
			setIsLoading(true);

			try {
				const response = await axios.get(
					`${process.env.REACT_APP_API_URI}/workouts?page=${selectedPage}`
				);

				const { data } = response.data;

				if (response.status === 200 && data.length > 0) {
					setData(data);
				} else throw new Error('Could not fetch workouts');
			} catch (error) {
				console.error(error);
			}

			setIsLoading(false);
		})();
	}, [selectedPage]);

	const pageChangeHandler = (page) => {
		setSelectedPage(page);
		props.history.push(`/${page}`);
	};

	return (
		<>
			<Filters />
			{isLoading ? <h2>Loading...</h2> : <WorkoutList workouts={data} />}
			<Pagination
				defaultCurrent={page}
				total={50}
				onChange={(page) => pageChangeHandler(page)}
			/>
		</>
	);
};

export default ListPage;
