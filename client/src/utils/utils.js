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

// Extract month string from date string
export const getMonth = (date) => {
	date = new Date(date);
	return date.toLocaleDateString('en-US', { month: 'long' });
};

export const excerpt = (string) => {
	const max = 250;
	if (string.length > max) {
		let trimmed = string.substr(0, max);

		return trimmed.substr(
			0,
			Math.min(trimmed.length, trimmed.lastIndexOf('.'))
		);
	}

	return string;
};
