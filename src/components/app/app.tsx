import { Suspense, lazy } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import FeedPage from '../../page/feed-page/feed-page';
import PageNotFound from '../page-not-found/page-not-found';
import PageLayout from '../../page/page-layout/page-layout';
import LoadingScreen from '../loading-screen/loading-screen';

const ChannelDetailPage = lazy(
  () => import('../../page/channel-detail-page/channel-detail-page'),
);

const SearchFeedPage = lazy(
  () => import('../../page/search-feed-page/search-feed-page'),
);

const VideoDetailPage = lazy(
  () => import('../../page/video-detail-page/video-detail-page'),
);

function App(): JSX.Element {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<PageLayout />}>
          <Route path="/" index element={<FeedPage />} />
          <Route
            path="/video/:id"
            element={
              <Suspense fallback={<LoadingScreen />}>
                <VideoDetailPage />
              </Suspense>
            }
          />
          <Route
            path="/channel/:id"
            element={
              <Suspense fallback={<LoadingScreen />}>
                <ChannelDetailPage />
              </Suspense>
            }
          />
          <Route
            path="/search/:searchTerm"
            element={
              <Suspense fallback={<LoadingScreen />}>
                <SearchFeedPage />
              </Suspense>
            }
          />
          <Route path="*" element={<PageNotFound />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
