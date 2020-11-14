import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import { List } from 'antd';
import Image from '../Image/Image';

const WorkoutList = () => {
	const [workouts, setWorkouts] = useState([]);

	useEffect(() => {
		(async () => {
			try {
				const response = await axios.get(
					`${process.env.REACT_APP_API_URI}/workouts`
				);

				if (response.status === 200 && response.data.length > 0) {
					setWorkouts(response.data);
				} else throw new Error('Could not fetch workouts');
			} catch (error) {
				console.error(error);
			}
		})();
	}, []);

	return (
		<List
			itemLayout="vertical"
			size="large"
			pagination={{
				onChange: (page) => {
					console.log('Fetch new page from API');
				},
				pageSize: 3,
			}}
			dataSource={workouts}
			renderItem={(item) => (
				<List.Item
					key={item.name}
					extra={
						<div style={{ width: 272 }}>
							<Image name={item.image} />
						</div>
					}
				>
					<List.Item.Meta
						title={
							<Link to={`/workout/${item._id}`}>{item.name}</Link>
						}
						description={item.description}
					/>
					Content
				</List.Item>
			)}
		/>
	);
};

export default WorkoutList;
