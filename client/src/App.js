import classes from './App.module.css';
import { Layout } from 'antd';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import ListPage from './containers/ListPage';
import WorkoutPage from './containers/WorkoutPage';

const { Header, Footer, Content } = Layout;

function App() {
	return (
		<div>
			<Layout style={{ minHeight: '100vh', backgroundColor: '#f7f7f7' }}>
				<Header style={{ backgroundColor: '#f7f7f7' }}>Logo</Header>
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
									<ListPage {...routeProps} />
								)}
							/>
							<Route
								path="*"
								children={(routeProps) => (
									<ListPage {...routeProps} />
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
