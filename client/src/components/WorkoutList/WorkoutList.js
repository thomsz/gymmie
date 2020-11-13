import React from 'react';
import { List } from 'antd';

const data = [
	{
		_id: {
			$oid: '5fae6093fc13ae17db000000',
		},
		name: 'Yoga Recover',
		description:
			'In hac habitasse platea dictumst. Aliquam augue quam, sollicitudin vitae, consectetuer eget, rutrum at, lorem. Integer tincidunt ante vel ipsum. Praesent blandit lacinia erat. Vestibulum sed magna at nunc commodo placerat.',
		startDate: {
			$date: '2019-10-11T21:00:00.000Z',
		},
		category: 'Beginner',
		image: 'meditation',
	},
	{
		_id: {
			$oid: '5fae6093fc13ae17db000000',
		},
		name: 'Yoga Recover',
		description:
			'In hac habitasse platea dictumst. Aliquam augue quam, sollicitudin vitae, consectetuer eget, rutrum at, lorem. Integer tincidunt ante vel ipsum. Praesent blandit lacinia erat. Vestibulum sed magna at nunc commodo placerat.',
		startDate: {
			$date: '2019-10-11T21:00:00.000Z',
		},
		category: 'Beginner',
		image: 'meditation',
	},
];

const WorkoutList = () => {
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
			dataSource={data}
			renderItem={(item) => (
				<List.Item
					key={item.title}
					extra={
						<img
							width={272}
							alt="logo"
							src="https://gw.alipayobjects.com/zos/rmsportal/mqaQswcyDLcXyDKnZfES.png"
						/>
					}
				>
					<List.Item.Meta
						title={<a href="#">{item.name}</a>}
						description={item.description}
					/>
					Content
				</List.Item>
			)}
		/>
	);
};

export default WorkoutList;
