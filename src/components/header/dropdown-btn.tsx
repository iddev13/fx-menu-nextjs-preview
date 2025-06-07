'use client';

import { DropdownBtnType } from '@/types/header';
import { cn } from '@/lib/utils';

export const DropdownBtn = ({
	label,
	children,
	dropdownStatus,
	depthLevel,
}: DropdownBtnType) => {

	return (
		<div
			className={cn(
				'relative overflow-hidden',
				dropdownStatus && 'border-rose-500 border-b-2',
				depthLevel! > 0 && 'shadow-md'
			)}
		>
			<button
				type="button"
				className={cn(
					'capitalize w-full text-start px-2 py-3 overflow-hidden whitespace-nowrap text-ellipsis pr-5',
					dropdownStatus && 'bg-rose-500 text-white'
				)}
			>
				{label}
			</button>
			{children}
		</div>
	);
};
