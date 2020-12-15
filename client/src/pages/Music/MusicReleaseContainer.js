import { lazy, Suspense } from 'react';
const MusicItem = lazy(() => import('./MusicItem'));
const renderLoader = () => <p>Loading</p>;

const MusicReleaseContainer = ({ releases, toggle }) => {
	return releases.map((release) => (
		<Suspense fallback={renderLoader()}>
			<MusicItem artwork={release.artwork} title={release.title} date={release.date} toggle={toggle} />
		</Suspense>
	));
};

export default MusicReleaseContainer;
