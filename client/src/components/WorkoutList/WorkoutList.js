import React from 'react';
import { Link } from 'react-router-dom';
import { List, Tag, Space } from 'antd';
import Image from '../Image/Image';
import { categories, getMonth } from '../../utils/utils';

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
					<Space>
						<div>Program starts in {getMonth(item.startDate)}</div>
						<Tag>{categories[item.category]}</Tag>
					</Space>
				</List.Item>
			)}
		/>
	);
};

export default WorkoutList;
