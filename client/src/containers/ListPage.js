import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import { Pagination, Skeleton, List } from 'antd';
import WorkoutList from '../components/WorkoutList/WorkoutList';
import Filters from '../components/Filters/Filters';

const ListPage = (props) => {
	const { page } = useParams();

	const [selectedPage, setSelectedPage] = useState(page);
	const [data, setData] = useState([]);
	const [totalItems, setTotalItems] = useState(0);
	const [isLoading, setIsLoading] = useState(false);
	const [filterMode, setFilterMode] = useState(false);

	useEffect(() => {
		(async () => {
			setIsLoading(true);

			try {
				const response = await axios.get(
					`${process.env.REACT_APP_API_URI}/workouts?page=${selectedPage}`
				);

				const { data, count } = response.data;

				if (response.status === 200 && data.length > 0) {
					const currentCount = filterMode ? count.data : count.total;
					setTotalItems(currentCount);
					setData(data);
				} else throw new Error('Could not fetch workouts');
			} catch (error) {
				console.error(error);
			}

			setIsLoading(false);
		})();
	}, [selectedPage]);

	const pageChangeHandler = (page) => {
		setSelectedPage(page);
		props.history.push(`/${page}`);
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
			<Filters />
			{isLoading ? <SkeletonList /> : <WorkoutList workouts={data} />}
			<Pagination
				current={(page && +page) || 1}
				defaultPageSize={20}
				total={totalItems}
				showTotal={(total, range) =>
					`Showing workouts ${range[0]}-${range[1]} (${total} total)`
				}
				showSizeChanger={false}
				onChange={(page) => pageChangeHandler(page)}
				size="small"
			/>
		</>
	);
};

export default ListPage;
