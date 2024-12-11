import { Trash } from '@phosphor-icons/react';
import { useState } from 'react';
import { IPostCardProps } from '../../types/card.types';
import CardLayout from '../layout/component-layouts/CardLayout';
import DeleteConfirmationModal from '../modals/DeleteConfirmationModal';
import Button from '../utilities/Button';

export default function PostCard({ post, userId }: IPostCardProps) {
	const [showDeleteConfirmation, setShowDeleteConfirmation] = useState(false);
	return (
		<>
			<CardLayout
				title={post.title}
				top={
					<div className='flex justify-end'>
						<Button onClick={() => setShowDeleteConfirmation(true)}>
							<Trash color='red' />
						</Button>
					</div>
				}
				className='h-[270px] overflow-hidden flex flex-col '
			>
				<div className='line-clamp-[6] overflow-hidden'>
					{post.body}
				</div>
			</CardLayout>
			<DeleteConfirmationModal
				id={post.id}
				userId={userId}
				open={showDeleteConfirmation}
				setOpen={setShowDeleteConfirmation}
			/>
		</>
	);
}
