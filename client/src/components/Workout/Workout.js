import React from 'react';
import { categories, getMonth } from '../../utils/utils';

import Image from '../Image/Image';

import { PageHeader, Tag, Typography, Row } from 'antd';

const { Paragraph } = Typography;

const Workout = (props) => {
	const { data } = props;

	const { name, description, startDate, category, image } = data;

	return (
		<PageHeader
			title={name}
			subTitle={`Program starts in ${getMonth(startDate)}`}
			tags={<Tag>{categories[category]}</Tag>}
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
