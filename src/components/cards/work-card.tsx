import Link from 'next/link';
import Image from 'next/image';

import { WorksType } from '@/types/header';
import { Card, CardContent, CardFooter } from '../ui/card';
import { Button } from '../ui/button';

export const WorkCard = ({ href, label, imageUrl }: WorksType) => {
	return (
		<Card className="max-w-[650px] rounded-lg overflow-hidden p-4 space-y-4 pb-0">
			<CardContent className="relative w-full h-48 md:h-64 lg:h-80rounded-lg overflow-hidden">
				<Image
					src={imageUrl}
					alt={label}
					fill
					sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
				/>
			</CardContent>
			<CardFooter className="px-0">
				<Button size="lg" className="bg-rose-500 w-full capitalize">
					<Link href={href}>{label}</Link>
				</Button>
			</CardFooter>
		</Card>
	);
};
