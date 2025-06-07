'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useMedia } from 'react-use';

import { SubMenuLinkType } from '@/types/header';
import { useOpenMobileNav } from '@/hooks/use-open-mobile-nav';
import { pulseBtnFunc } from '@/utils/pulseBtnFunc';
import { cn } from '@/lib/utils';

export const SubMenuLink = ({
	href,
	label,
	Icon,
	children,
}: SubMenuLinkType) => {
	const pathName = usePathname();
	const { onClose } = useOpenMobileNav();
	const isMobile = useMedia('(max-width: 1024px)');
	return (
		<div
			className={cn(
				'[&_>a]:hover:text-white relative flex items-center justify-between shadow-md hover:bg-rose-600 transition-colors',
				pathName === href && 'bg-rose-600  [&_>a]:text-white'
			)}
		>
			<Link
				href={href}
				className={cn(
					'relative flex items-center gap-x-1  min-h-[48px] capitalize text-sm overflow-hidden flex-auto px-2'
				)}
				onClick={(e) => {
					pulseBtnFunc(e);
					onClose();
				}}
			>
				{!isMobile && Icon && (
					<span className="opacity-80">
						<Icon className="size-3" />
					</span>
				)}
				<span
					className={cn(
						'inline-block overflow-hidden whitespace-nowrap text-ellipsis flex-grow-1 flex-shrink-1',
						!children && 'lg:max-w-[200px]'
					)}
				>
					{label}
				</span>
			</Link>
			{children}
		</div>
	);
};
