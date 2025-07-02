export const Footer = () => {
	return (
		<div className="border-t border-neutral-500 text-center py-4 bg-stone-300 dark:bg-secondary">
			<div className="capitalize text-center">
				&copy; created by ID-Dev &nbsp;{new Date().getFullYear()}
			</div>
		</div>
	);
};
