import React from 'react';
import { Link } from 'react-router-dom';
import { Select, PageHeader, Space } from 'antd';

import { months, categories } from '../../utils/utils';

const { Option } = Select;

const Filters = (props) => {
	const {
		filterByDate,
		setFilterByDate,
		filterByCategory,
		setFilterByCategory,
		onFilterChange,
	} = props;

	const startDateFilterChangeHandler = (month) => {
		// month + 1 correction because of array indexing
		setFilterByDate(month + 1);
		onFilterChange();
	};

	const categoryFilterChangeHandler = (categories) => {
		setFilterByCategory(categories);
		onFilterChange();
	};

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

		const children = Object.keys(categories).map((id) => {
			return (
				<Option key={categories[id]} value={id}>
					{categories[id]}
				</Option>
			);
		});

		// Month value correction for <select> element
		const getMonthValue = filterByDate ? filterByDate - 1 : null;

		const selectStyle = { width: 240 };

		return (
			<Space>
				<Select
					allowClear
					key="startDateFilter"
					style={selectStyle}
					placeholder="Filter by Starting Date"
					defaultValue={getMonthValue}
					onChange={startDateFilterChangeHandler}
					onClear={() => setFilterByDate(null)}
				>
					{options}
				</Select>
				<Select
					allowClear
					mode="multiple"
					maxTagCount={2}
					key="categoryFilter"
					placeholder="Filter by category"
					style={selectStyle}
					defaultValue={filterByCategory}
					onChange={categoryFilterChangeHandler}
				>
					{children}
				</Select>
			</Space>
		);
	};

	return (
		<PageHeader title={<Link to="/">Workouts</Link>} extra={<Extra />} />
	);
};

export default Filters;
