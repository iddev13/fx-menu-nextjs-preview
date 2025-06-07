import { featuresData } from '@/constants';
import { FeaturesCard } from './cards/features-card';

export const Features = () => {
	return (
		<div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 max-w-7xl w-full mx-auto">
			{featuresData.map((card) => (
				<FeaturesCard
					title={card.title}
					text={card.text}
					Icon={card.Icon}
					key={card.id}
				/>
			))}
		</div>
	);
};
