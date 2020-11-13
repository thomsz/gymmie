import React from 'react';
import { Select } from 'antd';

const { Option } = Select;

const Navigator = () => {
	const startDateChangeHandler = (month) => {
		console.log('Filter by a new date', month);
	};

	return (
		<div>
			<Select
				defaultValue="11"
				style={{ width: 120 }}
				onChange={startDateChangeHandler}
			>
				<Option value="11">November</Option>
				<Option value="12">December</Option>
				<Option value="1">January</Option>
				<Option value="2">February</Option>
				<Option value="3">March</Option>
				<Option value="4">April</Option>
				<Option value="5">May</Option>
			</Select>
		</div>
	);
};

export default Navigator;
