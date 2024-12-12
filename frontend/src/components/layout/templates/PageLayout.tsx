import { IPageLayout } from '../../../types/layouts.types';
import { layoutTitleFontSize } from '../../../utils/layout.utils';

export default function PageLayout({
	children,
	title,
	titleSize,
}: IPageLayout) {
	return (
		<div className='space-y-6'>
			<div
				className={`${layoutTitleFontSize(
					titleSize
				)} mt-6 font-[500] text-[#181D27]`}
			>
				{title}
			</div>
			{children}
		</div>
	);
}
