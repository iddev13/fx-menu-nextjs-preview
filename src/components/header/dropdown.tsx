import { useMedia } from 'react-use';
import { AnimatePresence } from 'framer-motion';

import { DropType, SubMenuType } from '@/types/header';
import { MotionUl } from '@/types/framer-motion';
import { MenuItems } from '@/components/header/menu-items';
import { MenuItemsMobile } from '@/components/header/menu-items-mobile';
import { cn } from '@/lib/utils';

export const Dropdown = ({
	submenu,
	dropdown,
	depthLevel,
	position,
}: DropType) => {
	// Menu depth level
	depthLevel = depthLevel + 1;

	// If Menu depth level > 1 (more than the second level), add class dropdown-submenu
	const dropdownClass = depthLevel > 1 && ' lg:top-0 z-[4] lg:left-full';
	// Submenu position, left or right
	const dropdownPositionClass =
		depthLevel > 1 && position === 'left' ? 'lg:-left-full' : '';

	const isMobile = useMedia('(max-width: 1024px)');

	return (
		<AnimatePresence>
			<MotionUl
				initial={{ opacity: 0, height: 0 }}
				animate={{ opacity: dropdown ? 1 : 0, height: dropdown ? 'auto' : 0 }}
				transition={{
					opacity: {
						duration: 0,
					},
					height: {
						duration: 0.3,
					},
				}}
				aria-haspopup="menu"
				aria-expanded={dropdown ? 'true' : 'false'}
				aria-hidden={dropdown ? 'false' : 'true'}
				data-depthlevel={depthLevel}
				className={cn(
					'dropdown block overflow-hidden relative lg:absolute lg:z-[3] lg:top-full lg:left-0 w-full lg:w-[200px] bg-secondary',
					dropdownClass,
					dropdown && 'animate-delayOverflow',
					dropdownPositionClass
				)}
			>
				{submenu.map((submenu: SubMenuType) => {
					if (isMobile) {
						return (
							<MenuItemsMobile
								items={submenu}
								depthLevel={depthLevel}
								key={submenu.id}
							/>
						);
					}
					return (
						<MenuItems
							items={submenu}
							depthLevel={depthLevel}
							key={submenu.id}
						/>
					);
				})}
			</MotionUl>
		</AnimatePresence>
	);
};
