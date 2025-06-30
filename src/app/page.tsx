import { Demo } from '@/components/demo';
import { Intro } from '@/components/intro';
import { Section } from '@/components/section';
import { Features } from '@/components/features';

export default function Home() {
	return (
		<div className="pt-12 space-y-4">
			<Intro />
			<Section id="features" title="features">
				<Features />
			</Section>
			<Section id="demo" title="demo">
				<Demo />
			</Section>
		</div>
	);
}
