import { ArrowLeft, ArrowRight } from '@phosphor-icons/react';
import { IPaginationProps } from '../../types/utilities.types';
import { generatePagination } from '../../utils/pagination.utils';
import Button from './Button';

const Pagination = ({
	total,
	current,
	onPageChange,
	disable,
}: IPaginationProps) => {
	const pages = generatePagination(total, current as number);

	return (
		<div
			className={`text-[#717680] text-sm flex items-center justify-center space-x-2 ${
				disable && 'opacity-50'
			}`}
		>
			<Button
				onClick={() => onPageChange((current as number) - 1)}
				disabled={current === 1 || disable}
				iconLeft={<ArrowLeft weight='bold' />}
			>
				Previous
			</Button>

			{pages.map((page, index) =>
				page === '...' ? (
					<span key={index} className='px-2'>
						...
					</span>
				) : (
					<Button
						key={index}
						className={`py-2 px-4 rounded ${
							current === page ? 'bg-[#F9F5FF]' : ''
						}`}
						onClick={() => onPageChange(page)}
						disabled={disable}
					>
						{page}
					</Button>
				)
			)}

			<Button
				onClick={() => onPageChange((current as number) + 1)}
				disabled={current === total || disable}
				iconRight={<ArrowRight weight='bold' />}
			>
				Next
			</Button>
		</div>
	);
};

export default Pagination;
