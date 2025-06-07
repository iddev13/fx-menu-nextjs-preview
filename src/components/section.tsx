import { cn } from '@/lib/utils';

type Props = {
	id: string;
	title: string;
	children: React.ReactNode;
	className?: string;
};

export const Section = ({ id, title, children, className }: Props) => {
	return (
		<section id={id} className={cn(className)}>
			<div className="flex flex-col items-center mb-4">
				<h1 className="inline-block text-3xl capitalize text-center after:block after:content-[''] after:w-full after:h-0.5 leading-relaxed after:bg-rose-500">
					{title}
				</h1>
			</div>
			<div>{children}</div>
		</section>
	);
};
