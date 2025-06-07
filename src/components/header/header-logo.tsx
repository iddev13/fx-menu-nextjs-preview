import Image from 'next/image';
import Link from 'next/link';

export const HeaderLogo = () => {
	return (
		<div className="select-none  mr-4 lg:mr-8 flex-auto flex items-center lg:flex-none">
			<Link
				href={'/'}
				className="inline-block relative
		 w-20 h-12 whitespace-nowrap"
			>
				<Image
					className="block w-full h-full top-0 left-0 z-10 object-contain"
					src={'/assets/image/fx-logo2.png'}
					fill
					alt="LOGO"
					sizes="(max-width: 768px) 33vw, (max-width: 1200px) 22vw, 10vw"
					priority={true}
				/>
			</Link>
		</div>
	);
};
