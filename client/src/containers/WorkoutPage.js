import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Skeleton, PageHeader, Row, Space, Image } from 'antd';
import { useParams } from 'react-router-dom';
import Workout from '../components/Workout/Workout';
import Fallback from '../components/Fallback/Fallback';

const WorkoutPage = () => {
	const { id } = useParams();

	const [data, setData] = useState(null);
	const [isLoading, setIsLoading] = useState(true);
	const [fallback, setFallback] = useState(false);

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

	const loaderStyle = {
		width: 35,
		margin: 'auto',
		position: 'fixed',
		top: '50%',
		left: '50%',
	};

	return isLoading ? (
		<div>
			<div style={loaderStyle}>
				<Image
					src="https://cdn4.service.prod.gymondo.io/frontend-pre-login/8/static/spinner-06185d90e9d9973fbd54543830da12f4.gif "
					alt=""
				/>
			</div>
			<PageHeader
				title={
					<Space>
						<Skeleton.Avatar active shape="square" />
						<Skeleton.Input style={{ width: 150 }} active />
					</Space>
				}
				subTitle={<Skeleton.Input style={{ width: 100 }} active />}
			/>
		</div>
	) : fallback ? (
		<PageHeader title="Go Back" onBack={() => window.history.back()}>
			<Fallback />
		</PageHeader>
	) : (
		<Workout data={data} />
	);
};

export default WorkoutPage;
