import classes from './App.module.css';
import { Layout } from 'antd';
import ListPage from './containers/ListPage';
import WorkoutPage from './containers/WorkoutPage';
import Navigator from './components/Navigator/Navigator';

const { Header, Footer, Content } = Layout;

function App() {
	return (
		<div>
			<Layout style={{ minHeight: '100vh' }}>
				<Header style={{ backgroundColor: '#F0F2F5' }}>Logo</Header>
				<Content className={classes.Content}>
					<Navigator />
					<ListPage />
					<WorkoutPage />
				</Content>
				<Footer>Footer</Footer>
			</Layout>
		</div>
	);
}

export default App;
