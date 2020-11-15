import React from 'react';
import { PageHeader, Tag, Typography, Row } from 'antd';
import Image from '../Image/Image';

const { Paragraph } = Typography;

const Workout = (props) => {
	const { data } = props;

	const { name, description, startDate, category, image } = data;

	let date = new Date(startDate);
	date = date.toLocaleDateString('en-US', { month: 'long' });

	return (
		<PageHeader
			title={name}
			subTitle={`Program starts in ${date}`}
			tags={<Tag>{category}</Tag>}
			onBack={() => window.history.back()}
		>
			<Row>
				<div style={{ flex: 1 }}>
					<Paragraph>{description}</Paragraph>
				</div>
				<div style={{ margin: 10 }}>
					<Image name={image} />
				</div>
			</Row>
		</PageHeader>
	);
};

export default Workout;
