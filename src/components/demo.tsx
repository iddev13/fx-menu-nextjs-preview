import { worksData } from '@/constants';
import { WorkCard } from '@/components/cards/work-card';

export const Demo = () => {
	return (
		<div>
			{worksData.data.map((group) => (
				<div key={group.id} className="max-w-7xl w-full mx-auto space-y-4 px-4">
					<h2 className="text-xl capitalize">
						<b>{group.title}</b>
					</h2>
					<div className="grid lg:grid-cols-2 gap-4 pb-4">
						{group.works.map((card) => (
							<WorkCard
								key={card.id}
								href={card.href}
								label={card.label}
								imageUrl={card.imageUrl}
							/>
						))}
					</div>
				</div>
			))}
		</div>
	);
};
