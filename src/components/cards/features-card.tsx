import { FeaturesType } from '@/types/header';

export const FeaturesCard = ({ title, text, Icon }: FeaturesType) => {
	return (
		<div className="relative flex flex-col items-center justify-center max-h-80 h-full overflow-hidden  rounded-xl p-4 transition-all hover:-translate-y-1 hover:shadow-md hover:shadow-secondary hover:bg-secondary duration-500 text-center">
			<div className="flex items-center justify-center mb-4 [&_svg]:h-12 [&_svg]:w-12 [&_svg]:fill-rose-500">
				<Icon />
			</div>
			<h2 className="mb-2 text-xl">{title}</h2>
			<p className="text-sm text-muted-foreground">{text}</p>
		</div>
	);
};
