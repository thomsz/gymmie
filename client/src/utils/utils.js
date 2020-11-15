export const months = [
	'January',
	'February',
	'March',
	'April',
	'May',
	'June',
	'July',
	'August',
	'September',
	'October',
	'November',
	'December',
];

export const categories = {
	c1: 'Lose Fat',
	c2: 'Get Toned',
	c3: 'Gain Strength',
	c4: 'Increase Flexibility',
	c5: 'Beginner',
	c6: 'Intermediate',
	c7: 'Advanced',
};

export const getMonth = (date) => {
	date = new Date(date);
	return date.toLocaleDateString('en-US', { month: 'long' });
};
