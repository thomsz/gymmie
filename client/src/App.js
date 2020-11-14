import classes from './App.module.css';
import { Layout } from 'antd';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import ListPage from './containers/ListPage';
import WorkoutPage from './containers/WorkoutPage';

const { Header, Footer, Content } = Layout;

function App() {
	return (
		<div>
			<Layout style={{ minHeight: '100vh' }}>
				<Header style={{ backgroundColor: '#F0F2F5' }}>Logo</Header>
				<Content className={classes.Content}>
					<Router>
						<Switch>
							<Route
								path="/workout/:name"
								children={<WorkoutPage />}
							/>
							<Route
								path="/:page"
								children={(routeProps) => (
									<ListPage {...routeProps} />
								)}
							/>
							<Route path="*">
								<ListPage />
							</Route>
						</Switch>
					</Router>
				</Content>
				<Footer>Footer</Footer>
			</Layout>
		</div>
	);
}

export default App;
