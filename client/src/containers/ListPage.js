import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import apiUrl from '../utils/apiManager';

import WorkoutList from '../components/WorkoutList/WorkoutList';
import Fallback from '../components/Fallback/Fallback';
import Filters from '../components/Filters/Filters';

import { default as scroll } from 'animated-scroll-to';
import { Pagination, Skeleton, List } from 'antd';

const ListPage = (props) => {
	const { page } = useParams();

	const {
		filterByDate,
		setFilterByDate,
		filterByCategory,
		setFilterByCategory,
	} = props;

	const [isLoading, setIsLoading] = useState(false);
	const [fallback, setFallback] = useState(false);
	const [totalItems, setTotalItems] = useState(0);
	const [data, setData] = useState([]);

	useEffect(() => {
		(async () => {
			setIsLoading(true);

			// Set filtering by date
			let filterQuery = filterByDate ? `&month=${filterByDate}` : '';

			// Set filtering by categories
			filterQuery +=
				filterByCategory.length > 0
					? `&category=${filterByCategory.join(',')}`
					: '';

			// Fetch workouts
			try {
				const response = await axios.get(
					`${apiUrl}/workouts?page=${page}${filterQuery}`
				);

				const { data, count } = response.data;

				if (response.status === 200 && data.length > 0) {
					// Set data count according to filters
					const currentCount =
						filterByDate || filterByCategory.length > 0
							? count.data
							: count.total;

					setTotalItems(currentCount);
					setData(data);
				} else throw new Error('Could not fetch workouts');
			} catch (error) {
				setFallback(true);
				console.error(error);
			}

			setIsLoading(false);
		})();
	}, [page, filterByDate, filterByCategory]);

	const filterChangeHandler = () => {
		// Reset to first page when filter changes
		props.history.push('/1');
	};

	const pageChangeHandler = (page) => {
		props.history.push(`/${page}`);

		// Scroll up (position 0)
		scroll(0, { speed: 500 });
	};

	const SkeletonList = () => {
		const skeletons = [];
		for (let i = 1; i <= 20; i++) {
			skeletons.push(i);
		}

		return (
			<List
				itemLayout="vertical"
				size="large"
				dataSource={skeletons}
				renderItem={(item) => (
					<List.Item
						key={item}
						extra={
							<Skeleton.Image
								active
								style={{ width: 272, height: 170 }}
							/>
						}
					>
						<Skeleton active />
					</List.Item>
				)}
			/>
		);
	};

	return (
		<>
			<Filters
				filterByDate={filterByDate}
				setFilterByDate={setFilterByDate}
				filterByCategory={filterByCategory}
				setFilterByCategory={setFilterByCategory}
				onFilterChange={filterChangeHandler}
			/>
			{isLoading ? (
				<SkeletonList />
			) : fallback ? (
				<Fallback />
			) : (
				<WorkoutList workouts={data} />
			)}
			{totalItems > 20 && (
				<Pagination
					size="small"
					defaultPageSize={20}
					current={(page && +page) || 1}
					total={totalItems}
					showSizeChanger={false}
					onChange={(page) => pageChangeHandler(page)}
					showTotal={(total, range) =>
						`Showing workouts ${range[0]}-${range[1]} (${total} total)`
					}
				/>
			)}
		</>
	);
};

export default ListPage;
