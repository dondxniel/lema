import AppLayout from '../components/layout/templates/AppLayout';
import UserDetailsLayout from '../components/layout/templates/UserDetailsLayout';
import Home from '../components/pages/Home';
import UserPosts from '../components/pages/UserPosts';
import { IRoute } from '../types/routes.types';
import pageRoutes from './page-routes';

const routes: IRoute[] = [
	{
		id: 1,
		component: <AppLayout />,
		children: [
			{
				id: 11,
				index: true,
				component: <Home />,
			},
			{
				id: 12,
				component: <UserDetailsLayout />,
				children: [
					{
						id: 1,
						index: true,
						path: pageRoutes.userPosts(),
						component: <UserPosts />,
					},
				],
			},
		],
	},
];

export default routes;
