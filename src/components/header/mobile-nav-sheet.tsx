import {
	Sheet,
	SheetContent,
	SheetHeader,
	SheetTitle,
} from '@/components/ui/sheet';
import { MenuItemsMobile } from '@/components/header/menu-items-mobile';
import { useOpenMobileNav } from '@/hooks/use-open-mobile-nav';
import { menuItems } from '@/constants';

export const MobileNavSheet = () => {
	const { isOpen, onClose } = useOpenMobileNav();
	return (
		<Sheet open={isOpen} onOpenChange={onClose}>
			<SheetHeader className="hidden opacity-0 invisible">
				<SheetTitle>Navigation</SheetTitle>
			</SheetHeader>
			<SheetContent side="left" className="px-2 flex flex-col overflow-y-auto">
				<nav className="flex flex-col gap-y-2 pt-6 flex-1">
					<ul>
						{menuItems.map((menu) => {
							const depthLevel = 0; // Menu depth level
							return (
								<MenuItemsMobile
									items={menu}
									depthLevel={depthLevel}
									key={menu.id}
								/>
							);
						})}
					</ul>
				</nav>
			</SheetContent>
		</Sheet>
	);
};
