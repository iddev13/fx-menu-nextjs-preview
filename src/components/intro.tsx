'use client';

import { cn } from '@/lib/utils';
import Image from 'next/image';
import { useMedia } from 'react-use';
import { Button } from './ui/button';

export const Intro = () => {
	const isMobile = useMedia('(max-width: 1024px)');
	return (
		<div className="relative min-h-[calc(100vh-48px)] h-full border-b-2 flex flex-col justify-center bg-gradient-to-b from-primary/30 px-4">
			<div
				className={cn(
					'absolute top-0 right-0 w-3/4 h-full',
					isMobile &&
						"w-full after:block after:content-[''] after:absolute after:top-0 after:left-0 after:z-[1] after:w-full after:h-full after:bg-white/90 dark:after:bg-black/90"
				)}
			>
				<Image
					src={
						isMobile
							? '/assets/image/preview-bg-mobile.webp'
							: '/assets/image/preview-bg.webp'
					}
					fill
					alt="Preview-BG"
					sizes="(max-width: 768px) 100vw"
					className="block absolute object-contain"
				/>
			</div>
			<div className="max-w-7xl w-full mx-auto">
				<div className="max-w-xl w-full h-ful space-y-4 relative z-10 ">
					<h1 className="capitalize text-5xl">mega menu next JS</h1>
					<h2 className="capitalize text-2xl">
						FX Menu next JS<small>(15.3.4)</small>, Tailwind CSS
						<small>(v4)</small>
					</h2>
					<p>
						FX Menu Next JS is a menu (navigation) created on Next JS, Tailwind
						CSS, Shadcn/UI. You can use FX Menu as a horizontal, vertical menu
						or admin panel. This is a responsive and fully responsive menu
						suitable for any type of website. Dark & light theme
					</p>
					<div className="flex items-center gap-4">
						<Button
							asChild
							size="lg"
							className="bg-rose-500 text-white hover:bg-rose-600"
						>
							<a href="#demo">Demo</a>
						</Button>
						<Button
							asChild
							size="lg"
							className="bg-rose-500 text-white hover:bg-rose-600"
						>
							<a href="=/" target="_blank" rel="noopener noreferrer">
								Buy
							</a>
						</Button>
					</div>
				</div>
			</div>
		</div>
	);
};
