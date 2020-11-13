import React from 'react';
import { Select, Space } from 'antd';

const { Option } = Select;

const Navigator = () => {
	const startDateFilterChangeHandler = (month) => {
		console.log('Filter by a new date', month);
	};

	const categoryFilterChangeHandler = (category) => {
		console.log('Filter by a category', category);
	};

	const children = [];
	for (let i = 10; i < 36; i++) {
		children.push(
			<Option key={i.toString(36) + i}>{i.toString(36) + i}</Option>
		);
	}

	return (
		<Space>
			<Select
				defaultValue="11"
				style={{ width: 120 }}
				onChange={startDateFilterChangeHandler}
			>
				<Option value="11">November</Option>
				<Option value="12">December</Option>
				<Option value="1">January</Option>
				<Option value="2">February</Option>
				<Option value="3">March</Option>
				<Option value="4">April</Option>
				<Option value="5">May</Option>
			</Select>
			<Select
				mode="multiple"
				allowClear
				maxTagCount={2}
				style={{ width: 240 }}
				placeholder="Filter by category"
				defaultValue={['b11', 'p25']}
				onChange={categoryFilterChangeHandler}
			>
				{children}
			</Select>
		</Space>
	);
};

export default Navigator;
