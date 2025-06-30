import { ThemeToggle } from '@/components/theme-toggle';
import { HeaderLogo } from '@/components/header/header-logo';
import { Nav } from '@/components/header/nav';

export const Header = () => {
	return (
		<header
			id="header"
			className="absolute top-0 left-0 right-0 z-50 shadow-md bg-stone-300 dark:bg-secondary"
		>
			<div className="flex items-center max-w-5xl mx-auto">
				<HeaderLogo />
				<Nav />
				<ThemeToggle />
			</div>
		</header>
	);
};
