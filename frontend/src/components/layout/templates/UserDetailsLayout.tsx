import { ArrowLeft } from '@phosphor-icons/react';
import { Outlet, useNavigate } from 'react-router';
import Button from '../../utilities/Button';

export default function UserDetailsLayout() {
	const nav = useNavigate();
	return (
		<div>
			<Button
				iconLeft={<ArrowLeft weight='bold' />}
				onClick={() => nav(-1)}
			>
				Back to Users
			</Button>
			<Outlet />
		</div>
	);
}
