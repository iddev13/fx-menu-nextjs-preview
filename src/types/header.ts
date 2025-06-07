import { LucideIcon } from 'lucide-react';

export type HeaderLinkType = {
	href: string;
	label: string;
	Icon?: LucideIcon;
	isActive?: boolean;
	children?: React.ReactNode;
};

export type NavItemType = {
	id: number;
	href: string;
	label: string;
	Icon?: LucideIcon;
	position?: 'left' | 'right';
	subMenu?: Array<SubMenuType>;
};

export type SubMenuType = {
	id: number;
	href: string;
	label: string;
	Icon?: LucideIcon;
	position?: 'left' | 'right';
	subMenu?: Array<SubMenuType>;
};

export type SubMenuLinkType = {
	href: string;
	label: string;
	Icon?: LucideIcon;
	children?: React.ReactNode;
};

export type ThemeColorsItemType = {
	id: number;
	color: string;
	title: string;
	bg: string;
};

export type DropType = {
	submenu: Array<SubMenuType>;
	dropdown: boolean;
	depthLevel: number;
	position?: string | undefined;
};

export type DropdownArrowType = {
	dropdownStatus: boolean;
};

export type DropdownBtnType = {
	href: string;
	label: string;
	children: React.ReactNode;
	dropdownStatus?: boolean;
	depthLevel?: number;
};

export type SocialLinkType = {
	href: string;
	label: string;
	imageUrl: string;
};

export type FeaturesType = {
	id?: number;
	title: string;
	text: string;
	Icon: React.FC<React.SVGProps<SVGSVGElement>>;
};

export type WorksType = {
	id?: number;
	href: string;
	label: string;
	imageUrl: string;
};

export type WorksGroupType = {
	id?: number;
	title: string;
	works: WorksType[];
};

export type WorksDataType = {
	data: WorksGroupType[];
};
