'use client';

import { useEffect, useState } from 'react';
import { useMedia } from 'react-use';
import { Menu } from 'lucide-react';

import { menuItems } from '@/constants';
import { MenuItems } from '@/components/header/menu-items';
import { Button } from '@/components/ui/button';
import { useOpenMobileNav } from '@/hooks/use-open-mobile-nav';
import { Skeleton } from '@/components/ui/skeleton';

export const Nav = () => {
	const [isMounted, setIsMounted] = useState<boolean>(false);
	const isMobile = useMedia('(max-width: 1024px)');
	const { onOpen } = useOpenMobileNav();

	function fixedMenu() {
		const header = document.querySelector('#header');

		window.onload = () => {
			if (window.pageYOffset > 50) header?.classList.add('header__fixed');
		};

		// Pins a header to the top of the screen on scroll
		window.onscroll = function showHeader() {
			if (window.pageYOffset > 50) {
				header?.classList.add('header__fixed');
			} else {
				header?.classList.remove('header__fixed');
			}
		};
	}

	useEffect(() => {
		fixedMenu();
		setIsMounted(true);
	}, []);

	if (!isMounted) {
		return (
			<nav className="size-8 rounded-md mr-2 bg-gray-500/20 lg:flex lg:items-center lg:h-12 lg:w-auto lg:bg-transparent lg:rounded-none lg:flex-auto order-2 lg:order-none">
				<ul className="hidden lg:flex  lg:items-center gap-x-2 px-2">
					<li className="flex items-center overflow-hidden w-24 h-10 rounded-md">
						<Skeleton className="w-full h-full" />
					</li>
					<li className="flex items-center overflow-hidden w-24 h-10 rounded-md">
						<Skeleton className="w-full h-full" />
					</li>
					<li className="flex items-center overflow-hidden w-24 h-10 rounded-md">
						<Skeleton className="w-full h-full" />
					</li>
					<li className="flex items-center overflow-hidden w-24 h-10 rounded-md">
						<Skeleton className="w-full h-full" />
					</li>
					<li className="flex items-center overflow-hidden w-24 h-10 rounded-md">
						<Skeleton className="w-full h-full" />
					</li>
					<li className="flex items-center overflow-hidden w-24 h-10 rounded-md">
						<Skeleton className="w-full h-full" />
					</li>
				</ul>
			</nav>
		);
	}

	if (isMobile) {
		return (
			<div className="order-3 flex items-center justify-center">
				<Button
					asChild
					variant="outline"
					size="icon"
					className="mr-2 p-1.5 shadow-md dark:bg-transparent"
					onClick={onOpen}
					title="Menu"
				>
					<Menu />
				</Button>
			</div>
		);
	}

	return (
		<nav className="flex-auto relative flex justify-end">
			<div className="w-full md:px-2 lg:flex lg:items-center lg:w-min lg:px-0">
				<ul className="block lg:flex">
					{menuItems.map((menu) => {
						const depthLevel = 0; // Menu depth level
						return (
							<MenuItems items={menu} depthLevel={depthLevel} key={menu.id} />
						);
					})}
				</ul>
			</div>
		</nav>
	);
};
