import React from 'react';
import { PageHeader, Tag, Typography, Row } from 'antd';
import Image from '../Image/Image';

const { Paragraph } = Typography;

const Workout = () => {
	return (
		<PageHeader
			title="Yoga Express"
			tags={<Tag>Jogging</Tag>}
			onBack={() => window.history.back()}
		>
			<Row>
				<div style={{ flex: 1 }}>
					<Paragraph>
						This is some information about this workout.
					</Paragraph>
				</div>
				<div style={{ margin: 10 }}>
					<Image name={'bike'} />
				</div>
			</Row>
		</PageHeader>
	);
};

export default Workout;
