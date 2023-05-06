import Sidebar from '../../components/sidebar/sidebar';
import Videos from '../../components/videos/videos';
import PageLayout from '../page-layout/page-layout';
import { useEffect } from 'react';
import styles from './feed-page.module.css';
import { useAppDispatch, useAppSelector } from '../../hooks';
import {
  getSelectedCategory,
  getStatusDataLoading,
} from '../../store/app-process/selectors';
import { Category } from '../../types/category';
import { changeCategory } from '../../store/app-process/app-process';
import { getFeedVideos } from '../../store/videos-data/selectors';
import { fetchFeedVideosAction } from '../../store/api-actions';
import LoadingScreen from '../../components/loading-screen/loading-screen';

function FeedPage(): JSX.Element {
  const dispatch = useAppDispatch();
  const selectedCategory = useAppSelector(getSelectedCategory);
  const suggestedItems = useAppSelector(getFeedVideos);
  const loadingStatus = useAppSelector(getStatusDataLoading);

  const setSelectedCategory = (category: Category) => {
    dispatch(changeCategory(category.name));
  };

  useEffect(() => {
    dispatch(fetchFeedVideosAction(selectedCategory));
  }, [selectedCategory, dispatch]);

  return (
    <PageLayout>
      <div className={styles.feed}>
        <div className={styles.sidebarWrapper}>
          <Sidebar
            selectedCategory={selectedCategory}
            setSelectedCategory={setSelectedCategory}
          />
        </div>
        <div className={styles.videosWrapper}>
          <h2 className={styles.videosTitle}>
            {selectedCategory} <span style={{ color: '#f31503' }}>videos</span>
          </h2>
          {!suggestedItems || loadingStatus ? (
            <LoadingScreen />
          ) : (
            <Videos items={suggestedItems.items} />
          )}
        </div>
      </div>
    </PageLayout>
  );
}

export default FeedPage;
