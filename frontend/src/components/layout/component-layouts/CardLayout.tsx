import { ICardLayoutProps } from '../../../types/layouts.types';
import { cardLayoutBorderType } from '../../../utils/layout.utils';

export default function CardLayout({
	children,
	borderType,
	title,
	top,
	onClick,
	className,
}: ICardLayoutProps) {
	return (
		<div
			onClick={onClick}
			className={`border ${cardLayoutBorderType(
				borderType
			)} rounded-lg p-6 pt-0 pr-2 text-sm flex flex-col ${
				onClick ? 'cursor-pointer' : ''
			} ${className}`}
		>
			{top && <div className='mb-4 ml-4'>{top}</div>}
			{title && (
				<div className='text-[18px] font-semibold mb-4'>{title}</div>
			)}
			<div
				className={`pr-4 w-full flex-1 flex flex-col overflow-hidden ${
					!top ? 'pt-4' : ''
				}`}
			>
				{children}
			</div>
		</div>
	);
}
