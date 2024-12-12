import { useNavigate } from 'react-router';
// import { users } from '../../constants/dummy-data.constants';
import { useState } from 'react';
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
	const [page, setPage] = useState<string | number>(1);
	const { data: usersData, isLoading: loadingUsersData } = useGetUsers(
		page as number
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
				page={page}
				setPage={setPage}
				loading={loadingUsersData}
			/>
		</PageLayout>
	);
}
