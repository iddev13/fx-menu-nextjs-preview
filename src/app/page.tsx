import { Demo } from '@/components/demo';
import { Section } from '@/components/section';

export default function Home() {
	return (
		<div className="pt-14 space-y-4">
			{/* <Intro />
			<Section id='features' title="features">
				<Features />
			</Section> */}
			<Section id='demo' title="demo">
				<Demo />
			</Section>
		</div>
	);
}
