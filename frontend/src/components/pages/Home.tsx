import { useNavigate } from 'react-router';
// import { users } from '../../constants/dummy-data.constants';
import { useQueryState } from 'nuqs';
import pageRoutes from '../../constants/page-routes';
import { displayedFields } from '../../constants/table.constant';
import {
	useGetUsers,
	useGetUsersCount,
} from '../../hooks/api-integration/tanstack/queries';
import { IUser } from '../../types/api-responses/users.types';
import PageLayout from '../layout/templates/PageLayout';
import Loader from '../utilities/Loader';
import Table from '../utilities/Table';

export default function Home() {
	const [page, setPage] = useQueryState('page', {
		defaultValue: 1,
		parse: Number,
	});
	const { data: usersData, isLoading: loadingUsersData } = useGetUsers(
		Number(page)
	);
	const { data: countData, isLoading: loadingUsersCount } =
		useGetUsersCount();

	const navigate = useNavigate();

	const users = usersData?.users || [];

	if (loadingUsersCount || !countData) return <Loader fullScreen />;

	return (
		<PageLayout title='Users' titleSize='lg'>
			<Table
				data={users as unknown as Record<string, string>[]}
				displayedFields={displayedFields}
				onRowClick={(user: IUser) =>
					navigate(pageRoutes.userPosts(user?.id))
				}
				dataCount={countData?.count}
				page={Number(page)}
				setPage={(newPage: number | string) =>
					setPage(newPage as number)
				}
				loading={loadingUsersData}
			/>
		</PageLayout>
	);
}
