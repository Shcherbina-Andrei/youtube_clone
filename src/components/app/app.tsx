import {BrowserRouter, Routes, Route} from 'react-router-dom';
import ChannelDetailPage from '../../page/channel-detail-page/channel-detail-page';
import FeedPage from '../../page/feed-page/feed-page';
import SearchFeedPage from '../../page/search-feed-page/search-feed-page';
import VideoDetailPage from '../../page/video-detail-page/video-detail-page';
import PageNotFound from '../page-not-found/page-not-found';

function App(): JSX.Element {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" index element={<FeedPage />} />
        <Route path="/video/:id" element={<VideoDetailPage />} />
        <Route path="/channel/:id" element={<ChannelDetailPage />} />
        <Route path="/search/:searchTerm" element={<SearchFeedPage />} />
        <Route path="*" element={<PageNotFound />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
