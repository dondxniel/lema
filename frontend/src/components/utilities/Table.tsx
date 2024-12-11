import { paginationPageSize } from '../../constants/config';
import useTable from '../../hooks/component-logic/useTable';
import { ITableProps } from '../../types/utilities.types';
import Loader from './Loader';
import Pagination from './Pagination';

export default function Table({
	data,
	onRowClick,
	displayedFields,
	page,
	setPage,
	dataCount,
	loading,
}: ITableProps) {
	const { headRow, bodyRows } = useTable(data, onRowClick, displayedFields);
	const totalPages = dataCount / paginationPageSize - 1;
	if (
		!data ||
		!Array.isArray(data) ||
		!data.every((d) => typeof d === 'object')
	)
		return null;

	return (
		<div>
			<div className='border rounded overflow-x-auto'>
				{loading ? (
					<div className='h-[400px] flex items-center justify-center'>
						<Loader />
					</div>
				) : (
					<table className='text-sm w-layout'>
						<thead>{headRow}</thead>
						<tbody>{bodyRows}</tbody>
					</table>
				)}
			</div>
			<div className='py-5 flex justify-end'>
				<Pagination
					disable={loading}
					total={totalPages}
					current={page}
					onPageChange={setPage}
				/>
			</div>
		</div>
	);
}
