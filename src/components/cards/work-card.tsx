import Image from 'next/image';

import { WorksType } from '@/types/header';
import { Card, CardContent, CardFooter } from '../ui/card';
import { Button } from '../ui/button';

export const WorkCard = ({ href, label, imageUrl }: WorksType) => {
	return (
		<Card className="max-w-[650px] w-full rounded-lg p-4 space-y-4 pb-0 shadow-md dark:shadow-secondary">
			<CardContent className="relative w-full h-48 md:h-64 lg:h-80rounded-lg overflow-hidden rounded-md">
				<a href={href} target="_blank" rel="noopener noreferrer">
					<Image
						src={imageUrl}
						alt={label}
						fill
						sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
					/>
				</a>
			</CardContent>
			<CardFooter className="px-0">
				<Button
					asChild
					size="lg"
					className="bg-rose-500 w-full capitalize text-white hover:bg-rose-600"
				>
					<a href={href} target="_blank" rel="noopener noreferrer">
						{label}
					</a>
				</Button>
			</CardFooter>
		</Card>
	);
};
