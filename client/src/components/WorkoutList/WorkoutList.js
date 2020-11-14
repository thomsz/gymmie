import React from 'react';
import { Link } from 'react-router-dom';
import { List } from 'antd';
import Image from '../Image/Image';

const WorkoutList = (props) => {
	const { workouts } = props;

	return (
		<List
			itemLayout="vertical"
			size="large"
			dataSource={workouts}
			renderItem={(item) => (
				<List.Item
					key={item._id}
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
