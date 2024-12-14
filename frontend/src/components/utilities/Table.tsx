import { paginationPageSize } from '../../constants/table.constant';
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
			<div className='border rounded overflow-x-auto relative'>
				{loading ? (
					<div className='h-[330px] flex items-center justify-center'>
						<Loader />
					</div>
				) : (
					<table className='text-sm w-layout text-[#535862]'>
						<colgroup>
							{displayedFields?.map((field, i) => (
								<col key={i} style={{ width: field.width }} />
							))}
						</colgroup>

						<thead className='font-medium'>{headRow}</thead>
						<tbody>{bodyRows}</tbody>
					</table>
				)}
			</div>
			<div className='py-5 flex justify-center md:justify-end'>
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
