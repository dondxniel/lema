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
						<Button
							className='p-1'
							onClick={() => setShowDeleteConfirmation(true)}
						>
							<Trash color='red' size={18} />
						</Button>
					</div>
				}
				className='h-[300px] overflow-hidden flex flex-col shadow-card'
			>
				<div className='line-clamp-[10] text-ellipsis'>{post.body}</div>
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
