import { FeaturesType } from '@/types/header';
import { Card, CardContent, CardFooter } from '../ui/card';

export const FeaturesCard = ({ title, text, Icon }: FeaturesType) => {
	return (
		<Card className="relative flex flex-col items-center justify-center max-h-80 h-full overflow-hidden  rounded-xl p-4 transition-all hover:-mt-1 hover:shadow-md hover:shadow-secondary hover:bg-secondary duration-400 text-center border-none gap-0">
			<CardContent className="flex items-center justify-center [&_svg]:h-12 [&_svg]:w-12 [&_svg]:fill-rose-500">
				<Icon />
			</CardContent>
			<CardFooter className="flex items-center justify-center flex-col p-0 m-0">
				<h3 className="mb-2 text-xl">{title}</h3>
				<p className="text-sm text-muted-foreground">{text}</p>
			</CardFooter>
		</Card>
	);
};
