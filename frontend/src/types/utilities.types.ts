import {
	ButtonHTMLAttributes,
	Dispatch,
	InputHTMLAttributes,
	ReactNode,
	SetStateAction,
	TextareaHTMLAttributes,
} from 'react';

export interface ITableProps {
	data: Record<string, string>[];
	dataCount: number;
	page: number | string;
	setPage:
		| ((_: number | string) => void)
		| Dispatch<SetStateAction<string | number>>;
	onRowClick?: Function | (() => void);
	displayedFields?: string[];
	loading: boolean;
}

export interface IPaginationProps {
	total: number;
	current: string | number;
	onPageChange: (_: number | string) => void;
	disable: boolean;
}

export type TButtonVariant = 'primary' | 'outline' | 'naked';
export interface IButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
	variant?: TButtonVariant;
	iconLeft?: ReactNode;
	iconRight?: ReactNode;
	loading?: boolean;
}

export interface IInputProps extends InputHTMLAttributes<HTMLInputElement> {
	label?: string;
}

export interface ITextareaProps
	extends TextareaHTMLAttributes<HTMLTextAreaElement> {
	label?: string;
}

export interface ILoaderProps {
	fullScreen?: boolean;
	className?: string;
}
