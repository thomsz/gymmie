import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';

import Fallback from '../components/Fallback/Fallback';
import Workout from '../components/Workout/Workout';
import Loader from '../components/Loader/Loader';

import { Skeleton, PageHeader, Space } from 'antd';

const WorkoutPage = () => {
	const { id } = useParams();

	const [isLoading, setIsLoading] = useState(true);
	const [fallback, setFallback] = useState(false);
	const [data, setData] = useState(null);

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
				setFallback(true);
				console.error(error);
			}

			setIsLoading(false);
		})();
	}, []);

	return isLoading ? (
		<>
			<Loader />
			<PageHeader
				title={
					<Space>
						<Skeleton.Avatar active shape="square" />
						<Skeleton.Input style={{ width: 150 }} active />
					</Space>
				}
				subTitle={<Skeleton.Input style={{ width: 100 }} active />}
			/>
		</>
	) : fallback ? (
		<PageHeader title="Go Back" onBack={() => window.history.back()}>
			<Fallback />
		</PageHeader>
	) : (
		<Workout data={data} />
	);
};

export default WorkoutPage;
