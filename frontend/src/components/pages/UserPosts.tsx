import { Dot } from '@phosphor-icons/react';
import { useParams } from 'react-router';
import { useGetUserPosts } from '../../hooks/api-integration/tanstack/queries';
import AddPostCard from '../cards/AddPostCard';
import PostCard from '../cards/PostCard';
import PageLayout from '../layout/templates/PageLayout';
import Loader from '../utilities/Loader';

export default function UserPosts() {
	const { id } = useParams();
	const { data, isLoading } = useGetUserPosts(id);

	if (!id) return null;

	if (isLoading || !data) return <Loader fullScreen />;

	const posts = data?.posts || [];
	const user = data?.user;

	return (
		<PageLayout title={user?.name} titleSize='md'>
			<div className='text-sm flex items-center'>
				<div>{user?.email}</div>
				<Dot size={20} weight='bold' />
				<div className='font-semibold'>{posts.length} posts</div>
			</div>
			<div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'>
				<AddPostCard userId={id} />
				{posts.map((item) => (
					<PostCard key={item.id} post={item} userId={id} />
				))}
			</div>
		</PageLayout>
	);
}
