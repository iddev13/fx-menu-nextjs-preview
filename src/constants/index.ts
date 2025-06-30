import { DropdownIcon } from '@/components/icons/dropdown-icon';
import { DropdownMenuIcon } from '@/components/icons/dropdown-menu-icon';
import { FullIcon } from '@/components/icons/full-icon';
import { JsSimpleIcon } from '@/components/icons/js-simple-icon';
import { MenuIcon } from '@/components/icons/menu-icon';
import { NextjsIcon } from '@/components/icons/nextjs-icon';
import { ResponsiveIcon } from '@/components/icons/responsive-icon';
import { SvgIcon } from '@/components/icons/svg-icon';
import { TailwindIcon } from '@/components/icons/tailwind-icon';
import { ToTopIcon } from '@/components/icons/to-top-icon';
import { UpdateIcon } from '@/components/icons/update-icon';
import { ValidIcon } from '@/components/icons/valid-icon';
import { FeaturesType, NavItemType, WorksDataType } from '@/types/header';

export const menuItems: NavItemType[] = [
	{
		id: 1,
		href: '#home',
		label: 'home',
	},
	{
		id: 2,
		href: '#features',
		label: 'features',
	},
	{
		id: 3,
		href: '#demo',
		label: 'demo',
	},
];

export const featuresData: FeaturesType[] = [
	{
		id: 1,
		title: 'Off-Canvas Menu',
		text: 'off Canvas menu on default',
		Icon: MenuIcon,
	},
	{
		id: 2,
		title: 'Next JS',
		text: 'The React Framework for the Web',
		Icon: NextjsIcon,
	},
	{
		id: 3,
		title: 'Full Page Menu',
		text: 'Full-Screen Menu',
		Icon: FullIcon,
	},
	{
		id: 4,
		title: 'Responsive Menu',
		text: 'Desktops, Tablets and Mobile',
		Icon: ResponsiveIcon,
	},
	{
		id: 5,
		title: 'Cross Browser',
		text: 'Worked On All Major Browser',
		Icon: ValidIcon,
	},
	{
		id: 6,
		title: 'Tailwind CSS',
		text: 'One of the best CSS libraries',
		Icon: TailwindIcon,
	},
	{
		id: 7,
		title: 'Fixed Menu',
		text: 'Fixed Top With Animation',
		Icon: ToTopIcon,
	},
	{
		id: 8,
		title: 'Multi level SubMenu',
		text: '3 level SubMenu',
		Icon: DropdownMenuIcon,
	},
	{
		id: 9,
		title: 'SVG',
		text: 'Used SVG Icons',
		Icon: SvgIcon,
	},
	{
		id: 10,
		title: 'Dropdowns',
		text: 'You can use like a dropdown menu',
		Icon: DropdownIcon,
	},
	{
		id: 11,
		title: 'Javascript options',
		text: 'Javascript/CSS effects',
		Icon: JsSimpleIcon,
	},
	{
		id: 12,
		title: 'Free Update',
		text: 'Free updates, bug fixes and improvements',
		Icon: UpdateIcon,
	},
];

export const worksData: WorksDataType = {
	data: [
		{
			id: 1,
			title: 'mega menu',
			works: [
				{
					id: 8,
					href: 'https://mega-menu-with-catalog-nextjs-shadc-ten.vercel.app/',
					label: 'mega menu with catalog v2',
					imageUrl:
						'/assets/image/works/mega-menu-with-catalog-nextjs-shadcn-v2.webp',
				},
				{
					id: 7,
					href: 'https://mega-menu-with-catalog-nextjs-shadc.vercel.app/',
					label: 'mega menu with catalog v1',
					imageUrl:
						'/assets/image/works/mega-menu-with-catalog-nextjs-shadcn-v1.webp',
				},
				{
					id: 6,
					href: 'https://mega-menu-nextjs-shadcn-v6.vercel.app/',
					label: 'mega menu v6',
					imageUrl: '/assets/image/works/mega-menu-nextjs-shadcn-v6.webp',
				},
				{
					id: 5,
					href: 'https://mega-menu-nextjs-shadcn-v5.vercel.app/',
					label: 'mega menu v5',
					imageUrl: '/assets/image/works/mega-menu-nextjs-shadcn-v5.webp',
				},
				{
					id: 4,
					href: 'https://mega-menu-nextjs-shadcn-v4.vercel.app/',
					label: 'mega menu v4',
					imageUrl: '/assets/image/works/mega-menu-nextjs-shadcn-v4.webp',
				},
				{
					id: 3,
					href: 'https://mega-menu-nextjs-shadcn-v3.vercel.app/',
					label: 'mega menu v3',
					imageUrl: '/assets/image/works/mega-menu-nextjs-shadcn-v3.webp',
				},
				{
					id: 2,
					href: 'https://mega-menu-nextjs-shadcn-v2.vercel.app/',
					label: 'mega menu v2',
					imageUrl: '/assets/image/works/mega-menu-nextjs-shadcn-v2.webp',
				},
				{
					id: 1,
					href: 'https://mega-menu-nextjs-shadcn-v1.vercel.app/',
					label: 'mega menu v1',
					imageUrl: '/assets/image/works/mega-menu-nextjs-shadcn-v1.webp',
				},
			],
		},
		{
			id: 2,
			title: 'full-screen menu',
			works: [
				{
					id: 1,
					href: 'https://full-screen-menu-nextjs-shadcn-v1.vercel.app/',
					label: 'full-screen menu v1',
					imageUrl:
						'/assets/image/works/full-screen-menu-nextjs-shadcn-v1.webp',
				},
				{
					id: 2,
					href: 'https://full-screen-menu-nextjs-shadcn-v2.vercel.app/',
					label: 'full-screen menu v2',
					imageUrl:
						'/assets/image/works/full-screen-menu-nextjs-shadcn-v2.webp',
				},
			],
		},
		{
			id: 3,
			title: 'other menu',
			works: [
				{
					id: 1,
					href: 'https://simple-menu-with-dropdown-nextjs-shadcn-v1-99r9.vercel.app/',
					label: 'simple menu with dropdown',
					imageUrl:
						'/assets/image/works/simple-menu-nextjs-shadcn-with-dropdown.webp',
				},
				{
					id: 2,
					href: 'https://simple-menu-nextjs-shadcn-v1.vercel.app/',
					label: 'simple menu v1',
					imageUrl: '/assets/image/works/simple-menu-nextjs-shadcn.webp',
				},
			],
		},
	],
};
