import React from 'react';
import { Select, PageHeader } from 'antd';

const { Option } = Select;

const Filters = () => {
	const startDateFilterChangeHandler = (month) => {
		console.log('Filter by a new date', month);
	};

	const categoryFilterChangeHandler = (category) => {
		console.log('Filter by a category', category);
	};

	// mock categories
	const children = [];
	for (let i = 10; i < 36; i++) {
		children.push(
			<Option key={i.toString(20) + i}>{i.toString(20) + i}</Option>
		);
	}

	const Extra = () => {
		return [
			<Select
				defaultValue="11"
				style={{ width: 120 }}
				onChange={startDateFilterChangeHandler}
				key="startDateFilter"
			>
				<Option value="11">November</Option>
				<Option value="12">December</Option>
				<Option value="1">January</Option>
				<Option value="2">February</Option>
				<Option value="3">March</Option>
				<Option value="4">April</Option>
				<Option value="5">May</Option>
			</Select>,
			<Select
				mode="multiple"
				allowClear
				maxTagCount={2}
				style={{ width: 240 }}
				placeholder="Filter by category"
				defaultValue={['b11', 'p25']}
				onChange={categoryFilterChangeHandler}
				key="categoryFilter"
			>
				{children}
			</Select>,
		];
	};

	return <PageHeader title="Workouts" extra={<Extra />} />;
};

export default Filters;
