import { BrowserRouter, Route, Routes } from 'react-router';
import routesConstant from './constants/routes.constant';
import { IRoute } from './types/routes.types';

function App() {
	function returnRoute(route: IRoute) {
		if (route?.children)
			return (
				<Route key={route.id} element={route.component}>
					{route.children.map((r) => returnRoute(r))}
				</Route>
			);
		return (
			<Route
				key={route.id}
				index={!!route?.index}
				path={route?.path}
				element={route.component}
			/>
		);
	}

	return (
		<BrowserRouter>
			<Routes>{routesConstant.map((route) => returnRoute(route))}</Routes>
		</BrowserRouter>
	);
}

export default App;
