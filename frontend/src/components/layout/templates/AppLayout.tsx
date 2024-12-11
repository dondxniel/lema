import { Outlet } from 'react-router';

export default function AppLayout() {
	return (
		<div className='w-layout max-w-[100vw] mx-auto my-32 px-5 lg:px-0'>
			<Outlet />
		</div>
	);
}
