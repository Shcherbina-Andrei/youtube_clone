import {BrowserRouter, Routes, Route} from 'react-router-dom';
import ChanelDetailPage from '../../page/chanel-detail-page/chanel-detail-page';
import FeedPage from '../../page/feed-page/feed-page';
import SearchFeedPage from '../../page/search-feed-page/search-feed-page';
import VideoDetailPage from '../../page/video-detail-page/video-detail-page';

function App(): JSX.Element {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" index element={<FeedPage />} />
        <Route path="/video/:id" element={<VideoDetailPage />} />
        <Route path="/chanel/:id" element={<ChanelDetailPage />} />
        <Route path="/search/:searchTerm" element={<SearchFeedPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
