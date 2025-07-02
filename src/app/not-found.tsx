import Link from 'next/link';

import { Button } from '@/components/ui/button';
import { Separator } from '@/components/ui/separator';

export default function NotFound() {
	return (
		<div className="flex flex-col items-center justify-center min-h-screen h-full space-y-8">
			<div className="flex items-center gap-x-4 justify-center">
				<span className="inline-flex text-2xl lg:text-5xl font-bold text-primary">
					404
				</span>
				<Separator
					orientation="vertical"
					className="data-[orientation=vertical]:h-6 lg:data-[orientation=vertical]:h-12 w-0.5 bg-secondary-foreground"
				/>
				<h2 className="font-bold">Not Found</h2>
			</div>
			<div className="flex flex-col items-center justify-center space-y-4">
				<p>Could not find requested resource</p>
				<Button>
					<Link href="/">Return Home</Link>
				</Button>
			</div>
		</div>
	);
}
