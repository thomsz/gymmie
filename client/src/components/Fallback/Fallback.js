import React from 'react';
import Image from '../Image/Image';

import { Result } from 'antd';

const Fallback = () => {
	return (
		<Result
			icon={
				<div style={{ width: 240, margin: 'auto' }}>
					<Image name="no-data" />
				</div>
			}
			title="Couldn't find the workout you were looking for!"
		/>
	);
};

export default Fallback;
