import React from 'react';
import { useParams } from 'react-router-dom';
import Workout from '../components/Workout/Workout';

const WorkoutPage = () => {
	const { name } = useParams();

	return <Workout current={name} />;
};

export default WorkoutPage;
