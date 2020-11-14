import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import Workout from '../components/Workout/Workout';

const WorkoutPage = () => {
	const { id } = useParams();

	const [data, setData] = useState(null);
	const [isLoading, setIsLoading] = useState(true);

	useEffect(() => {
		(async () => {
			setIsLoading(true);

			try {
				const response = await axios.get(
					`${process.env.REACT_APP_API_URI}/workouts/${id}`
				);

				if (response.status === 200) {
					setData(response.data);
				} else throw new Error('Could not fetch workout');
			} catch (error) {
				console.error(error);
			}

			setIsLoading(false);
		})();
	}, []);

	return isLoading ? <h2>Loading...</h2> : <Workout data={data} />;
};

export default WorkoutPage;
