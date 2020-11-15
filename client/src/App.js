import React, { useState } from 'react';
import classes from './App.module.css';
import { Layout } from 'antd';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import ListPage from './containers/ListPage';
import WorkoutPage from './containers/WorkoutPage';
import logo from './logo.png';

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

	return (
		<div>
			<Layout style={{ minHeight: '100vh', backgroundColor: '#f7f7f7' }}>
				<Header style={{ backgroundColor: '#f7f7f7' }}>
					<img src={logo} width="115" alt="logo" />
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
				<Footer style={{ backgroundColor: '#f7f7f7' }}></Footer>
			</Layout>
		</div>
	);
}

export default App;
