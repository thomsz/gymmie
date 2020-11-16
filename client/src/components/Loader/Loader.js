import React from 'react';

import { Image } from 'antd';
import classes from './Loader.module.css';

const Loader = () => {
	return (
		<div className={classes.Loader}>
			<Image
				src="https://cdn4.service.prod.gymondo.io/frontend-pre-login/8/static/spinner-06185d90e9d9973fbd54543830da12f4.gif "
				alt=""
			/>
		</div>
	);
};

export default Loader;
