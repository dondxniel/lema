import { Outlet } from 'react-router';

export default function AppLayout() {
	return (
		<div className='w-layout max-w-[100vw] mx-auto my-32 max-[600px]:px-5 px-32 lg:px-0'>
			<Outlet />
		</div>
	);
}
