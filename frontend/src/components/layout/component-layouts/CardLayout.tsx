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
			className={`border border-[#D5D7DA] relative space-y-4 ${cardLayoutBorderType(
				borderType
			)} rounded-lg p-6 pb-[17px] text-sm flex flex-col ${
				onClick ? 'cursor-pointer' : ''
			} ${className}`}
		>
			{title && <div className='text-[18px] font-[500]'>{title}</div>}
			<div className={`w-full flex-1 flex flex-col overflow-hidden`}>
				{children}
			</div>
			{top && <div className='absolute -top-1.5 right-1.5'>{top}</div>}
		</div>
	);
}
