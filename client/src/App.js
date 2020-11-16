import React, { useState } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import WorkoutPage from './containers/WorkoutPage';
import ListPage from './containers/ListPage';
import logo from './logo.png';

import classes from './App.module.css';
import { Layout } from 'antd';

const { Header, Footer, Content } = Layout;

function App() {
	const [filterByDate, setFilterByDate] = useState(null);
	const [filterByCategory, setFilterByCategory] = useState([]);

	const filters = {
		filterByDate,
		setFilterByDate,
		filterByCategory,
		setFilterByCategory,
	};

	const backgroundColor = '#f7f7f7';

	return (
		<>
			<Layout style={{ minHeight: '100vh', backgroundColor }}>
				<Header style={{ backgroundColor }}>
					<a href="/">
						<img src={logo} width="115" alt="logo" />
					</a>
				</Header>
				<Content className={classes.Content}>
					<Router>
						<Switch>
							<Route
								path="/workout/:id"
								children={<WorkoutPage />}
							/>
							<Route
								path="/:page"
								children={(routeProps) => (
									<ListPage {...routeProps} {...filters} />
								)}
							/>
							<Route
								path="*"
								children={(routeProps) => (
									<ListPage {...routeProps} {...filters} />
								)}
							/>
						</Switch>
					</Router>
				</Content>
				<Footer style={{ backgroundColor }}></Footer>
			</Layout>
		</>
	);
}

export default App;
