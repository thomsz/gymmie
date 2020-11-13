import React, { useEffect, useState } from 'react';

const Image = (props) => {
	const { name } = props;

	const [image, setImage] = useState(null);

	useEffect(() => {
		(async () => {
			const loadedImage = await import(`../../images/${name}.svg`);
			setImage(loadedImage);
		})();
	}, []);

	const style = { width: '100%' };

	return image && <img style={style} src={image.default} alt={name} />;
};

export default Image;
