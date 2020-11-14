import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Skeleton, PageHeader, Row, Space } from 'antd';
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

	return isLoading ? (
		<div>
			<PageHeader
				title={
					<Space>
						<Skeleton.Avatar active shape="square" />
						<Skeleton.Input style={{ width: 150 }} active />
					</Space>
				}
				subTitle={<Skeleton.Input style={{ width: 100 }} active />}
			>
				<Row>
					<div style={{ flex: 1 }}>
						<Skeleton active />
					</div>
					<div style={{ margin: 10 }}>
						<Skeleton active />
					</div>
				</Row>
			</PageHeader>
		</div>
	) : (
		<Workout data={data} />
	);
};

export default WorkoutPage;
