import React from 'react';
import { Select, PageHeader } from 'antd';
import { months } from '../../utils/utils';

const { Option } = Select;

const Filters = (props) => {
	const { filterByDate, setFilterByDate } = props;

	const startDateFilterChangeHandler = (month) => {
		setFilterByDate(month + 1);
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
		const date = new Date();
		const currentMonth = date.getMonth();

		let options = [];
		for (let i = 0; i < 12; i++) {
			const runningMonth = currentMonth + i;
			const month = runningMonth >= 12 ? runningMonth - 12 : runningMonth;
			options.push({ id: month, label: months[month] });
		}

		options = options.map((option) => (
			<Option key={option.label} value={option.id}>
				{option.label}
			</Option>
		));

		const getMonthValue = filterByDate ? filterByDate - 1 : null;

		return [
			<Select
				defaultValue={getMonthValue}
				style={{ width: 240 }}
				placeholder="Filter by Starting Date"
				onChange={startDateFilterChangeHandler}
				onClear={() => setFilterByDate(null)}
				key="startDateFilter"
				allowClear
			>
				{options}
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
