import Image from 'next/image';

export const Intro = () => {
	return (
		<div className="relative min-h-[calc(100vh-48px)] h-full border-b-2 flex flex-col justify-center bg-gradient-to-b from-primary/30 px-4">
			<div className="absolute top-0 right-0 w-3/4 h-full">
				<Image
					src="/assets/image/preview-bg.webp"
					fill
					alt="Preview-BG"
					sizes="(max-width: 768px) 100vw"
					className="block absolute object-contain"
				/>
			</div>
			<div className="max-w-7xl w-full mx-auto">
				<div className="max-w-2xl w-full h-ful space-y-4">
					<h1 className="capitalize text-5xl">mega menu next JS</h1>
					<h2 className="capitalize text-2xl">
						mega menu next JS, tailwind CSS
					</h2>
					<p>Mega menu Next JS(15.3.4), Tailwind CSS(v4), Shadcn/UI, Framer-motion</p>
				</div>
			</div>
		</div>
	);
};
